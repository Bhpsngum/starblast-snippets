var gem_ratio = false;
var fixed_gems = 500;
var arena_radius = 20;
var edge_dps = 100; // damage per second when standing in the edge of the safe zone
var dps_increase = 50; //dps increase per 10 blocks farther from the safe zone
var break_interval = 1; // in minutes
var duel_countdown = 10; // countdown before duel starts (in seconds)
var duel_duration = 3; // in minutes
var game_duration = 30; // in minutes

/* TODO:
- vocabularies
- more ships
- better ship selection ui without bugging the client
*/

var B_Speedster_609 = '{"name":"B-Speedster","level":6,"model":9,"size":1.6,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-95,0,0,60,85,75],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,20,22,15,0],"height":[0,5,30,30,20,15,0],"texture":[6,18,5,11,15,17],"propeller":true,"laser":{"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"recoil":70,"number":1,"error":0}},"core":{"vertical":true,"angle":180,"section_segments":[30,90,150,210,270,330],"offset":{"x":0,"y":-5,"z":-40},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-40,-43,-40,-30,0,0],"z":[0,0,0,0,0,0,0]},"width":[1,13,18,23,30,30,0],"height":[1,13,18,23,30,30,0],"texture":[16.9,4.9,63,3.9,9.9,0.9,11.9]},"ye":{"vertical":true,"section_segments":12,"offset":{"x":0,"y":38,"z":-40},"position":{"x":[0,0,0],"y":[-10,-3,-1],"z":[0,0,0]},"width":[0,5,0],"height":[0,5,0],"texture":[5]},"shield":{"section_segments":12,"offset":{"x":30,"y":-40,"z":0},"position":{"x":[-6,0,0,0,0,-4],"y":[-70,-60,-10,15,30,40],"z":[0,0,0,0,0,0]},"width":[0,3,3,3,3,0],"height":[0,5,5,8,3,0],"texture":63,"angle":16},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,17]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":0,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}}},"typespec":{"name":"B-Speedster","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"shape":[3.384,3.353,3.037,2.443,2.076,1.832,1.659,1.541,1.458,1.406,1.378,1.341,1.248,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.623,2.758,2.725,2.758,2.623,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.248,1.341,1.378,1.406,1.458,1.541,1.659,1.832,2.076,2.443,3.037,3.353],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"number":1,"spread":0,"error":0,"recoil":70},{"x":0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}';
var C_Speedster_610 = '{"name":"C-Speedster","level":6,"model":10,"size":1.45,"specs":{"shield":{"capacity":[120,200],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[40,60],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-85,-80,-50,0,0,70,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,21,28,20,20,0],"height":[0,7,16,25,20,15,0],"texture":[63,4,11,5,18,12],"propeller":true,"laser":{"damage":[25,65],"rate":3.5,"type":1,"speed":[160,200],"number":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-50,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,8,10,10,0],"height":[0,10,12,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"tops":{"section_segments":12,"offset":{"x":15,"y":45,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-40,-25,0,15,40,35],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,13,11,6,0],"height":[0,5,9,8,6,5,0],"propeller":1,"angle":0,"texture":[5,4,10,63,4,17]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"join1":{"offset":{"x":0,"y":20,"z":0},"length":[37],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":0,"y":50,"z":0},"length":[30],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}}},"typespec":{"name":"C-Speedster","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[120,200],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[40,60],"acceleration":[90,140]}},"shape":[2.465,2.394,2.079,1.728,1.538,1.437,1.361,1.319,1.297,1.221,1.152,1.104,1.079,1.081,1.54,1.715,1.82,1.971,1.989,2.318,2.785,3.213,3.447,3.354,2.509,2.034,2.509,3.354,3.447,3.213,2.785,2.318,1.989,1.971,1.82,1.715,1.54,1.081,1.079,1.104,1.152,1.221,1.297,1.319,1.361,1.437,1.538,1.728,2.079,2.394],"lasers":[{"x":0,"y":-2.465,"z":0,"angle":0,"damage":[25,65],"rate":3.5,"type":1,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.447}}';
var Contraband_611 = '{"name":"Contraband","level":6,"model":11,"size":1.6,"zoom":0.85,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-80,-20,0,15,20,60,65,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,24,26,20,20,20,20,25,12,0],"height":[0,5,25,25,20,15,15,15,20,10,0],"texture":[1,2,4,63,5,10,5,63,4,17],"propeller":true,"laser":{"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"recoil":250,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"cannons":{"section_segments":12,"offset":{"x":18,"y":65,"z":20},"position":{"x":[0,0,0,0,0],"y":[-50,-45,-20,-5,5],"z":[0,0,0,0,0]},"width":[0,5,7,8,0],"height":[0,5,7,8,0],"angle":0,"laser":{"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,63,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[37,0],"width":[20,70],"angle":[0],"position":[-95,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":25,"y":52,"z":0},"length":[35],"width":[10,10],"angle":[0],"position":[0,0,0,50],"texture":[8],"doubleside":1,"bump":{"position":0,"size":0}},"wing1":{"doubleside":true,"offset":{"x":50,"y":52,"z":-36},"length":[0,30,20,30],"width":[0,0,100,100,0],"angle":[110,70,90,110],"position":[0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}}},"typespec":{"name":"Contraband","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"shape":[2.72,2.573,2.079,1.758,1.578,1.455,1.368,1.312,1.283,1.278,1.269,1.222,1.193,1.961,2.033,2.148,2.313,2.561,2.818,3.145,3.625,3.791,3.803,3.701,3.223,3.206,3.223,3.701,3.803,3.791,3.625,3.145,2.818,2.561,2.313,2.148,2.033,1.961,1.193,1.222,1.269,1.278,1.283,1.312,1.368,1.455,1.578,1.758,2.079,2.573],"lasers":[{"x":0,"y":-2.56,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"number":1,"spread":0,"error":0,"recoil":250},{"x":0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.803}}';

