// ==UserScript==
// @name         Modding Shared Host (MSH)
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Collaborative Modding session on your own Modding Tab
// @author       Bhpsngum
// @match        https://starblast.data.neuronality.com/modding/moddingcontent.html
// @icon         https://starblast.io/static/img/icon64.png
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let terminal = window.$("#terminal").terminal();

	class ModdingSHSession {
		constructor (server, token, terminal, nonSecure = false) {
			this.server = server;
			this.token = token;
			this.nonSecure = nonSecure;
			this.terminal = terminal;
			this.stopped = false;
			this.started = false;
			this.pending_commands = [];
		}

		static parse (string, terminal) {
			let args = string.split(" ").map(e => e.trim()).filter(e => e);
			let nonSecure = false;
			if (args.includes("-n") || args.includes("--non-secure")) {
				nonSecure = true;
				let idx = args.indexOf("-n");
				if (idx === -1) idx = args.indexOf("--non-secure");
				args.splice(idx, 1);
			}

			return new this(args[0], args[1], terminal, nonSecure);
		}

		endSession () {
			if (!this.stopped) {
				this.started = true;
				this.stopped = true;
				this.terminal.echo("Ending session...");
			}
		}

		closeSocket () {
			this.ws.close();
			setTimeout(function () {
				if (!this.closed) {
					this.closed = true;
					this.terminal.set_prompt("> ");
				}
			}.bind(this), 5000);
		}

		connect () {
			try {
				let ws = this.ws = new WebSocket(`ws${this.nonSecure ? "" : "s"}://${this.server}/`);
				ws.onopen = function () {
					if (this.stopped) return this.closeSocket();
					ws.send(JSON.stringify({
						name: "join",
						token: this.token
					}));
				}.bind(this);

				ws.onmessage = function (data) {
					if (this.stopped) return this.closeSocket();
					try {
						let packet = JSON.parse(data.data);
						if (packet.message && !Array.isArray(packet.message)) packet.message = [packet.message];
						switch (packet.name) {
							case "session_start":
								this.started = true;
								this.user = packet.username || "guest";
								if (packet.host) this.server = packet.host;
								this.prompt = `${this.user} @ ${this.server}`;
								for (let i of this.pending_commands) this.execute(i);
								this.pending_commands = [];
								this.terminal.echo(`Session connected successfully.`);
								if (packet.region) {
									this.terminal.echo(`Mod region: ${packet.region}`);
									this.prompt += ` (${packet.region})`;
								}
								this.terminal.echo(`Type 'logout' to end the session.`);
								this.terminal.set_prompt(`[[bg;green;]${this.prompt}#] `);
								ws.ping_timer = setInterval(() => {
									if (this.closed) return clearInterval(ws.ping_timer);
									ws.send(JSON.stringify({name: "ping"}));
								}, 5000);
								break;
							case "session_end":
								if (packet.error) {
									let message = packet.message;
									if (!message) {
										if (!this.started) message = "Failed to establish connection (ERR_CONNECTION_REFUSED)";
										else message = "Server closes connection unexpectedly."
									}
									this.terminal.error(message);
								}
								else this.terminal.echo("Session finished.");
								this.endSession();
								break;
							case "command":
								this.terminal.echo(`${this.prompt}# ${packet.command}`);
								break;
							case "message":
								for (let m of packet.message) this.terminal.echo(m);
								break;
							case "error":
								for (let e of packet.message) this.terminal.error(e);
								break;
						}
					}
					catch {}
				}.bind(this);

				ws.onclose = function () {
					if (!this.closed && inSession === this) {
						this.terminal.set_prompt("> ");
					}
					this.closed = true;
					if (!this.stopped) {
						this.terminal.echo("Session connection removed.");
						this.endSession();
					}
				}.bind(this);

				ws.onerror = function () {
					this.terminal.error("Failed to connect: Cannot resolve host.");
					this.endSession();
					this.close();
				}.bind(this);
			}
			catch (e) {
				this.terminal.error("Failed to connect: Cannot resolve host.");
				this.endSession();
			}
		}

		execute (command) {
			if (!this.started) this.pending_commands.push(command);
			else this.ws.send(JSON.stringify({
				name: "execute",
				command
			}));
		}

		close () {
			if (!this.closed) {
				this.closeSocket();
				this.endSession();
			}
		}
	}

	let old_interpreter = terminal.export_view().interpreters.top().interpreter;
	let inSession = null;

	let getSession = function () {
		if (!inSession || inSession.closed) {
			return null;
		}
		return inSession;
	}

	terminal.set_interpreter(function (input, termInstance) {
		let args = (input || "").trim().split(" ").map(e => e.trim());
		let command = args[0] || "";
		let session = getSession();
		if (session) {
			if (command === "logout") {
				session.close();
			}
			else session.execute(input);
		}
		else {
			if (command === "msh") {
				inSession = ModdingSHSession.parse(args.slice(1).join(" "), terminal);
				if (!inSession.server) {
					terminal.echo(`msh [flags] <server> [token]\nConnect to Modding Shared Host (MSH) session.\nAvailable flags:\n\t -n, --non-secure: Server is using non-secure WebSocket (ws://)`)
					inSession = null;
				}
				else {
					terminal.echo("Connecting to Modding SH session...");
					inSession.connect();
				}
			}
			else old_interpreter.call(this, input, termInstance);
		}
	})
})();
