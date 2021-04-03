/* Add a crystal drop field to the game

To create a crystal drop, use game.addCrystal({ options })
option         value
  x          X Coordinate
  y          Y Coordinate
value        Crystal value

RESTRICTIONS - Do not use the values/variables/components listing below in their particular contexts:

Game properties:
  game.execAliens
  game.moddingPath

*/

this.options = {
  // see documentation for options reference
  root_mode: "survival",
  map_size: 30
}

this.tick = function(game)
{
  // do mod stuff here, see documentation
}

/* Don't touch the part below! This must be appended at the end of your mod code! */
;(function() {
  var manageAliens = function (game) {
    var alienPath = Object.keys(game.modding).find(i => {
      try {
        return game.modding[i].modding && i != "game"
      }
      catch(e) {
        return false
      }
    });
    if (!alienPath) game.modding.terminal.error("Failed to initialize 'game.addCrystal'");
    else {
      var x = game.modding[alienPath].alienCreated;
      game.modding[alienPath].alienCreated = function (...args){
        x.call(this, ...args);
        let t = args[0].id, al = game.findAlien(t);
        if (game.aliens.find(alien => alien.request_id === args[0].request_id) && al) {
          let tid = game.execAliens.indexOf(t);
          if (tid != -1) {
            al.set({kill:true});
            game.execAliens.splice(tid, 1);
          }
        }
      }
      game.execAliens = [];
      game.addCrystal = function(data)
      {
        data = data || {};
        let crystal = {x:data.x||0, y:data.y||0, value: data.value||0,
          toString: function(){return "Crystal:"+JSON.stringify(this)}
        };
        this.execAliens.push(this.addAlien({code:13,x:crystal.x,y:crystal.y,crystal_drop:crystal.value}).request_id);
        return crystal;
      }
    }
  }, tick = this.tick;
  this.tick = function (game) {
    manageAliens(game);
    this.tick = tick;
    this.tick(game);
  }
}).call(this);
