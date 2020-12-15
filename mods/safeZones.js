const waiting_time = 15*60;
const players = 10;
const map_size = 20;
const round_time_max = 30*60;
const round_time_min = 10*60;

const PermaSafe = true; // ships can't be knocked out when standing in blue zones

var Spectator_101 = '{"name":"Spectator","level":1,"model":1,"size":1,"zoom":0.2,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[100,100],"acceleration":[100,100]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[100,100],"acceleration":[100,100]}},"shape":[0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02],"lasers":[],"radius":0.02}}';
var Player_201 = '{"name":"Player","level":2,"model":1,"size":4,"zoom":1,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":300,"speed":[200,200],"rotation":[100,100],"acceleration":[100,100]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,100,0],"height":[0,100,100,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Player","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":300,"speed":[200,200],"rotation":[100,100],"acceleration":[100,100]}},"shape":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"lasers":[],"radius":8}}';
var Safe_Player_202 = '{"name":"Safe Player","level":2,"model":2,"size":4,"zoom":1,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":30000,"speed":[200,200],"rotation":[100,100],"acceleration":[100,100]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,100,0],"height":[0,100,100,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Safe Player","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":30000,"speed":[200,200],"rotation":[100,100],"acceleration":[100,100]}},"shape":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"lasers":[],"radius":8}}';

var ships = [Spectator_101, Player_201];
PermaSafe && ships.push(Safe_Player_202);

var vocabulary = [
  {icon: "I", text: "Attack",key:"A"},
  {icon: "4", text: "Base",key:"B"},
  {icon: "%", text: "Defend",key:"D"},
  {icon: "O", text: "Me",key:"E"},
  {icon: "P", text: "Follow",key:"F"},
  {icon: "GG", text: "Good Game",key:"G"},
  {icon: "[", text: "Kill",key:"K"},
  {icon: "D", text: "Mine",key:"M"},
  {icon: "M", text: "No",key:"N"},
  {icon: "N", text: "You",key:"O"},
  {icon: "G", text: "No Prob",key:"P"},
  {icon: "K", text: "Hmm",key:"Q"},
  {icon: "¡", text: "Sorry",key:"S"},
  {icon: "H", text: "Wait",key:"T"},
  {icon: "A", text: "Thanks",key:"X"},
  {icon: "L", text: "Yes",key:"Y"},
  {text: "Love", icon:"\u0024", key:"L"},
  {text: "Bruh", icon:"˙ ͜ʟ˙", key:"M"},
  {text: "WTF", icon:"ಠ_ಠ", key:"W"}
];

