/*
SAFE ZONES MOD by Bhpsngum
based on the famous traditional game Musical Chairs
*/

/* Configurable values - You can edit this section while waiting for players! */
var waiting_time = 15; // lobby waiting time when there are enough players (in seconds, non-zero - of course)
var players = 10; // Number of players (minimum 10), One-time edit only
var map_size = 20; // Map size (must be even, minimum 20), One-time edit only
var round_time_max = 30; // First round duration (in seconds, minimum 30)
var round_time_min = 10; // Last round duration (in seconds, minimum 10)

var PermaSafe = "random";
/* Permanent Safety: ships can't be knocked out or not by other players when standing in blue zones
* true/false : available values
*  "random"  : random setup
*/

var SpawnMode = "random";

/* SpawnMode: Spawning when new round starts:
*    0     : [Off] Don't affect the spawn
*    1     : [Center] Spawning at the sun (0,0)
*    2     : [Random] Spawning randomly
* "random" : random setup
*/

/* Danger zone! Do not touch the rest of the code! */

map_size = Math.floor(Math.min(Number(map_size)||20,20)/2)*2;

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

var wait = waiting_time;
var dim = map_size/2;
var grids = [];
var dfl_tcl = "hsla(210, 50%, 87%, 1)";
var total_players = 0;
var range = 10;
var echo = game.modding.terminal.echo;
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
  while (list.size < Math.min(total_players - 1, dim**2)) {
    let t = [rand(dim),rand(dim)].join("-");
    (Spawn.mode != 1 || t != "0-0") && list.add(t);
  }
  return [...list].map(i => getPosition(...i.split("-").map(i => Number(i))));
}
var getPosition = function(...pos) {
  return pos.map((x,i) => (i?-1:1)*(x*2+1-map_size/2)*10);
}
var checkSafe = function (ship, range) {
  return Math.sqrt((ship.x-range[0])**2 + (ship.y-range[1])**2) <= 10;
}

Spawn = {
  names: ["Off","Center","Random"],
  modes: [
    null,
    function(ship) {ship.set({x:0,y:0})},
    function(ship) {
      let ts = getPosition(rand(dim),rand(dim));
      ship.set({x:ts[0],y:ts[1]});
    }
  ],
  set: function (ship) {
    typeof this.modes[this.mode] == "function" && this.modes[this.mode](ship);
  }
};
var toTick = sec => sec*60;

// Match info checking & logging
var setSecond = function(num) {
  return Math.round(num) + " second" + (Math.round(num)!=1?"s":"");
}
PermaSafe = !(((PermaSafe||"").toString().toLowerCase() == "random")?rand(2):!PermaSafe);
if ((SpawnMode||"").toString().toLowerCase() == "random") Spawn.mode = rand(3);
else {
  let smt = Number(SpawnMode) || 0;
  Spawn.mode = Math.floor(Math.min(Math.max(smt, 0), Spawn.modes.length-1));
}
waiting_time = Math.max((Number(waiting_time)||15),0);
round_time_max = Math.max((Number(round_time_max)||30),30);
round_time_min = Math.min(Math.max((Number(round_time_min)||10),10), round_time_max);
players = Math.max(Number(players)||10,2);

var infos = [
  ["Map size",map_size],
  ["Total zones",dim**2],
  ["Number of players",players],
  ["Waiting time",setSecond(waiting_time)],
  ["First match duration",setSecond(round_time_max)],
  ["Last match duration",setSecond(round_time_min)],
  ["Permanent Safety",PermaSafe],
  ["Spawning Mode",Spawn.mode+" ("+Spawn.names[Spawn.mode]+")"]
];
let max_len = Math.max(...infos.map(i => i[0].length));
echo("\nSAFE ZONES MOD - by Bhpsngum");
echo("based on the famous traditional game Musical Chairs");
echo("---------- MATCH INFO ----------");
infos.forEach(u => echo(u[0] + new Array(max_len-u[0].length).fill(" ").join("")+" : "+u[1]));
echo(" ");

