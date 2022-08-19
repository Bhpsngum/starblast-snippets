// ==UserScript==
// @name         Custom Weapon Models
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use custom weapon models client-side
// @author       Bhpsngum
// @include      /^https\:\/\/starblast\.io\/(app.html(\?.+)*)*$/
// @icon         https://starblast.io/static/img/icon64.png
// @grant        none
// ==/UserScript==

(async function(){
  /* WARNING
  This is NOT a snippet script designed for Modding, therefore it won't work in Modding, you can skip this script and go exploring others :)

  Shortcut:
  * Ctrl + Shift + P (all OS) to open import prompt

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
    list: WeaponModel,
    import: async function (URL) {
      console.log("Importing weapon models...");
      try {
        let data = JSON.parse(await (await window.fetch(URL)).text());
        for (let i of data.data) this.set(i.data, i.type, true);
        this.update();
        console.log("[CustomWeaponModelsLoader] Imported weapon models from the pack '" + (data.name || "Unknown") + "' by " + (data.author || "Anonymous") + ".");
        return true
      }
      catch (e) {
        console.error("[CustomWeaponModelsLoader] Failed to import the weapon models. Caught error:", e);
        this.reset();
        return false
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
      let collectibles = searchProp(main, (v, k) => v.collectibles != null).value.collectibles;
      collectibles.collectibles.forEach(function (v) {
        let props = a.map(i => v[i]);
        collectibles.remove(v);
        collectibles.add.apply(collectibles, props);
      });
    }
  }
  let wait = setInterval(function () {
    try { CoffeeScript } catch (e) { return }
    clearInterval(wait);
    CustomWeaponModels.reset();
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey) switch (e.keyCode) {
        case 80: /* P */ {
          let res = prompt("Paste manifest file (JSON format) URL here to import weapon models (leave blank to reset):");
          if (res != null) (res == '' ? CustomWeaponModels.reset() : CustomWeaponModels.import(res)).then(success => {
            alert(success ? "Weapon models successfully loaded." : "Failed to import weapon models. Check DevTools console for more details.")
          })
          break
        }
      }
    });
  }, 500);
}).call(window);
