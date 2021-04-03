/* "ship_disconnected" event - fired when a ship is leaving
Made by (123) Notus
*/
this.tick = function(game) {
  // put your tick logic here
}

this.event = function(event, game) {
  switch (event.name) {
    case "ship_disconnected":
      echo(`Player left: ${event.ship.name}`);
      break;
  }
}

/* Don't touch the part below! This must be appendeded at the end of your mod code */
;(function(){
  var internals_init = function() {
    if (game.custom.internals_init) {
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
    game.custom.internals_init = true;
  }
  var tick = this.tick;
  this.tick = function(game) {
    this.tick = tick;
    internals_init();
    this.tick(game);
  }
}).call(this);