var showMatchInfo = function() {
  let len = 10, adjust = 1, pos = j => len*(j+1)+adjust, lent = len - adjust*2;
  game.setUIComponent({
    id: "scoreboard",
    components: [
      {type: "text", position: [0,pos(-1),100,lent], value:"MATCH INFO", color: dfl_tcl},
      infos.map((i,j) => [
        {type: "text", position: [0,pos(j),49,lent], value: i[0], color: dfl_tcl, align: "left"},
        {type: "text", position: [0,pos(j),100,lent], value: ":", color: dfl_tcl},
        {type: "text", position: [51,pos(j),49,lent], value: i[1], color: dfl_tcl}
      ])
    ].flat(2)
  });
}
// Spectator ship
var Spectator_201 = '{"name":"Spectator","level":2,"model":1,"size":1,"zoom":0.2,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[100,100],"acceleration":[100,100]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[100,100],"acceleration":[100,100]}},"shape":[0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02],"lasers":[],"radius":0.02}}';

var player_ship_level = 1;

// Player ships
var Round_Plate = '{"name":"Round Plate","designer":"Bhpsngum","size":4.5,"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,100,0],"height":[0,100,100,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Round Plate","code":null,"shape":[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],"lasers":[],"radius":9}}';
var Aries_Flower = '{"name":"Aries Flower","designer":"45rfew","size":4.817987152034261,"bodies":{"cockpit":{"section_segments":20,"offset":{"x":0,"y":-10,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-35,-25,-15,0,15,25,35,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,20,25,20,10,15,15,0],"height":[0,10,13,15,15,15,12,10,0],"texture":[6,15,15,1,4,3,3,15]},"topcockpit":{"section_segments":16,"offset":{"x":0,"y":-23,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"arm0":{"section_segments":6,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon0":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":0},"sidecannons0":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":0},"arm1":{"section_segments":6,"angle":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon1":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":20},"sidecannons1":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":20},"arm2":{"section_segments":6,"angle":40,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon2":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":40},"sidecannons2":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":40},"arm3":{"section_segments":6,"angle":60,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon3":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":60},"sidecannons3":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":60},"arm4":{"section_segments":6,"angle":80,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon4":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":80},"sidecannons4":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":80},"arm5":{"section_segments":6,"angle":100,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon5":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":100},"sidecannons5":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":100},"arm6":{"section_segments":6,"angle":120,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon6":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":120},"sidecannons6":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":120},"arm7":{"section_segments":6,"angle":140,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon7":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":140},"sidecannons7":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":140},"arm8":{"section_segments":6,"angle":160,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon8":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":160},"sidecannons8":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":160},"arm9":{"section_segments":6,"angle":180,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon9":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":180},"sidecannons9":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":180},"arm10":{"section_segments":6,"angle":200,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon10":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":200},"sidecannons10":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":200},"arm11":{"section_segments":6,"angle":220,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon11":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":220},"sidecannons11":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":220},"arm12":{"section_segments":6,"angle":240,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon12":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":240},"sidecannons12":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":240},"arm13":{"section_segments":6,"angle":260,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon13":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":260},"sidecannons13":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":260},"arm14":{"section_segments":6,"angle":280,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon14":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":280},"sidecannons14":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":280},"arm15":{"section_segments":6,"angle":300,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon15":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":300},"sidecannons15":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":300},"arm16":{"section_segments":6,"angle":320,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon16":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":320},"sidecannons16":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":320},"arm17":{"section_segments":6,"angle":340,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon17":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":340},"sidecannons17":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":340},"arm18":{"section_segments":6,"angle":360,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cannon18":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-88,-93,-83,-63,-53,-51],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"angle":360},"sidecannons18":{"section_segments":6,"offset":{"x":0,"y":0,"z":7},"position":{"x":[-45,-45,-45,-45,-45,-45],"y":[-45,-75,-65,-45,-35,-33],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":360}},"wings":{"side_joins":{"offset":{"x":0,"y":0,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[10,11],"bump":{"position":10,"size":20}},"side_joins2":{"offset":{"x":0,"y":-10,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[1,11],"bump":{"position":10,"size":20}},"side_joins3":{"offset":{"x":0,"y":10,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[1,18],"bump":{"position":10,"size":20}}},"typespec":{"name":"Aries Flower","code":null,"shape":[8.979,9,9,8.998,9,9,9,8.56,9,9,9,8.988,9,9,8.988,9,9,9,8.56,9,9,9,8.998,9,9,8.979,9,9,8.998,9,9,9,8.56,9,9,9,8.988,9,9,8.988,9,9,9,8.56,9,9,9,8.998,9,9],"lasers":[],"radius":9}}';