var ships = [];
ships.push(B_Speedster_609);
ships.push(C_Speedster_610);
ships.push(Contraband_611);

var ship_codes = [605,...ships.map(i=>JSON.parse(i).typespec.code)];

var map_size = 200, rand = function(num) {
  return Math.floor(Math.random()*num)
}, soundtracks = ["argon","crystals"], vocabulary = [
  {text: "Duel", icon:"\u00be", key:"D"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "$#%!&", icon: "\u{1f92c}", key: "F"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Hello", icon:"\u0046", key:"H"},
  {text: "Change ship", icon:"\u0061", key:"I"},
  {text: "Leader", icon:"\u002e", key:"L"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Good", icon:"\u0051", key:"O"},
  {text: "How?!", icon:"\u004b", key:"Q"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "You", icon:"\u004e", key:"U"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "Follow", icon:"\u0050", key:"W"},
];

this.options = {
  map_name: "SDC - Starblast Dueling Championship",
  map_size: map_size,
  custom_map: "",
  starting_ship: 801,
  ships: ships,
  reset_tree: false,
  max_players: 16,
  radar_zoom: map_size/arena_radius/2,
  weapons_store: false,
  max_level: 1,
  asteroids_strength: 1e6,
  crystal_value: 0,
  vocabulary: vocabulary,
  soundtrack: soundtracks[rand(soundtracks.length)]+".mp3"
}
// game components

var setPicker = function(ship, isActive) {
  isActive = !!isActive
  ship.setUIComponent({
    id: "chooser",
    position: [2,35,10,15],
    visible: isActive,
    clickable: isActive,
    shortcut: "P",
    components: [
      { type: "box",position:[0,0,100,100],fill:fill,stroke:dfl_tcl,width:2},
      { type: "text",position:[10,35,80,30],value:"Change ship",color:dfl_tcl},
      { type: "text",position:[20,70,60,20],value:"[P]",color:dfl_tcl}
    ]
  });
  ship.setUIComponent({
    id: "ready",
    position: [13,35,10,15],
    visible: isActive,
    clickable: isActive,
    shortcut: "R",
    components: [
      { type: "box",position:[0,0,100,100],fill:"hsla("+(ship.custom.ready?120:0)+",100%,50%,1)",stroke:dfl_tcl,width:2},
      { type: "text",position:[10,35,80,30],value:(ship.custom.ready?"":"Not")+" Ready",color:dfl_tcl},
      { type: "text",position:[20,70,60,20],value:"[R]",color:dfl_tcl}
    ]
  });
}, dfl_tcl = "hsla(210, 50%, 87%, 1)", lcolor = "hsla(0, 0%, 100%, 1)", fill = "hsl(210, 20%, 33%, 1)", black = "hsla(0, 0%, 0%, 1)", toTick = min => min*3600, r = arena_radius * 10, d = 2000/3 - 2*r, pos = function(x) {
  return -1000 + (r + d/2)*(2*x + 1);
}, t = function(x) {
  let o = x+map_size*5, zoom = 10/map_size, rsize = zoom*r;
  return Math.max(o*zoom-rsize,0) || 0;
}, grids = Array(3).fill(0).map((f,i) => Array(3).fill(0).map((v,j) => [pos(i),pos(j)])).flat(), lobby = Math.trunc((grids.length-1)/2), leaderboard = [], getStat = function(ship, stateName) {
  return ((ship||{}).custom||{})[stateName]||0;
}, updatescoreboard = function (game) {
  leaderboard = game.ships.map(ship => ({
    id: ship.id,
    wins: getStat(ship, "wins"),
    loses: getStat(ship, "loses"),
    draws: getStat(ship, "draws")
  })).sort((a,b) => {
    let dwins = b.wins - a.wins;
    if (dwins !== 0) return dwins;
    let dloses = a.loses - b.loses;
    if (dloses !== 0) return dloses;
    let ddraws = b.draws - a.draws;
    if (ddraws !== 0) return ddraws;
    return a.id - b.id;
  });
  var t = ["Wins","Loses","Draws"], c = [120, 0, 60], tcl = [black, dfl_tcl, black], scoreboard = {
    id: "scoreboard",
    visible: true,
    position: [0,0,100,100],
    components: [
      {type: "box", position:[0,0,100,100/11], fill: "hsla(210, 20%, 33%, 1)"},
      {type: "text", position: [0,0,100,100/11], color: lcolor, value: "Players", align: "left"},
      ...t.map((field,i) => [
        {type: "box", position:[70+10*i,0,10,100/11], fill: "hsla("+c[i]+", 100%, 50%, 1)"},
        {type: "text", position: [70+10*i,0,10,100/11], color: tcl[i], value: field[0]}
      ]).flat(),
      ...leaderboard.slice(0,10).map((info,i) => [
        {type: "player", position: [0,(i+1)*100/11,100,100/11], id: info.id, color: lcolor, align: "left"},
        ...t.map((stat,j) => [
          {type: "text", position: [70+10*j,(i+1)*100/11,10,100/11], color: lcolor, value: getStat(game.findShip(info.id), stat.toLowerCase()), align: "right"}
        ]).flat()
      ]).flat(),
    ]
  }
  for (let ship of game.ships) {
    let csc = JSON.parse(JSON.stringify(scoreboard)), index = leaderboard.slice(0,10).map(i => i.id).indexOf(ship.id);
    if (index == -1) {
      index = 9;
      csc.components.splice(csc.components.length-4,4,
        {type: "player", position: [0,1000/11,100,100/11], id: ship.id, color: lcolor, align: "left"},
        ...t.map((stat,j) => [
          {type: "text", position: [70+10*j,1000/11,10,100/11], color: dfl_tcl, value: getStat(ship, stat.toLowerCase()), align: "right"}
        ]).flat()
      );
    }
    csc.components.unshift({type:"box",position:[0,(index+1)*100/11,100,100/11],fill:"hsla(210, 24%, 29%, 0.5)"});
    ship.setUIComponent(csc);
  }
}, dist = function(x1,y1,x2,y2) {
  return Math.sqrt((x1-x2)**2+(y1-y2)**2);
}, max = function(ship, type) {
  let crystals = (gem_ratio === false)?fixed_gems:20*(Math.trunc(type/100)**2)*gem_ratio;
  ship.set({type:type,crystals: crystals,stats:88888888,shield: 1e4});
}, rekt = function (ship,num){
  if (ship.shield<num){
    let val=ship.crystals + ship.shield;
    if (val < num) ship.set({kill:true});
    else ship.set({crystals:val-num,shield:0});
  }
  else ship.set({shield:ship.shield-num});
}, safeZoneMarker = {
  id: "safeZoneMarker",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/bhpsngum/img-src/master/arena.png",
  emissiveColor: 0xFFFFFF,
  shininess: 0,
  transparent: true
}, setNode = function(ship, node) {
  let nodpos = grids[node];
  if (!nodpos) {
    nodpos = grids[lobby];
    node = lobby;
  }
  if (ship != null) {
    ship.custom.currentNode = node;
    ship.custom.pendingTp = true;
    ship.set({x:nodpos[0],y:nodpos[1]});
  }
}, announce = function(ship, ...data) {
  ship.setUIComponent({
    id: "message",
    position: [25,15,50,50],
    visible: true,
    components: data.map((j,i) => {
      let text, color;
      if (Array.isArray(j)) {
        text = j[0];
        color = "hsla("+j[1]+",100%,50%,1)";
      }
      else {
        text = j;
        color = dfl_tcl
      }
      return {type:"text",position:[0,10*i,100,10],value:text,color:color}
    })
  });
}, FormatTime = function(time, forced) {
  var array = [Math.floor(time/3600), Math.floor((time%3600)/60)]
  if (forced && array[0] == 0) array.splice(0,1);
  return array.map(i => i<10&&!forced?"0"+i.toString():i).join(":");
}, check = function(game, forced) {
  for (let ship of game.ships) {
    if (!ship.custom.joined) {
      let rsize = 10/map_size*r;
      ship.setUIComponent({
        id: "radar_background",
        components: grids.map(x => ({type:"round",position:[t(x[0]),t(x[1]),rsize*2,rsize*2],width:1,stroke: "hsla(240,100%,50%,1)", fill: "hsla(0, 0%, 0%, 0)"}))
      });
      ship.setUIComponent({
        id: "block",
        visible: true,
        clickable: false,
        position: [4,3,12,6],
        components:[
          {type:'box',position:[0,0,100,100],fill:dfl_tcl},
          {type: "text", position: [0,0,100,100], value: "We don't use points here.", color: black}
        ]
      })
      ship.custom.joined = true;
    }
  }
  if (game.step % 30 === 0 || forced) {
    for (let ship of game.ships) {
      let t = ship.custom.currentNode;
      if (grids.map((v,i) => i).indexOf(t) == -1 || !round_started) t = lobby;
      let distance = dist(ship.x, ship.y, ...grids[t]) - r, text = "Warning: Out of the safe zones!";
      if (distance > 0 && !ship.custom.pendingTp) {
        if (t === lobby) setNode(ship, lobby);
        else {
          setPicker(ship, false);
          ship.custom.warn = text;
          game.step % 60 === 0 && rekt(ship, edge_dps + dps_increase*(distance/10));
        }
      }
      else {
        if (ship.custom.warn == text) ship.custom.warn = "";
        if (t === lobby) {
          setPicker(ship, true);
          max(ship);
          ship.set({invulnerable: 120});
        }
        else setPicker(ship, false);
      }
      warn(ship);
      ship.custom.currentNode = t;
      waitnextround(ship);
      if (ship.custom.pendingTp) ship.custom.pendingTp = false;
    }
    updatescoreboard(game);
  }
}, waitnextround = function (ship, forced) {
  if (round_started && ship.custom.currentNode === lobby || forced) {
    let w = "";
    if (ship.custom.wait) w = "No opponents found!";
    else {
      w = "You ";
      for (let i of ["Win","Lose","Draw"]) {
        if (ship.custom["just"+i]) {
          w+=i.toLowerCase();
          break;
        }
      }
      if (w == "You ") w = "";
      else w+=" in the latest round!";
    }
    if (w) ship.custom.warn = w;
    announce(ship, "Waiting for the next round","",[("You are "+(ship.custom.ready?"":"not ")+"ready").toUpperCase(), ship.custom.ready?120:10]);
  }
}, warn = function (ship) {
  if (ship.custom.warn) ship.setUIComponent({
    id: "warn",
    position: [25,5,50,30],
    visible: true,
    clickable: false,
    components: [
      {type: "text", position: [0,0,100,20], value: ship.custom.warn, color: "hsla(60,100%,50%,1)"},
    ]
  });
  else ship.setUIComponent({id:"warn", visible: false});
}, clearInds = function(ship) {
  setStates(ship, false, false, false);
  ship.custom.wait = false;
  ship.custom.ready = false;
}, setStats = function(ship, ...stats) {
  ship.setUIComponent({
    id: "stat",
    position: [3,28,17,15],
    visible: true,
    components: stats.flat().map((j,i) => ({type: "text",position:[0,33*i,80,33],value:j,color:dfl_tcl}))
  });
}, setStates = function (ship, ...states) {
  let r = ["Win","Lose","Draw"];
  for (let i = 0; i < states.length; i++) ship.custom["just"+r[i]] = states[i];
}, break_time = toTick(break_interval), game_time = toTick(duel_duration), dc_time = toTick(duel_countdown/60), started, round_started = false, round_break = false;

// game Modules
var initialization = function(game) {
  grids.forEach((grid,j) => {
    game.setObject({
      id: "safeZoneMarker"+j,
      type: safeZoneMarker,
      position: {x:grid[0],y:grid[1],z:0},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:10*arena_radius,y:10*arena_radius,z:10*arena_radius}
    });
  });
  var lost_sector_aries = {
    id: "lost_sector_aries",
    obj: "https://starblast.io/lost_sector/LostSector_Aries_HardEdges.obj",
    diffuse: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Diffuse.jpg",
    bump: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Height.jpg",
    specular: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Specular.jpg",
    shininess: 10,
    emissiveColor: 0,
    specularColor: 0xFFFFFF,
    transparent: false
  }
  game.setObject({
    id: "lost_sector_aries",
    type: lost_sector_aries,
    position: {x:0, y:0, z:-60},
    scale: {x:3, y:3, z:3},
    rotation: {x:0, y:0, z:Math.PI}
  });
  this.tick = waiting;
}, waiting = function(game) {
  check(game);
  let max_time = toTick(game_duration + duel_duration/2);
  if (!started && game.step <= max_time || game.step - started <= max_time) {
    if (game.ships.length >= 2) {
      break_time = toTick(break_interval);
      round_break = true;
      this.tick = game_break;
    }
    else game.step % 30 === 0 && announce(game,"Waiting for more players ("+(2-game.ships.length)+" needed)")
  }
  else {
    game.setOpen(false);
    check(game, true);
    updatescoreboard(game);
    let rank = 1, best = leaderboard[0];
    leaderboard.forEach((i,j) => {
      let ship = game.findShip(i.id);
      if (ship != null) {
        let text = "You";
        if (best.wins != i.wins || best.loses != i.loses || best.draws != i.draws) {
          best = rank[j];
          rank++
        }
        ship.custom.rank = rank;
        if (rank == 1) text += " win";
        else {
          text += "'re ranked "+rank;
          switch(rank%10) {
            case 1: if (Math.trunc(rank/10) != 1) {text+="st";break;}
            case 2: if (Math.trunc(rank/10) != 1) {text+="nd";break;}
            case 3: if (Math.trunc(rank/10) != 1) {text+="rd";break;}
            default: text+="th";break;
          }
        }
        text+="!";
        announce(ship, "Game finished!","",text);
      }
    });
    setTimeout(function(){
      game.ships.forEach(ship => ship.gameover({
        "Rank": ship.custom.rank||"Unranked",
        "Wins": getStat(ship, "wins"),
        "Loses": getStat(ship, "loses"),
        "Draws": getStat(ship, "draws")
      }))

    },5000);
    this.tick = null;
  }
}, game_break = function (game) {
  check(game);
  if (!started) started = game.step;
  if ((game.step - started > toTick(game_duration + duel_duration/2) && !round_break) || game.ships.length < 2) this.tick = waiting;
  else if (game.step % 30 === 0) {
    if (break_time >= 0) {
      if (game.step % 60 === 0) for (let ship of game.ships) announce(ship,"New round starts in: "+FormatTime(break_time),"",[("You are "+(ship.custom.ready?"":"not ")+"ready").toUpperCase(), ship.custom.ready?120:10]);
      break_time-=30;
    }
    else {
      let ready = game.ships.filter(ship => ship.custom.ready && ship.alive), players = Math.trunc(Math.min(8,ready.length/2))*2, rlist = ready.map(ship => ship.id), lob = grids.map((v,i) => i).filter(i => i!= lobby);
      for (let i = 0 ; i < players; i++) {
        let index = rand(rlist.length), ship = game.findShip(rlist[index]);
        setNode(ship, lob[Math.trunc(i/2)]);
        ship.custom.wait = false;
        ship.custom.warn = "";
        rlist.splice(index, 1);
      }
      if (ready.length < 2) {
        game.ships.forEach(ship => ship.custom.warn = "Not enough players ready!");
        this.tick = waiting;
        return;
      }
      else rlist.forEach(i => ((game.findShip(i)||{}).custom.wait = true));
      dc_time = toTick(duel_countdown/60);
      round_started = true;
      round_break = false;
      this.tick = countdown;
    }
  }
}, countdown = function (game) {
  check(game);
  if (game.step % 30 === 0) {
    if (dc_time >= 0) {
      if (game.step%60 === 0) {
        for (let ship of game.ships) {
          if (!ship.custom.wait) announce(ship, "Ready?","", FormatTime(dc_time,true));
        }
      }
      game.ships.forEach(ship => ship.set({generator: 1e5, invulnerable: 60}));
      dc_time-=30;
    }
    else {
      announce(game, "");
      game_time = toTick(duel_duration);
      this.tick = main_game
    }
  }
}, main_game = function (game) {
  check(game);
  if (game.step % 30 === 0) {
    if (game_time >= 0) {
      game.step % 60 === 0 && setStats(game,"Time left: "+FormatTime(game_time));
      game_time-=30;
    }
    if (game_time < 0 || game.ships.filter(ship => ship.custom.currentNode == 4).length == game.ships.length) {
      round_started = false;
      setStats(game,"");
      this.tick = endgame;
    }
  }
}, endgame = function (game) {
  check(game);
  break_time = toTick(break_interval);
  let st = game.ships.filter(ship => ship.custom.currentNode !== lobby && ship.custom.ready), idx = st.map(i => i.custom.currentNode), i = 0;
  while (idx.length > i) {
    let f = idx[i], l = idx.lastIndexOf(f);
    if (i != l && l != -1) {
      setStates(st[i], false, false, true);
      st[i].custom.draws = (st[i].custom.draws||0) + 1;
      setStates(st[l], false, false, true);
      st[l].custom.draws = (st[l].custom.draws||0) + 1;
      waitnextround(st[i], true);
      waitnextround(st[l], true);
      idx.splice(l,1);
      idx.splice(i,1);
      st.splice(l,1);
      st.splice(i,1);
    }
    else i++;
  }
  this.tick = waiting;
  game.ships.forEach(clearInds);
}
this.tick = initialization;
this.event = function(event, game) {
  let ship = event.ship, killer = event.killer;
  if (ship != null) switch (event.name) {
    case "ui_component_clicked":
      let id = event.id;
      switch (id) {
        case "chooser":
          if (ship.custom.currentNode === lobby) {
            if (!ship.custom.ready) {
              max(ship, ship_codes[ship_codes.indexOf(ship.type)+1]||ship_codes[0]);
              ship.set({generator: 0});
            }
            else {
              let t = "You can't change ships when you're ready!";
              ship.custom.warn = t;
              setTimeout(function(){
                if (ship.custom.warn == t) ship.custom.warn = "";
              },3000);
            }
          }
          break;
        case "ready":
          ship.custom.ready = !ship.custom.ready;
          break;
      }
      break;
    case "ship_destroyed":
      if (round_started && ship.custom.currentNode !== lobby && ship.custom.ready) {
        ship.custom.loses = (ship.custom.loses||0) + 1;
        setStates(ship, false, true, false);
        if (!killer) killer = game.ships.filter(i => i.id !== ship.id && i.custom.currentNode === ship.custom.currentNode && i.custom.currentNode !== lobby)[0];
        if (killer) {
          killer.custom.wins = (killer.custom.wins||0) + 1;
          setNode(killer, lobby);
          setStates(killer, true, false, false);
          killer.custom.ready = false;
        }
      }
      ship.custom.ready = false;
      setNode(ship, lobby);
      break;
    case "ship_spawned":
      setNode(ship, lobby);
      max(ship, ship_codes[ship_codes.indexOf(ship.type)]||ship_codes[0]);
      break;
    default:
      break;
  }
}
