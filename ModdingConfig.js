// require the NPM (after installed)

const StarblastModding = require("../../../../../GitRepos/starblast-modding");

// Load secrets file, you can keep the line below disabled (adding "//" into it) if you don't neeed it

const secrets = require("../secrets.js");

// Just use this configuration when setting up

let container = new StarblastModding.BrowserClient({
  cacheECPKey: true,
  sameCodeExecution: true,
  logMessages: true,
  logErrors: true,
  crashOnException: false,
  compresssWSMessages: true, // if you don't care about network bandwidth (which only affects a bit), use 'false'
});

// you can set to any region later using the same command

container.setRegion("Asia");

// The ECP Key must be secret, so i suggest having a file in the same directory to store your ECP key
// here, `secret.js`

container.setECPKey(secrets.ECPKey); // a string containing the ECP code like "01234-56789"

// Connect to the file which you will use for editing and running mod codes

container.loadCodeFromLocal("./ModdingEditor.js", true, 5000);

// setInterval to keep the process alive

const processInt = setInterval(function () {}, 2 ** 31 - 1);

// Setup some basic 'commands' (start, stop), this is optional.

Object.defineProperties(global, {
  start: {
    get () { container.start().catch(e => container.getNode().error(e)) },
    set (val) {}
  },
  stop: {
    get () { container.stop().catch(e => container.getNode().error(e)) },
    set (val) {}
  },
  exit: {
    get () { clearInterval(processInt) },
    set (val) {}
  },
  game: {
    get () { return container.getGame() },
    set (val) {}
  }
});

// setup some global variables

global.container = container;