var ships = [];

ships.push(Round_Plate);
ships.push(Aries_Flower);

var ship_count = ships.length;

// Adding safe ships
var mod = function(ship, handler) {
  typeof handler == "function" && [[],["typespec"]].forEach(i => {
    let param = ship;
    i.forEach(j => (param = param[j]));
    handler(param);
  });
}
for (let i = 0; i < ship_count; i++) {
  let ship = JSON.parse(ships[i]);
  mod(ship, function(s) {
    s.level = player_ship_level;
    s.model = i + 1;
    s.specs = {
      shield: {
        capacity: [1e3,1e3],
        reload: [1e3,1e3]
      },
      generator: {
        capacity: [1e-3,1e-3],
        reload: [1e-3,1e-3]
      },
      ship: {
        mass: 1e3,
        speed: [200,200],
        rotation: [100,100],
        acceleration: [100,100]
      }
    }
  });
  ship.typespec.code = ship.level * 100 + ship.model;
  ships[i] = JSON.stringify(ship);
  if (PermaSafe) {
    mod(ship, function(s) {
      s.name = "Safe " + s.name;
      s.model += ship_count;
      s.specs.ship.mass = 1e6;
    });
    ship.typespec.code = ship.level * 100 + ship.model;
    ships.push(JSON.stringify(ship));
  }
}

ships.push(Spectator_201);

var Spectate_ship = 201;

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
            ship.set({type:Spectate_ship});
          }
          else setStats(ship, "You are alive.");
        }
        else if (!ship.custom.in_game && ship.type != Spectate_ship) ship.set({type:Spectate_ship});
      }
      if (Rounds.logTimers) {
        if (Rounds.time >= 0) {
          game.ships.forEach(ship => {
            let xs = ship.type - 100, t = 100 + (xs > ship_count?(xs - ship_count):xs) + Number(checkSafeZones(ship) && PermaSafe)*ship_count;
            if (ship.type != Spectate_ship && (ship.type != t || ship.custom.type != t)) {
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
      !skip && game.ships.forEach(ship => {
        if (ship.type != Spectate_ship && !checkSafeZones(ship)) {
          ship.custom.in_game = !1;
          ship.custom.death = !0;
          ship.rankings = total_players;
          ship.set({score:total_players});
        }
        ship.custom.init = !1;
      });
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
  getTimer: () => toTick((round_time_max-round_time_min)/(players-2)*(total_players-2) + round_time_min),
  start: function() {
    this.count++
    grids.forEach(grid => game.removeObject("safeZoneMarker"+grid.join("&")));
    game.setUIComponent({id:"radar_background",components: []});
    announce("Round "+this.count+"!");
    game.ships.forEach(ship => {
      ship.custom.init = !1;
      Spawn.set(ship);
    });
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
    if (t != -1) scoreboard.components.splice(t-1,0,{type:"box",position:[0,f.filter(x => x != -1).indexOf(ship.id)*10+1,100,8],fill:"hsla(210,24.3%,29%,0.5)"});
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

let safeZoneMarker = {
  id: "safeZoneMarker",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
  emissiveColor: 0x4ce5fe,
  transparent: true
};

// Main functions
this.options = {
  ships: ships,
  reset_tree: true,
  max_level: 1,
  map_size: map_size,
  choose_ship: new Array(ship_count).fill(0).map((j,i) => player_ship_level*100+1+i),
  custom_map: "",
  max_players: players,
  vocabulary: vocabulary,
  radar_zoom: 1,
  friendly_colors: 1
}
this.tick = function (game) {
  if (game.step % 30 === 0) {
    if (wait >= 0) {
      if (game.ships.length == players) {
        (wait % 60 === 0) && announce("Game starting in: "+FormatTime([Math.floor(wait/3600), Math.floor((wait%3600)/60)]));
        wait-= 30;
      }
      else {
        wait = toTick(waiting_time);
        announce(`Waiting for more players (${game.ships.length}/${players})`);
      }
      showMatchInfo();
    }
    else {
      game.setOpen(false);
      for (let ship of game.ships) {
        Spawn.set(ship);
        ship.custom.in_game = !0;
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
