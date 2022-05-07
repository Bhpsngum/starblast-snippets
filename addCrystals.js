/* Add a crystal drop field to the game - Encapsuled version
To create a crystal drop, use game.addCrystal({ options })
option         value
  x          X Coordinate
  y          Y Coordinate
amount      Crystal amount
RESTRICTIONS - Do not use the values/variables/components listing below in their particular contexts:
Game properties:
  game.custom.__addCrystal_init__
  game.custom.__execAliens__
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

this.event = e => echo(e.name)

/* Encapsuled part - Don't modify anything! This MUST BE appended at the end of your mod code! */
;(function() {
  if (!game.custom.__addCrystal_init__) {
    game.custom.__execAliens__ = [];
    game.custom.__addCrystal_init__ = true
  }

  var Crystal = function (data) {
    data = Object.assign({}, data);
    this.x = data.x;
    this.y = data.y;
    this.amount = data.amount;
  }
  Crystal.prototype.toString = function(){return "Crystal:" + JSON.stringify(this)}
  var manageAliens = function (game) {
    while (true) {
      let alien;
      let alienRID = game.custom.__execAliens__.find(rID => !rID.setKilled && (alien = game.aliens.find(a => a.id != -1 && a.request_id == rID.id)));
      if (alienRID == null) return;
      alien.set({kill: true});
      alienRID.setKilled = true
    }
  }

  game.addCrystal = function(data)
  {
    data = Object.assign({}, data);
    let alien = this.addAlien({
      code: 13,
      x: data.x,
      y: data.y,
      crystal_drop: data.amount,
      points: 0
    });
    this.custom.__execAliens__.push({id: alien.request_id});
    return new Crystal({
      x: alien.x,
      y: alien.y,
      amount: alien.crystal_drop
    })
  }

  var game_clone = Object.assign({}, this);
  var simulate = function (name, args) {
    let t = typeof game_clone[name] == "function" && game_clone[name].apply(game_clone, args);
    try { checkClone() } catch(e){}
    return t
  }

  var checkClone = function() {
    for (let key of Object.keys(this)) delete this[key];
    Object.assign(this, game_clone);

    this.tick = function () {
      try { manageAliens.apply(this, arguments) } catch(e){}
      return simulate("tick", arguments)
    }

    this.event = function (event, game) {
      if (event.name != "alien_destroyed" || !game.custom.__execAliens__.find(e => e.id === (event.alien||{}).request_id)) return simulate("event", arguments)
    }
  }.bind(this);
  checkClone()
}).call(this);
