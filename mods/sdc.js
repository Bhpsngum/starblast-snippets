var gem_ratio = 1/2;
var arena_radius = 25;

var ships = [];
var map_size = 200;
this.options = {
  map_name: "SDC - Starblast Dueling Championship",
  map_size: map_size,
  custom_map:"",
  starting_ship: 801,
  ships: ships,
  reset_tree: false,
  max_players: 16,
  radar_zoom: 1
}

let r = arena_radius * 10, d = 2000/3 - 2*r, pos = function(x) {
  return -1000 + (r + d/2)*(2*x + 1);
}
var t = function(x) {
  let o = x+map_size*5, zoom = 10/map_size, rsize = zoom*r;
  return Math.max(o*zoom-rsize,0) || 0;
}
var grids = Array(3).fill(0).map((f,i) => Array(3).fill(0).map((v,j) => [pos(i),pos(j)])).flat();

let safeZoneMarker = {
  id: "safeZoneMarker",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
  emissiveColor: 0x4ce5fe,
  transparent: true
}

this.tick = function(game) {
  grids.forEach((grid,j) => {
    game.setObject({
      id: "safeZoneMarker"+j,
      type: safeZoneMarker,
      position: {x:grid[0],y:grid[1],z:-5},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:20.25*arena_radius,y:20.25*arena_radius,z:20.25*arena_radius}
    });
  });
  this.tick = main_game;
}

var main_game = function(game) {
  for (let ship of game.ships) {
    if (!ship.custom.joined) {
      let rsize = 10/map_size*r;
      ship.setUIComponent({
        id: "radar_background",
        components: grids.map(x => ({type:"round",position:[t(x[0]),t(x[1]),rsize*2,rsize*2],width:1,stroke: "hsla(240,100%,50%,1)", fill: "hsla(180,100%,50%,0.5)"}))
      });
      ship.set({x:0,y:0});
      ship.custom.joined = true;
    }
  }
}
