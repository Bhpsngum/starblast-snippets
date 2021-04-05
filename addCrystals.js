/* Add a crystal drop field to the game - Encapsuled version

To create a crystal drop, use game.addCrystal({ options })
option         value
  x          X Coordinate
  y          Y Coordinate
value        Crystal value

RESTRICTIONS - Do not use the values/variables/components listing below in their particular contexts:

Game properties:
  game.custom.addCrystal_init
  game.custom.execAliens
*/

/* Usual Modding code */
this.options = {
  // see documentation for options reference
  root_mode: "survival",
  map_size: 30
}

this.tick = function(game)
{
  // do mod stuff here, see documentation
}

/* Encapsuled part - Don't modify anything! This MUST BE appended at the end of your mod code! */
;(function() {
  var manageAliens = function (game) {
    try {
      if (game.custom.addCrystal_init) return;
      var modding = game.modding, internal_key = Object.keys(modding).find(key => {
        try {
          return typeof modding[key].alienCreated == "function" && key != "game"
        }
        catch(e) {
          return false
        }
      }), internals = modding[internal_key];
      if (!internals.alienCreated.old) {
        let alienCreated =  function (){
          let args = arguments, tx = alienCreated.old.apply(this, args), t = args[0].request_id, alien = this.modding.game.findAlien(args[0].id);
          if (this.modding.game.aliens.find(alien => alien.request_id === t) && alien) {
            let tid = this.modding.game.custom.execAliens.indexOf(t);
            if (tid != -1) {
              alien.set({kill:true});
              this.modding.game.custom.execAliens.splice(tid, 1);
            }
          }
          return tx;
        }
        alienCreated.old = internals.alienCreated;
        internals.alienCreated = alienCreated;
      }
      game.custom.execAliens = [];
      game.addCrystal = function(data)
      {
        data = data || {};
        let crystal = {x:data.x||0, y:data.y||0, value: data.value||0,
          toString: function(){return "Crystal:"+JSON.stringify(this)}
        };
        this.custom.execAliens.push(this.addAlien({code:13,x:crystal.x,y:crystal.y,crystal_drop:crystal.value}).request_id);
        return crystal;
      }
      game.custom.addCrystal_init = true;
    }
    catch (e) {
      game.modding.terminal.error("Failed to initialize 'game.addCrystal'")
    }
  }, tick = this.tick;
  this.tick = function (game) {
    manageAliens(game);
    this.tick = tick;
    this.tick(game);
  }
}).call(this);
