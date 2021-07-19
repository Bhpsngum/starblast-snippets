/*

GET NEXT SHIP TYPES FROM CURRENT SHIP CODE

Syntax:  game.getNextShipCodes(type)
Returns: An array:
+ Empty if:
  - The code does not match any ships in the game
  - There are no proper ships in the next level
  - parameter `next` in ship code is an empty array (`[]`)
  - max level reached (`this.options.max_level`)
  - The mod hasn't started yet (before the line "Mod started" appears in the terminal)

DO NOT TOUCH THIS PROPERTY SO THAT THE CODE WILL WORK PROPERLY:
+ game.custom.ships

Enjoy! :)

*/

/* Encapsuled version - paste the rest of this code to the end of your mod code */
;(function(){
  let internals = game.custom.ships;
  let uAr = function(array, noSort) {
    let res = Array.from(new Set(array));
    if (noSort) return res;
    return res.sort(function(a,b){return a - b})
  }
  let getModel = function(code) {
    code = getNum(code);
    let t = internals.models.get(code);
    if (code != null) return t;
    return code%100
  }
  let getNum = function(num) {
    let n = Number(num);
    return isNaN(n)?num:n
  }

  let __init__ = function(game) {
    let default_ships = (game.options.reset_tree)?[]:[
      ,
      [101],
      [201, 202],
      [301, 302, 303, 304],
      [401, 402, 403, 404, 405, 406],
      [501, 502, 503, 504, 505, 506, 507],
      [601, 602, 603, 604, 605, 606, 607, 608],
      [701, 702, 703, 704]
    ]
    let default_nexts = new Map(game.options.reset_tree?[]:[[302, [403, 404]]]);

    let default_options = {
      ships: default_ships,
      nexts: default_nexts,
      models: new Map()
    }
    game.custom.ships = default_options;
    internals = game.custom.ships;
    if (Array.isArray(game.options.ships))
      for (let ship of game.options.ships)
      {
        try{
          let prs= JSON.parse(ship);
          let code = getNum(prs.typespec.code);
          let next = getNum(prs.typespec.next);
          let level = getNum(prs.typespec.level);
          if (!Array.isArray(internals.ships[level])) internals.ships[level] = [];
          internals.ships[level].push(code);
          if (prs.typespec.model !== code%100) internals.models.set(code, prs.typespec.model);
          let cnxt = uAr(Array.isArray(next)?next:[]);
          if (cnxt.length > 0) internals.nexts.set(code, cnxt);
        }
        catch(e){
          game.custom.ships = default_options;
          internals = game.custom.ships;
          break
        }
      }
    for (let i in internals.ships) {
      internals.ships[i] = uAr(internals.ships[i]).sort((a,b) => getModel(a) - getModel(b))
    }
  }

  game.getNextShipCodes = function (code) {
    if (!internals) return [];
    code = getNum(code);
    for (let level in internals.ships) {
      let current_ships = internals.ships[level];
      if (current_ships.indexOf(code) != -1) {
        if (isNaN(level) || Number(level) >= game.options.max_level) return [];
        let custom_next = internals.nexts.get(code);
        if (Array.isArray(custom_next)) {
          let cnext = [], ships = Object.values(internals.ships).flat();
          for (let type of custom_next) {
            if (ships.indexOf(type) != -1) cnext.push(type);
          }
          return uAr(cnext)
        }
        else {
          let nextLevel = Number(level) + 1;
          let next_ships = internals.ships[nextLevel];
          if (!next_ships) return [];
          let model = code - level * 100 - 1;
          let alpha = Math.max(0, Math.round(model / Math.max(current_ships.length - 1, 1) * (next_ships.length - 2)));
          return next_ships.slice(alpha, alpha + 2)
        }
      }
    }
    return []
  }

  var game_clone = {tick: this.tick, options: this.options, event: this.event};
  var originals = ["event", "options"];
  var checkClone = function() {
    for (let i of originals) {
      if (game_clone[i] !== this[i]) this[i] = game_clone[i];
    }
  }

  this.tick = function() {
    try { !internals && __init__.apply(this, arguments) } catch(e){}
    let u = typeof game_clone.tick == "function" && game_clone.tick.apply(game_clone, arguments);
    try { checkClone.call(this) } catch(e) {}
    return u
  }
}).call(this);
