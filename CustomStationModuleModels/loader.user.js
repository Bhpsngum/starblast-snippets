// ==UserScript==
// @name         Custom Station Modules
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use custom station modules client-side
// @author       Bhpsngum
// @include      /^https\:\/\/starblast\.io\/(app.html(\?.+)*)*$/
// @icon         https://starblast.io/static/img/icon64.png
// @grant        none
// ==/UserScript==

(async function(){
  /* WARNING
  This is NOT a snippet script designed for Modding, therefore it won't work in Modding, you can skip this script and go exploring others :)

  Shortcut:
  * Ctrl + Shift + M (all OS) to open import prompt

  Required:
  * ES6 or higher
  * Support fetch() function
  */


  let coffee = document.createElement("script");
  coffee.src = "https://cdn.jsdelivr.net/gh/jashkenas/coffeescript@master/lib/coffeescript-browser-compiler-legacy/coffeescript.js";
  document.head.appendChild(coffee);
  this.SeedRandomizer = (function() {
    function SeedRandomizer(_seed, hash) {
      this._seed = _seed != null ? _seed : Math.random();
      if (hash == null) {
        hash = true;
      }
      if (this._seed === 0) {
        this._seed = Math.random();
      }
      if (this._seed < 1) {
        this._seed *= 1 << 30;
      }
      this.a = 13971;
      this.b = 12345;
      this.size = 1 << 30;
      this.mask = this.size - 1;
      this.norm = 1 / this.size;
      if (hash) {
        this.nextSeed();
        this.nextSeed();
        this.nextSeed();
      }
    }

    SeedRandomizer.prototype.next = function() {
      this._seed = (this._seed * this.a + this.b) & this.mask;
      return this._seed * this.norm;
    };

    SeedRandomizer.prototype.nextInt = function(num) {
      return Math.floor(this.next() * num);
    };

    SeedRandomizer.prototype.nextSeed = function() {
      return this._seed = (this._seed * this.a + this.b) & this.mask;
    };

    SeedRandomizer.prototype.seed = function(_seed) {
      this._seed = _seed != null ? _seed : Math.random();
      if (this._seed < 1) {
        this._seed *= 1 << 30;
      }
      this.nextSeed();
      this.nextSeed();
      return this.nextSeed();
    };

    SeedRandomizer.prototype.clone = function(seed) {
      if (seed != null) {
        return new SeedRandomizer(seed);
      } else {
        seed = this._seed;
        return new SeedRandomizer(seed, false);
      }
    };

    return SeedRandomizer;

  })();
  let oldAdd = this.StationModules.prototype.add, names = ["bodies", "wings", "tori"], parse = function(obj) {
    let data = Object.assign({}, obj), newValue = {};
    for (let key in data) {
      let newV = data[key];
      if ("object" == typeof newV) {
        delete newV.laser;
        delete newV.propeller;
        newValue[key] = newV
      }
    }
    return newValue
  }, generateT = function(modul, args) {
    let res = {};
    if ("function" == typeof modul.generate) Object.assign(res, modul.generate.apply(modul, args));
    let newRes = {};
    newRes.rotate = !!res.rotate;
    newRes.size = Math.max(res.size, 1) || 1;
    for (let name of names) newRes[name] = parse(res[name]);
    return newRes
  };
  this.StationModules.prototype.add = function (modul) {
    modul = Object.assign({}, modul);
    let type = modul.type, id = modul.id, revertDirection = !!modul.revertDirection, generate = function() {
      return generateT(modul, arguments)
    }, modl = this.modules.find(v => v && v.type === type && v.id === id);
    if (modl) Object.assign(modl, {
      generate: generate,
      revertDirection: revertDirection
    });
    else oldAdd.call(this, modl = {
      type: type,
      id: id,
      revertDirection: revertDirection,
      generate: generate
    });
    return modl
  }
  let STATION_MODULES = new this.StationModules, SM = this.StationModel, __proto__ =  SM.prototype, repl = function(func, ind, noEval, exc, flags){
    let res = "("+String(func).replace(new RegExp('(['+(exc?"^":"")+ind+']\\s*)((\\w+)\\.dir)', flags || ""), "$1(!!STATION_MODULES.types_by_id[$3.type].revertDirection*2+$2)")+")";
    return noEval ? res : eval(res)
  };
  SM = eval(repl(SM, "*", true).replace(/((\w+)\.dir\s*=\s*(\w+)\.dir)/, "$1,$2.revertDirection=STATION_MODULES.types_by_id[$3.type].revertDirection").replace(/\.generate\(([^\)]+?)\)/, ".generate($1, SeedRandomizer)"));
  __proto__.constructor = SM;
  SM.prototype = __proto__;
  this.StationModel = SM;
  let y = TeamBoard.prototype, key = Object.keys(y).find(v => y[v] && String(y[v]).includes("STATION_MODULES")), t = function(t, e) { return this.module.exports.translate(t, e) }.bind(this);
  y[key] = repl(y[key], '=');
  let stmodel = StationModuleModel;
  let carpet = stmodel.prototype.updateCarpet;
  stmodel.prototype.updateCarpet = eval("("+String(carpet).replace(/((\w+\.rotation\.)x.+)}$/, "$1,this.carpet.$2z=!!this.revertDirection*Math.PI}")+")");
  for (let i in stmodel) {
    let val = stmodel[i];
    if ("function" == typeof val && (val = val.toString()).includes(".generate(")) stmodel[i] = Function(stmodel.name, "return " + val.replace(/\.generate\(([^\)]+?)\)/, ".generate($1, SeedRandomizer)"))(stmodel)
  }
  this.CustomStationModules = {
    list: STATION_MODULES,
    import: async function (URL) {
      console.log("Importing...");
      try {
        let data = JSON.parse(await (await window.fetch(URL)).text());
        for (let i of data.data) this.set(i.generate,i.type, i.id, true);
        this.update();
        console.log("[CustomStationModulesLoader] Imported modules from preset '" + (data.name || "Unknown") + "' by " + (data.author || "Anonymous") + ".");
        return true
      }
      catch (e) {
        console.error("[CustomStationModulesLoader] Failed to import the module. Caught error:", e);
        this.reset();
        return false
      }
    },
    reset: async function () {
      return await this.import("https://raw.githubusercontent.com/Bhpsngum/starblast-snippets/master/CustomStationModuleModels/Neuronality_DefaultModules/manifest.json")
    },
    set: function (coffeescript, type, ID, ignoreUpdate) {
      let model = {
        id: ID,
        type: type,
        generate: Function("seed", "SeedRandomizer", "return " + CoffeeScript.compile(coffeescript))
      }
      if (this.list.types_by_id[ID] != null) this.list.types_by_id[ID].generate = model.generate;
      else this.list.add(model);
      if (!ignoreUpdate) this.update()
    },
    update: function () {
      let data = Object.values(this.module.exports.settings).find(v => v && v.mode), mode = data.mode;
      if (mode.id != 'team') return;
      let smodel = mode.teams[0].station_model, rev = Object.keys(smodel).find(k => smodel[k] && smodel[k].type == "Group"), add;
      for (let i in data) {
        if (data[i].seed) {
          for (let j in data[i]) {
            if (Array.isArray(data[i][j].stations)) {
              add = data[i][j];
              break;
            }
          }
          break;
        }
      }
      for (let team of mode.teams) team.station_model[rev].remove(...team.station_model.modules.map(i => i[rev]))
      add.stations = [];
      for (let team of mode.teams) {
        team.station_model = new StationModel(team.station_desc, team);
        add.addStation(team.station_model);
      }
      this.StationModuleModel.images_buffer = [];
    }.bind(this)
  }
  let wait = setInterval(function () {
    try { CoffeeScript } catch (e) { return }
    clearInterval(wait);
    CustomStationModules.reset();
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey) switch (e.keyCode) {
        case 77: /* M */ {
          let res = prompt("Paste manifest file (JSON) here to import (leave blank to reset):");
          if (res != null) (res == '' ? CustomStationModules.reset() : CustomStationModules.import(res)).then(success => {
            alert(success ? "Modules successfully loaded." : "Failed to import modules. Check DevTools console for more details.")
          })
          break
        }
      }
    });
  }, 500);
}).call(window);
