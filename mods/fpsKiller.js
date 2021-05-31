/* FPS Killer mod - kill your fps for fun!
For more instructions please run the mod. */

var init = function(game) {
  if (!game.custom.fpsKiller) {
    echo("Welcome to the FPS Killer mod!");
    echo("type `fpsKiller <number> to increase (and only increase) the killer level`");
    echo("the higher the killer level is, the more serious FPS drops it can cause")
    echo("Have fun! :D");
    game.custom.fpsKiller = {
      level: 0,
      setLevel: function (number) {
        number = Math.max(Math.round(number),0) || 0;
        let success = number > this.level && isFinite(number), old = this.level;
        if (success) {
          this.level = number;
          game.ships.forEach(function(ship) {
            ship.custom.updated = false
          });
          return {
            success: success,
            oldLevel: old,
            newLevel: this.level,
          }
        }
        else return {
          success: success,
          currentLevel: this.level,
          invalidLevel: number,
        }
      },
      tick: function (game) {
        for (let ship of game.ships) {
          if (!ship.custom.joined) {
            queueInstructor(ship, "Welcome to the FPS Killer mod!\nPlease use fullscreen for \"better\" experience.\nThank you.", null, 300);
            ship.custom.joined = true;
          }
          if (!ship.custom.updated) {
            queueInstructor(ship, "Current FPS Killer level is now "+this.level+"!", null, 300);
            ship.setUIComponent({
              id: "fpsLevel",
              position: [0,28,20,5],
              visible: true,
              components: [
                {type: "text",position:[15,0,70,100],value:"FPS Killer level: "+this.level, color:"#cde"},
              ]
            });
            for (let i = 0; i < this.level; i++) ship.setUIComponent({
              id: "fpsKiller" + i,
              visible: false
            });
            ship.custom.updated = true;
          }
          let hideStep = ship.custom.hideStep;
          if (isNaN(hideStep) || (hideStep <= game.step && hideStep > 0)) {
            ship.hideInstructor();
            ship.custom.hideStep = -1;
          }
        }
      }
    }
  }
  game.modding.commands.fpsKiller = function(level) {
    let status = game.custom.fpsKiller.setLevel(level.trim().split(" ")[1]);
    if (status.success) echo("Successfully increase FPS Killer level from "+status.oldLevel+" to "+status.newLevel+"!");
    else game.modding.terminal.error("Failed to set FPS Killer level: Invalid level '"+status.invalidLevel+"'. Current FPS Killer level is "+status.currentLevel+".")
  }
}, fpsKillerTick = function(game) {
  game.custom.fpsKiller.tick(game);
}, queueInstructor = function (ship, message, instructor, delay) {
  if (ship != null && typeof ship.instructorSays == "function") {
    ship.instructorSays(message, instructor);
    let timer = Number(ship.custom.hideStep);
    if (timer < game.step || isNaN(timer)) timer = game.step;
    ship.custom.hideStep = timer + (Math.max(delay,0) || 0)
  }
}
this.tick = function (game) {
  init(game);
  this.tick = fpsKillerTick;
  this.tick(game);
}

this.options = {
  map_name: "FPS Killer mod"
}
