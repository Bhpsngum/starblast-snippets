this.options = {
  // see documentation for options reference
  map_name: "Ship Tree Test",
  root_mode: "",
  custom_map: "",
  starting_ship: 801,
  map_size: 200
};
var allow_t8s = false;
var allow_admin_ships = false;
var admin_ships = [];
var setPicker = function(ship, isActive) {
  isActive = !!isActive;
  ship.custom.isActive = isActive;
  ship.setUIComponent({
    id: "chooser",
    position: [5,30,10,10],
    visible: true,
    clickable: true,
    shortcut: "P",
    components: [
      { type: "box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
      { type: "text",position:[10,35,80,30],value:isActive?"Cancel":"Pick a ship",color:"#CDE"},
      { type: "text",position:[20,70,60,20],value:"[P]",color:"#CDE"}
    ]
  });
  ship.setUIComponent({
    id: "f-stats",
    position: [5,45,10,10],
    visible: true,
    clickable: true,
    shortcut: "F",
    components: [
      { type: "box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
      { type: "text",position:[10,35,80,30],value:"Full stats",color:"#CDE"},
      { type: "text",position:[20,70,60,20],value:"[F]",color:"#CDE"}
    ]
  });
  ship.setUIComponent({
    id: "e-stats",
    position: [5,60,10,10],
    visible: true,
    clickable: true,
    shortcut: "E",
    components: [
      { type: "box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
      { type: "text",position:[10,35,80,30],value:"Empty Stats",color:"#CDE"},
      { type: "text",position:[20,70,60,20],value:"[E]",color:"#CDE"}
    ]
  });
  ship.setUIComponent({
    id: "fillgems",
    position: [5,75,10,10],
    visible: true,
    clickable: true,
    shortcut: "G",
    components: [
      { type: "box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
      { type: "text",position:[10,35,80,30],value:"Fill gems",color:"#CDE"},
      { type: "text",position:[20,70,60,20],value:"[G]",color:"#CDE"}
    ]
  });
  if (isActive) {
    ship.setUIComponent({
      id: "revert",
      position: [20,30,10,10],
      visible: true,
      clickable: true,
      shortcut: "L",
      components: [
        { type: "box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
        { type: "text",position:[10,35,80,30],value:"Backspace",color:"#CDE"},
        { type: "text",position:[20,70,60,20],value:"[L]",color:"#CDE"}
      ]
    });
    for (let i=0;i<10;i++) ship.setUIComponent({
      id: "k"+i.toString(),
      position: [0,0,0,0],
      visible: false,
      clickable: isActive,
      shortcut: i.toString()
    })
  }
  else {
    ship.setUIComponent({id:"revert",visible:false,position:[0,0,0,0],clickable: false,shortcut:""});
    for (let i=0;i<10;i++) ship.setUIComponent({id:"k"+i.toString(),visible:false,position:[0,0,0,0]});
    ship.setUIComponent({id:"chooser-notif",visible: false,position:[0,0,0,0]})
  }
  setRequest(ship, null);
}
var setRequest = function (ship, add) {
  ship.custom.request = ship.custom.request||"";
  if (!ship.custom.isActive) ship.custom.request = "";
  else {
    let request = ship.custom.request;
    if (add != null) {
      if (add === -1) request = request.slice(0,request.length-1);
      else request += add;
    }
    ship.setUIComponent({
      id: "chooser-notif",
      position: [25,10,50,30],
      visible: true,
      clickable: false,
      components: [
        {type: "text", position: [0,0,100,20], value: "Enter ship code to pick:", color: "#cde"},
        {type: "text", position: [0,20,100,20], value: "Ship code = ship level x 100 + ship model", color: "#cde"},
        {type: "text", position: [0,40,100,20], value: "e.g: code 101 => level 1 & model 1", color: "#cde"},
        {type: "text", position: [0,60,100,40], value: request||"", color: "#cde"}
      ]
    });
    if (request.length >= 3) {
      request = parseInt(request);
      if ((allow_t8s || request < 800) && (allow_admin_ships || admin_ships.indexOf(request) == -1)) ship.set({type: request});
      request = "";
      setPicker(ship, false);
    }
    ship.custom.request = request;
  }
}

var ships_name;

this.tick = function (game) {
  ships_name = new Map(game.options.reset_tree?[]:[
    [101, "Fly"],
    [201, "Delta-Fighter"],
    [202, "Trident"],
    [301, "Pulse-Fighter"],
    [302, "Side-Fighter"],
    [303, "Shadow X-1"],
    [304, "Y-Defender"],
    [401, "Vanguard"],
    [402, "Mercury"],
    [403, "X-Warrior"],
    [404, "Side-Interceptor"],
    [405, "Pioneer"],
    [406, "Crusader"],
    [501, "U-Sniper"],
    [502, "FuryStar"],
    [503, "T-Warrior"],
    [504, "Aetos"],
    [505, "Shadow X-2"],
    [506, "Howler"],
    [507, "Bat-Defender"],
    [601, "Advanced-Fighter"],
    [602, "Scorpion"],
    [603, "Marauder"],
    [604, "Condor"],
    [605, "A-Speedster"],
    [606, "Rock-Tower"],
    [607, "Barracuda"],
    [608, "O-Defender"],
    [701, "Odyssey"],
    [702, "Shadow X-3"],
    [703, "Bastion"],
    [704, "Aries"]
  ]);
  (game.options.ships||[]).forEach(s => {
    let ship = JSON.parse(s);
    return ships_name.set(ship.typespec.code, ship.name)
  });
  this.tick = tick;
  this.tick(game);
}

var tick = function (game) {
  if (game.step % 30 === 0) {
    for (let ship of game.ships) {
      if (ship != null) {
        if (!ship.custom.init) {
          ship.custom.init = true;
          setPicker(ship,false);
        }
        ship.setUIComponent({
          id: "next_ships",
          position: [30,10,40,20],
          components: [
            {type: "text", position: [0,0,100,25], value: "Current ship:", color: "#CDE"},
            {type: "text", position: [0,25,100,25], value: ships_name.get(ship.type) + " (Code: " + ship.type + ")", color: "#CDE"},
            {type: "text", position: [0,50,100,25], value: "Next ships:", color: "#CDE"},
            {type: "text", position: [0,75,100,25], value: game.getNextShipCodes(ship.type).map(i => ships_name.get(i) + " (Code: " + i + ")").join(" - ") || "None", color: "#CDE"}
          ]
        })
      }
    }
  }
}

this.event = function(event, game) {
  let ship = event.ship;
  if (ship != null) switch (event.name) {
    case "ui_component_clicked":
      let id = event.id;
      switch (id) {
        case "chooser":
          setPicker(ship,!ship.custom.isActive);
          break;
        case "revert":
          setRequest(ship, -1);
          break;
        case "f-stats":
          ship.set({stats:88888888,shield: 1e4, generator: 1e5});
          break;
        case "e-stats":
          ship.set({stats:0});
          break;
        case "fillgems":
          ship.set({crystals: 20*(Math.trunc(ship.type/100)**2)});
          break;
        default:
          if (id.match(/^k\d$/) != null) setRequest(ship,id[1]);
      }
      break;
  }
}

/* getNextShipCodes.js - https://github.com/Bhpsngum/starblast/blob/master/getNextShipCodes.js */
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
    let default_specs = [
      [101, "Fly"],
      [201, "Delta-Fighter"],
      [202, "Trident"],
      [301, "Pulse-Fighter"],
      [302, "Side-Fighter", [403, 404]],
      [303, "Shadow X-1"],
      [304, "Y-Defender"],
      [401, "Vanguard"],
      [402, "Mercury"],
      [403, "X-Warrior"],
      [404, "Side-Interceptor"],
      [405, "Pioneer"],
      [406, "Crusader"],
      [501, "U-Sniper"],
      [502, "FuryStar"],
      [503, "T-Warrior"],
      [504, "Aetos"],
      [505, "Shadow X-2"],
      [506, "Howler"],
      [507, "Bat-Defender"],
      [601, "Advanced-Fighter"],
      [602, "Scorpion"],
      [603, "Marauder"],
      [604, "Condor"],
      [605, "A-Speedster"],
      [606, "Rock-Tower"],
      [607, "Barracuda"],
      [608, "O-Defender"],
      [701, "Odyssey"],
      [702, "Shadow X-3"],
      [703, "Bastion"],
      [704, "Aries"]
    ];

    let default_options = {
      ships: game.options.reset_tree?[]:Array(8).fill(0).map((i,j) => default_specs.filter(s => Math.trunc(s[0] / 100) === j).map(i => i[0])),
      nexts: new Map(game.options.reset_tree?[]:default_specs.filter(s => s[2]).map(i => [i[0], i[2]])),
      names: new Map(game.options.reset_tree?[]:default_specs.map(i => [i[0], i[1]])),
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

  var tick = this.tick;

  this.tick = function() {
    try { !internals && __init__.apply(this, arguments) } catch(e){}
    this.tick = tick;
    return typeof tick == "function" && tick.apply(this, arguments)
  }
}).call(this);
