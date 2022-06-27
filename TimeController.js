/* TIME CONTROLLER - using Intervals and Timeouts in sync with game */

/* Copy paste part - Copy this part below and paste to THE START of your code */
class TimeController {
  #unit = class TimeControllerUnit {
    constructor (game) {
      if (game?.tick == null) throw new Error("Could not initialize TimeControl on 'game': No tick function found");
      this.#game = game;
      let tick = game.tick;
      let _this = this, sampleFunction = function (...args) {
        try { tick?.call(this, ...args) } catch (e) { console.error(e) }
        _this.#runJobs()
      }
      Object.defineProperty(game, '_timeControllerUnitInstance', {value: this});
      Object.defineProperty(game, 'tick', {
        set (value) { },
        get () { return sampleFunction }
      })
    }

    #game;
    #jobs = [];
    #id_pool = 0;
    #beforeTick = true;

    #addJob (f, time, repeat, args) {
      time = Math.round(Math.max(0, time)) || 0;
      this.#jobs.push({f, time, finish: game.step + time, repeat, args, id: ++this.#id_pool});
      return this.#id_pool
    }

    #removeJob (i) {
      let job = this.#jobs[i];
      if (job.repeat) job.finish += job.time;
      else this.#jobs.splice(i, 1)
    }

    #clearJob (id) {
      for (let i = 0; i < this.#jobs.length; ++i) {
        let job = this.#jobs[i];
        if (job.id === id) {
          this.#jobs.splice(i, 1);
          return
        }
      }
    }

    #runJobs () {
      for (let i = 0; i < this.#jobs.length; ++i) {
        let job = this.#jobs[i];
        if (job.finish <= this.#game.step) {
          try {
            "string" == typeof job.f ? eval(job.f) : job.f(...job.args);
            this.#removeJob(i);
          }
          catch (e) {
            this.#removeJob(i);
            console.error(e)
          }
        }
      }
    }

    setTimeout (f, time, ...args) {
      return this.#addJob(f, time, false, args, null)
    }

    setInterval (f, time, ...args) {
      return this.#addJob(f, time, true, args, null)
    }

    clearTimeout (id) {
      this.#clearJob(id)
    }

    clearInterval (id) {
      this.#clearJob(id)
    }
  }

  get (game) {
    if (game?._timeControllerUnitInstance) return game._timeControllerUnitInstance;
    return new this.#unit(game)
  }
}

/* END OF COPY-PASTE PART */

/* Usage
time_control = new TimeController(): create a new TimeController instance, which has methods described below

time_control.get(game): returns a special TimeControllerUnit object that's made unique for the specified `game` object

within that object, you can use its method `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval` like usual,
with an exception that time unit will be `game tick` (1 second = 60 game ticks) instead of `ms`

*/

let time_control =  new TimeController().get(game);

window.a = time_control.setInterval(function () {
  echo('a')
}, 60);
