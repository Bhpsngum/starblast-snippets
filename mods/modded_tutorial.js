this.options = {
  map_size: 20,
  root_mode: "",
  max_players: 1,
  custom_map: "",
  starting_ship_maxed: false,
  vocabulary: [
    { text: "Hello", icon: "\u0045", key: "L" },
    { text: "Bye", icon: "\u0046", key: "B" },
    { text: "Yes", icon: "\u004c", key: "Y" },
    { text: "No", icon: "\u004d", key: "N" },
    { text: "Thanks", icon: "\u0041", key: "X" },
    { text: "Sorry", icon: "\u00a1", key: "S" },
    { text: "No Prob", icon: "\u0047", key: "P" },
    { text: "Good Game", icon: "\u00a3", key: "G" },
    { text: "You", icon: "\u004e", key: "O" },
    { text: "Me", icon: "\u004f", key: "E"},
    { text: "Mine", icon: "\u0044", key: "M" },
    { text: "Attack", icon: "\u0049", key: "A" },
    { text: "Help", icon: "\u004a", key: "H" },
    { text: "Follow", icon: "\u0050", key: "F" },
    { text: "Kill", icon: "\u005b", key: "K" },
    { text: "Hmm", icon: "\u004b", key: "Q" }
  ]
}

const Utils = {
  randomInt: function (num) {
    return Math.floor(Math.random() * num)
  }
}

