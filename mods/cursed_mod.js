this.options = {
  map_size: 30,
  // And now... the most important thing that makes this mod funny
  // Hope devs will fix it soon
  shield_regen_factor: "no"
}

this.tick = function (game) {
  // Enjoy the chaos :)
  for (let i = 0; i < 100 ;i++) game.addAlien({code:20,level:3});
  this.tick = null
}
