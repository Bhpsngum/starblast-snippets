/* "ship_disconnected" event - fired when a ship is leaving (Encapsuled version)
Made by (123) Notus

RESTRICTIONS - Do not use the values/variables/components listing below in their particular contexts:

Game properties:
  game.custom.shipDisconnected_init
*/

/* Usual Modding code */
this.tick = function(game) {
  // put your tick logic here
}

this.event = function(event, game) {
  /* Usage example */
  switch (event.name) {
    case "ship_disconnected":
      echo(`Player left: ${event.ship.name}`);
      break;
  }
}

/* Encapsuled part - Don't modify anything! This MUST BE appended at the end of your mod code! */
;(function(){
  var internals_init = function() {
    if (game.custom.shipDisconnected_init) {
      return;
    }
    const modding = game.modding;
    const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
    if (!internals) {
      modding.terminal.error(new Error("Failed to initialize 'ship_disconnected' event: modding internals object not found"));
      return;
    }
    if (!internals.shipDisconnected.old) {
      function shipDisconnected({id} = {}) {
        if (modding.context.event && id) {
          var ship = game.findShip(id);
          if (ship) {
            modding.context.event({ name: "ship_disconnected", ship }, game);
          }
        }
        return shipDisconnected.old.apply(this, arguments);
      }
      shipDisconnected.old = internals.shipDisconnected;
      internals.shipDisconnected = shipDisconnected;
    }
    game.custom.shipDisconnected_init = true;
  }
  var tick = this.tick;
  this.tick = function(game) {
    this.tick = tick;
    internals_init();
    this.tick(game);
  }
}).call(this);