const TrainingCoreModules = {
  devices: ["PC/Tablet", "Gamepad", "Touch"],
  box_ui: { type: "box", position:[0,0,100,100], stroke: "#FFF", width: 1 },
  toTick: function (sec) {
    return sec * 60
  },
  init: function (ship) {
    ship.custom.stage = -1;
    this.startNewStage(ship, game);
    ship.setUIComponent({
      id: "chooseDeviceText",
      position: [3,30,15,5],
      components: [
        this.box_ui,
        { type: "text", position: [15,0,70,100], color: "#FFF", value: "Change device:" }
      ]
    });
    this.devices.forEach((ui, i) => ship.setUIComponent({
      id: ui,
      clickable: true,
      position: [3 + i * 5, 35, 5, 5],
      components: [
        this.box_ui,
        { type: "text", position: [15,0,70,100], color: "#FFF", value: ui }
      ]
    }))
  },
  tick: function (ship, game) {
    if (ship.custom.training_completed) return;
    if (!ship.custom.joined) {
      ship.custom.joined = true;
      this.init(ship)
    }
    let stage = this.stages[ship.custom.stage];
    if (stage == null) return;
    if (!ship.custom.stage_passed) {
      if (game.step - ship.custom.stage_start_time > this.toTick(stage.introducing_duration)) switch (true) {
        case stage.passed(ship, game):
          ship.custom.stage_passed = true;
          ship.custom.stage_passed_time = game.step;
          this.startNewStage(ship, game);
          break;
        case stage.needs_refill(ship, game):
          stage.refill?.(ship, game);
          break;
      }
      stage.tick?.(ship, game);
      if (game.step - ship.custom.afk_time > this.toTick(this.messages.afk.interval)) {
        this.messages.sayRandom(ship, "afk");
        this.messages.sayStageText(ship, stage);
        ship.custom.afk_time = game.step
      }
    }
    else this.startNewStage(ship, game);
  },
  event: function (event, game) {
    for (let stage of this.stages) stage.event?.(event, game)
  },
  startNewStage: function (ship, game) {
    let stage = ship.custom.stage;
    let prevStage = this.stages[stage];
    if (!prevStage?.passed_message || game.step - ship.custom.stage_passed_time > this.toTick(this.messages.passed.duration)) {
      ++ship.custom.stage;
      let nextStage = this.stages[ship.custom.stage];
      if (nextStage == null) {
        ship.custom.training_completed = true;
        return ship.gameover({
          "Training Complete": "Congratulations!"
        });
      }
      ship.custom.stage_start_time = game.step;
      ship.custom.afk_time = game.step + this.toTick(nextStage.introducing_duration);
      ship.custom.stage_passed = false;
      ship.custom.passed_say_once = false;
      nextStage.init?.(ship, game);
      this.messages.sayStageText(ship, nextStage);
    }
    else if (!ship.custom.passed_say_once) {
      this.messages.sayRandom(ship, "passed");
      ship.custom.passed_say_once = true
    }
  },
  messages: {
    passed: {
      list: [
      	"OK good.",
      	"Well done.",
      	"Fine, but nothing to brag about.",
      	"OK I was told you'd do that.",
      	"Okay, let's take this as learnt.",
      	"Is that it? Okay",
      	"Alright"
      ],
      duration: 2
    },
    afk: {
      list: [
      	"Did you fall asleep?",
      	"???",
      	"Do you copy?",
      	"I think we lost comms. Commander??",
      	"Are you ok?"
      ],
      interval: 60
    },
    random: function (name) {
      let messages = this[name]?.list;
      return messages?.[Utils.randomInt(messages.length)] || ""
    },
    sayStageText: function (ship, stage) {
      if (!ship.custom.stage_passed) {
        let int = stage?.instructor_message;
        this.sayText(ship, int?.[ship.custom.device] || int?.["default"])
      }
    },
    sayText: function (ship, message) {
      if (message) ship.instructorSays(message + "\n")
    },
    sayRandom: function (ship, name) {
      this.sayText(ship, this.random(name))
    }
  },
  stages: [
    {
      name: "Joined",
      show_name: false,
      instructor_message: {
        default: ""
      },
      introducing_duration: 2,
      passed_message: false,
      passed: function () {
        return true
      },
      needs_refill: function () {
        return false
      }
    },
    {
      name: "Welcome",
      show_name: false,
      instructor_message: {
        default: "Welcome to your new unit, Commander. Here is your briefing."
      },
      introducing_duration: 5,
      passed_message: false,
      passed: function () {
        return true
      },
      init: function (ship) {
        ship.set({stats: 0})
      },
      needs_refill: function () {
        return false
      }
    },
    {
      name: "Basic Controls",
      show_name: false,
      instructor_message: {
        default: "Move the mouse cursor to steer the ship and aim.",
        "PC/Tablet": "Press ←, ↓, → on your keyboard or move the mouse cursor to steer the ship and aim.",
        "Touch": "Move the joystick to steer the ship and aim.",
        "Gamepad": "Move the Left Stick to steer the ship and aim."
      },
      introducing_duration: 2,
      passed_message: true,
      passed: function (ship) {
        return ship.custom.lastR != ship.r
      },
      needs_refill: function () {
        return false
      },
      tick: function (ship) {
        ship.custom.lastR = ship.r
      }
    },
    {
      name: "Basic Controls",
      show_name: false,
      instructor_message: {
        default: "Guess what, this spaceship can shoot lasers. Click left mouse button to fire.",
        "PC/Tablet": "Guess what, this spaceship can shoot lasers. Click left mouse button or press SPACEBAR on your keyboard to fire",
        "Gamepad": "Guess what, this spaceship can shoot lasers. Press Ⓐ on your gamepad to fire.",
        "Touch": "Guess what, this spaceship can shoot lasers. Touch the button on the bottom right to fire."
      },
      introducing_duration: 2,
      passed_message: true,
      passed: function (ship) {
        return ship.custom.lastGenerator != ship.generator
      },
      needs_refill: function () {
        return false
      },
      tick: function (ship) {
        ship.custom.lastGenerator = ship.generator
      }
    },
    {
      name: "Basic Controls",
      show_name: false,
      instructor_message: {
        default: "OK let’s move this wreck now. Click right mouse button to accelerate.",
        "PC/Tablet": "OK let’s move this wreck now. Click right mouse button, press ↑ on your keyboard to accelerate.",
        "Gamepad": "OK let’s move this wreck now. Press Right Trigger to accelerate.",
        "Touch": "OK let’s move this wreck now. Touch and drag the joystick to accelerate. You can also touch the central button to both fire and accelerate."
      },
      introducing_duration: 2,
      passed_message: true,
      passed: function (ship) {
        return ship.custom.lastVx != ship.vx || ship.custom.lastVy != ship.vy
      },
      needs_refill: function () {
        return false
      },
      tick: function (ship) {
        ship.custom.lastVx = ship.vx;
        ship.custom.lastVy = ship.vy
      }
    },
    {
      name: "Upgrades",
      show_name: false,
      instructor_message: {
        default: "There's an asteroid somewhere in this map. Find and destroy it."
      },
      introducing_duration: 0,
      passed_message: false,
      asteroid_size: 40,
      passed: function (ship) {
        return !!ship.custom.stage_asteroid_destroyed
      },
      needs_refill: function (ship, game) {
        return game.asteroids.length == 0
      },
      refill: function (ship, game) {
        let size = game.options.map_size * 5;
        game.addAsteroid({size: this.asteroid_size, x: Utils.randomInt(size) - size, y: Utils.randomInt(size) - size})
      },
      event: function (event, game) {
        switch (event.name) {
          case "asteroid_destroyed": {
            let ship = event.killer;
            if (ship != null) {
              let {x, y} = event.asteroid;
              ship.custom.stage_asteroid_destroyed = true;
              game.addAlien({code: 13, x, y, crystal_drop: 20, points: 0})
            }
            break;
          }
        }
      }
    },
    {
      name: "Upgrades",
      show_name: false,
      instructor_message: {
        default: "Oh oh! gems. Collect them all!"
      },
      introducing_duration: 3,
      passed_message: true,
      asteroid_size: 40,
      init: function (ship) {
        ship.set({stats: 11111111})
      },
      passed: function (ship) {
        return ship.crystals > 0
      },
      needs_refill: function (ship, game) {
        return game.asteroids.length == 0
      },
      refill: function (ship, game) {
        let size = game.options.map_size * 5;
        game.addAsteroid({size: this.asteroid_size, x: Utils.randomInt(size) - size, y: Utils.randomInt(size) - size})
      },
      tick: function (ship, game) {
        for (let alien of game.aliens) alien.set({kill: true});
        if (ship.type != ship.custom.lastType && ship.type != 101) ship.set({
          type: 101,
          crystals: ship.custom.lastCrystals
        })
        ship.custom.lastCrystals = ship.crystals;
        ship.custom.lastType = ship.type
      }
    },
    {
      name: "Upgrades",
      show_name: false,
      instructor_message: {
        default: "This ship could really be improved, you know. You can use your gems for that."
      },
      introducing_duration: 3,
      passed_message: false,
      passed: function (ship) {
        return true
      },
      needs_refill: function () {
        return false
      },
      tick: function (ship, game) {
        for (let alien of game.aliens) alien.set({kill: true});
      }
    },
    {
      name: "Upgrades",
      show_name: false,
      instructor_message: {
        default: "Upgrade any of your shield, firepower, damage or ship speed and agility...",
        "Gamepad": "Upgrade any of your shield, firepower, damage or ship speed and agility... Use the D-Pad."
      },
      introducing_duration: 2,
      passed_message: true,
      init: function (ship) {
        ship.set({stats: 0});
        if (ship.crystals < 5) ship.set({crystals: 5})
      },
      passed: function (ship) {
        return ship.stats != 0
      },
      needs_refill: function (ship) {
        return ship.crystals == 0
      },
      refill: function (ship) {
        ship.set({crystals: 5})
      },
      tick: function (ship, game) {
        for (let alien of game.aliens) alien.set({kill: true});
      }
    }
  ]
}

this.tick = function (game) {
  for (let ship of game.ships) TrainingCoreModules.tick(ship, game)
}

this.event = function (event, game) {
  switch (event.name) {
      case "ship_destroyed": {
        let ship = event.ship;
        if (ship != null) TrainingCoreModules.messages.sayText(ship, "Come on! Losing your ship isn't a big deal, you will be able to respawn and continue playing.");
        break;
      }
      case "ui_component_clicked": {
        let ship = event.ship;
        if (ship != null) {
          if (TrainingCoreModules.devices.indexOf(event.id) != -1) {
            ship.custom.device = event.id;
            TrainingCoreModules.messages.sayStageText(ship, TrainingCoreModules.stages[ship.custom.stage])
          }
        }
        break;
      }
      default:
        TrainingCoreModules.event(event, game)
  }
}
