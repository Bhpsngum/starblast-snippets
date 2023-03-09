// ==UserScript==
// @name         Custom Weapon Models
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Use custom weapon models client-side
// @author       Bhpsngum
// @include      /^https\:\/\/starblast\.io\/(app.html(\?.+)*)*$/
// @icon         https://starblast.io/static/img/icon64.png
// @grant        none
// ==/UserScript==

(async function(){
  /* WARNING
  This is NOT a snippet script designed for Modding, therefore it won't work in Modding, you can skip this script and go exploring others :)

  Shortcut (all OS):
  * Ctrl + Shift + P to open import prompt
  * Ctrl + Shift + Alt + P to toggle preload mode, which allows it to save the URL for preloading later

  Required:
  * ES6 or higher
  * Support fetch() function
  */

  if (document.querySelector("script#coffeescript") == null) {
    let coffee = document.createElement("script");
    coffee.id = "coffeescript";
    coffee.src = "https://cdn.jsdelivr.net/gh/jashkenas/coffeescript@master/lib/coffeescript-browser-compiler-legacy/coffeescript.js";
    document.head.appendChild(coffee)
  }
  const searchProp = function (parent, conditional) {
    for (let key in parent) try {
      if (conditional(parent[key], key)) return {value: parent[key], key: key};
    } catch (e) {}
    return {value: null, key: null}
  }
  let a = [];
  Collectible.toString().replace(/this\.(\w+)\s*\=\s*\w,/g, (v,e) => a.push(e));
  a.shift();
  this.CustomWeaponModels = {
    console: {
      color: "#00FFFF",
      name: "CustomWeaponModelsLoader",
      handle: function (action, ...logs) { return console[action](`%c[${this.name}] ` + logs[0], `color: ${this.color}`, ...logs.slice(1))},
      log: function (...logs) { return this.handle("log", ...logs) },
      error: function (...logs) { return this.handle("error", ...logs) },
      warn: function (...logs) { return this.handle("warn", ...logs) }
    },
    list: WeaponModel,
    import: async function (URL) {
      if (URL == null) return this.reset();
      this.console.log("Importing weapon models...");
      try {
        let data = JSON.parse(await (await window.fetch(URL)).text());
        for (let i of data.data) this.set(i.data, i.type, true);
        this.update();
        this.console.log("Imported weapon models from the pack '" + (data.name || "Unknown") + "' by " + (data.author || "Anonymous") + ".");
        return true
      }
      catch (e) {
        this.console.error("Failed to import the weapon models. Caught error:", e);
        this.reset();
        return false
      }
    },
    local: {
      prefix: "CustomWeaponModels_",
      data: function (name, val) {
        switch (arguments.length) {
          case 0: return null;
          case 1: return localStorage.getItem(this.prefix + name);
          default: 
            if (val == null) return localStorage.removeItem(this.prefix + name), null;
            localStorage.setItem(this.prefix + name, val);
            return this.data(name);
        }
      }
    },
    reset: async function () {
      return await this.import("https://raw.githubusercontent.com/Bhpsngum/starblast-snippets/master/CustomWeaponModels/Neuronality_Default/manifest.json")
    },
    set: function (coffeescript, type, ignoreUpdate) {
      this.list[String(type).toUpperCase().trim().replace(/\s/g, "_") + "_MODEL"] = Function("return " + CoffeeScript.compile(coffeescript))();
      if (!ignoreUpdate) this.update()
    },
    update: function () {
      // reset collectible shapes
      window.Collectible.models = {};
      this.list.images_buffer = [];
      this.list.icons_buffer = [];
      let main = searchProp(window.module.exports.settings, (v, k) => v.mode).value;
      let manager = searchProp(main, (v, k) => v.collectibles != null).value;
      let collectibles = manager.collectibles;
      collectibles.collectibles.forEach(function (v) {
        let props = a.map(i => v[i]);
        collectibles.remove(v);
        collectibles.add.apply(collectibles, props);
      });
      // reset projectiles
      let proj = searchProp(manager, (v, k) => Array.isArray(v.projectiles)).value;
      proj.projectiles.forEach(e => e.dispose());
      proj.projectiles = [];
      // reset pods
      let pods = searchProp(manager, (v, k) => v.pods).value.pods;
      pods.models = {};
      let names = ["mining", "attack", "defence"];
      for (let i = 0; i < names.length; ++i) {
        let subpods = pods[names[i] + "_pods"];
        while (subpods.length > 0) pods.remove(i, 0);
      }
    },
    initialize: function () {
      let wait = setInterval(function () {
        try { CoffeeScript } catch (e) { return }
        clearInterval(wait);
        let loadURL = this.local.data("importURL");
        if (this.local.data("keepURL") == '1' && loadURL != null) this.import(loadURL);
        else this.reset();
        window.addEventListener('keydown', function (e) {
          if (e.ctrlKey && e.shiftKey) switch (e.keyCode) {
            case 80: /* P */ {
              if (e.altKey) {
                let enableSave = !(this.local.data('keepURL') == '1'), status = enableSave ? "ENABLED": "DISABLED";
                this.local.data('keepURL', +enableSave);
                alert(`Preload mode for Custom Station Module Modles Loader is ${status}`);
                this.console.log(`Preload mode is ${status}`);
                break;
              }
              let res = prompt("Paste manifest file (JSON format) URL here to import weapon models (leave blank to reset):");
              if (res != null) {
                res = res == '' ? null : res;
                if (confirm("Do you want to save this URL for preloading later?")) this.local.data("importURL", res);
                this.import(res).then(success => {
                  alert(success ? "Weapon models successfully loaded." : "Failed to import weapon models. Check DevTools console for more details.")
                })
              }
              break
            }
          }
        }.bind(this));
      }.bind(this), 500);
    }
  }
  this.CustomWeaponModels.initialize();
}).call(window);
