game.checkRanges = function(mode,...ticks){
  switch (mode) {
    case 0: // single
    case "single":
      ticks = ticks.map(i => Number(i)).filter(i => !isNaN(i) && i > 0).sort((i,j) => i-j);
      let tick_max = 1;
      ticks.forEach(tick => game.step % tick === 0 && (tick_max = tick));
      return tick_max;
    case 1: // multi
    case "multi":
      ticks = ticks.map(i => {
        i=i||{};
        return {tick: Number(i.tick), task: i.task}
      }).filter(i => !isNaN(i.tick) && i.tick > 0 && typeof i.task == "function");
      let tick_count = [];
      ticks.forEach(tick => game.step % tick.tick === 0 && (tick.task.bind(this.modding.context)(tick.tick, game.step), tick_count.push(tick.tick)));
      return (tick_count.length === 0)?[1]:tick_count;
    default:
      throw new Error("Invalid Mode!");
  }
}