this.options = {
  ships: ships,
  reset_tree: true,
  max_level: 1,
  map_size: map_size,
  custom_map: "",
  max_players: players,
  vocabulary: vocabulary,
  radar_zoom: 1,
  friendly_colors: 1
}
var wait = waiting_time;
var dim = map_size/2;
var grids = [];
var dfl_tcl = "hsla(210, 50%, 87%, 1)";
var total_players = 0;
var range = 10;
var announce = function(...data) {
  game.setUIComponent({
    id: "message",
    position: [25,20,50,50],
    visible: true,
    components: data.map((j,i) => ({type:"text",position:[0,10*i,100,10],value:j,color:dfl_tcl}))
  });
}
var rand = function(num) {
  return Math.floor(Math.random() * num);
}
var count = function() {
  total_players = 0;
  game.ships.forEach(ship => ship.custom.in_game && (total_players++));
}
var started = !1;
var genGrids = function() {
  var list = new Set();
  while (list.size < total_players - 1) list.add([rand(dim),rand(dim)].join("-"));
  return [...list].map(i => getPosition(...i.split("-").map(i => Number(i))));
}
var getPosition = function(...pos) {
  return pos.map((x,i) => (i?-1:1)*(x*2+1-map_size/2)*10);
}
var checkSafe = function (ship, range) {
  return Math.sqrt((ship.x-range[0])**2 + (ship.y-range[1])**2) <= 10;
}
var main_game = function (game) {
  if (game.step % 30 === 0) {
    if (started) {
      started = !1;
      Rounds.start();
    }
    else {
      count();
      for (let ship of game.ships) {
        if (!ship.custom.init) {
          ship.custom.init = !0;
          if (!ship.custom.in_game) {
            if (ship.custom.death) setStats(ship, "You are dead.");
            else setStats(ship, "You are now spectating.");
            ship.set({type:101});
          }
          else setStats(ship, "You are alive.");
        }
      }
      if (Rounds.logTimers) {
        if (Rounds.time >= 0) {
          game.ships.forEach(ship => {
            let t = 201 + Number(checkSafeZones(ship) && PermaSafe);
            if (ship.type != 101 && (ship.type != t || ship.custom.type != t)) {
              ship.custom.type = t;
              ship.set({type: t});
            }
          });
          if (Rounds.time % 60 === 0) {
            Rounds.setSafeZones();
            announce("Number of safe zones left: "+grids.length, "Enter the blue zone before it's too late!", "Time left: " + FormatTime([Math.floor(Rounds.time/3600),Math.floor((Rounds.time%3600)/60)]));
          }
          Rounds.time-= 30;
        }
        else Rounds.end();
      }
      if (total_players < 2) Rounds.end(!0);
    }
  }
}
var checkSafeZones = ship => grids.map(x => checkSafe(ship, x)).indexOf(!0) != -1;
var GameOver = function (ship, Winner) {
  let stats = {};
  if (Winner.length < 1) stats["Game results"] = "It's a draw!";
  else stats["Winner"] = Winner[0].name;
  if (ship.rankings) stats["Your rank"] = ship.rankings;
  ship.gameover(stats);
}
var FormatTime = function(array) {
  return array.map(i => i<10?"0"+i.toString():i).join(":");
}
var transform = {
  zoom: () => 10/map_size,
  X: x => x+map_size*5,
  Y: y => -y+map_size*5
};
let t = num => Math.max(num,0) || 0;
var Rounds = {
  time: 0,
  count: 0,
  logTimers: false,
  end: function(skip) {
    this.logTimers = false;
    if (!game.custom.ended) {
      for (let ship of game.ships) {
        if ((PermaSafe?(ship.custom.type == 201):!checkSafeZones(ship)) && !skip) {
          ship.custom.in_game = !1;
          ship.custom.death = !0;
          ship.rankings = total_players;
          ship.set({score:total_players});
        }
        ship.custom.init = !1;
      }
      count();
      game.ships.forEach(ship => {
        if (ship.custom.in_game) {
          ship.rankings = total_players;
          ship.set({score:total_players});
        }
      });
      updateScoreboard(game);
      if (total_players <= 1) {
        game.custom.ended = true;
        let Winner = game.ships.filter(ship => ship.custom.in_game);
        if (Winner.length < 1) announce("Game finished! It's a draw!");
        else announce("Game finished! "+Winner[0].name+" wins the game!");
        setTimeout(function(){game.ships.forEach(ship => GameOver(ship, Winner))}, 5000);
      }
      else {
        announce("Round finished!");
        setTimeout(Rounds.start.bind(Rounds), 3000);
      }
    }
  },
  getTimer: () => (round_time_max-round_time_min)/(players-2)*(total_players-2) + round_time_min,
  start: function() {
    this.count++
    grids.forEach(grid => game.removeObject("safeZoneMarker"+grid.join("&")));
    game.setUIComponent({id:"radar_background",components: []});
    announce("Round "+this.count+"!");
    game.ships.forEach(ship => (ship.custom.init = !1));
    count();
    updateScoreboard(game);
    setTimeout(function(){
      Rounds.time = Rounds.getTimer();
      Rounds.logTimers = !0;
      grids = genGrids();
      Rounds.setSafeZones();
    },2000);
  },
  gridRadius: function() {
    return 1 - this.time/this.getTimer();
  },
  setSafeZones: function() {
    grids.forEach(grid => {
      game.setObject({
        id: "safeZoneMarker"+grid.join("&"),
        type: safeZoneMarker,
        position: {x:grid[0],y:grid[1],z:0},
        rotation: {x:Math.PI/2,y:0,z:0},
        scale: {x:20*this.gridRadius(),y:20*this.gridRadius(),z:20*this.gridRadius()}
      });
    });
    let zoom = transform.zoom(), rsize = 10*zoom*this.gridRadius();
    game.setUIComponent({
      id: "radar_background",
      components: grids.map(x => ({type:"round",position:[t(transform.X(x[0])*zoom-rsize),t(transform.Y(x[1])*zoom-rsize),rsize*2,rsize*2],width:1,stroke: "hsla(240,100%,50%,1)", fill: "hsla(180,100%,50%,0.5)"}))
    });
  }
}
scoreboard = {
  id: "scoreboard",
  components: []
}
var updateScoreboard = function(game){
  scoreboard.components = [];
  game.ships.filter(ship => ship.custom.in_game).slice(0,10).forEach((ship,i) => scoreboard.components.push(
    {type: "text", value: ship.score, position: [0,i*10+1.5,90,7], color:dfl_tcl, align: "right"},
    {type: "player", id: ship.id, position: [0,i*10+1.5,100,7], color: dfl_tcl}
  ));
  outputScoreboard(game);
};

var outputScoreboard = function(game) {
  for (let ship of game.ships) {
    let o = [...scoreboard.components], f = scoreboard.components.map(x => (x.id != null)?x.id:-1), t = f.indexOf(ship.id);
    if (t != -1) scoreboard.components.splice(t-1,0,{type:"box",position:[0,f.filter(x => x != -1).indexOf(ship.id)*10,100,10],fill:"hsla(210,24.3%,29%,0.5)"});
    ship.setUIComponent(scoreboard);
    scoreboard.components = [...o];
  }
}

var setStats = function(ship, ...stats) {
  game.setUIComponent({
    id: "stat",
    position: [3,28,17,15],
    visible: true,
    components: [stats, "Survivors: "+total_players].flat().map((j,i) => ({type: "text",position:[0,33*i,80,33],value:j,color:dfl_tcl}))
  });
}
this.tick = function (game) {
  if (game.step % 30 === 0) {
    if (wait >= 0) {
      if (game.ships.length == players) {
        (wait % 60 === 0) && announce("Game starting in: "+FormatTime([Math.floor(wait/3600), Math.floor((wait%3600)/60)]));
        wait-= 30;
      }
      else {
        wait = waiting_time;
        announce(`Waiting for more players (${game.ships.length}/${players})`);
      }
    }
    else {
      game.setOpen(false);
      for (let ship of game.ships) {
        let ts = getPosition(rand(dim),rand(dim));
        ship.set({x:ts[0],y:ts[1],type:201});
        ship.custom.in_game = !0
      }
      started = !0;
      this.tick = main_game;
    }
  }
}
this.event = function (event, game) {
  let ship = event.ship;
  switch (event.name) {
    case "ship_destroyed":
      ship.custom.in_game = !1;
      ship.custom.death = !0;
      started && updateScoreboard(game);
      break;
  }
}
let safeZoneMarker = {
  id: "safeZoneMarker",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
  emissiveColor: 0x4ce5fe,
  transparent: true
};
