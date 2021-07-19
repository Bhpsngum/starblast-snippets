/*
ORBITING ASTEROIDS

1. Syntax:

game.addOrbitingAsteroid({
  starting_x: 0, //starting x position of the asteroid
  graph: function(x) { return x }, // a graph for the orbit of this asteroid, forced in format y = f(x), default y = 0 (in this case y = f(x) = x)
  orbiter: function(asteroid) {return {x: asteroid.x, custom: false}}, // custom orbiter for the asteroid orbit
  size: 50, // asteroid size, minimum 1, default 30
  velocity: 1, // velocity of the asteroid (following the xAxis vector), use negative numbers for the opposite direction, minimum 1, default 1
  interval: 15, // an integer representing interval between each check (in ticks), minimum 1
  asteroid: game.asteroids[0], // an asteroid to be controlled in this orbit, creates a new asteroid if omitted or input is not an asteroid object
})

Note: if the `asteroid` value is appropiate, any omitted value in those properties will be changed to the following value:
* `starting_x`: asteroid.x
* `size`: asteroid.size


2. Custom Orbiter function

* Arguments: `asteroid`
* `this` object is the Orbiting Asteroid where the function is defined.

Must returns: An object with properties:
* custom: the result object will directly set to the asteroid or will be proccesed through the graph function
* x: x position of the function to be proccesed with (if `custom` is set to `false`)

3. Acessing

An array named `game.orbitingAsteroids` holds every active orbiting asteroids in the game
each items contains:
* interval
* orbiter
* graph
* size
* x: current x position of the asteroid
* asteroid: the asteroid object in the orbit
* custom: an object storing custom values

WARNING: DO NOT directly modify any properties in any orbiting asteroid object

4. Set function

syntax:

OrbitingAsteroid.set({
  graph: function (x) {return x},
  orbiter: null,
  interval: 30,
  velocity: 2,
  asteroid: game.asteroids[1]
});

`OrbitingAsteroid` can be `game.orbitingAsteroids[index]`, etc.

*/
;(function(){
  var d = function (f) {
     var h = 0.001;
     return function(x) { return (f(x + h) - f(x - h)) / (2 * h) }
  }
  var placeholder = new Asteroid(game);
  var OrbitingAsteroid  = class {
    constructor (game, options) {
      this.set = function (options) {
        if (options.graph != null) this.graph = (typeof options.graph == "function")?options.graph:(function(x){return 0});
        if (options.interval != null) this.interval = Math.trunc(Math.max(1, options.interval)) || 1;
        if (options.velocity != null) this.velocity = Number(options.velocity) || 1;
        if (options.orbiter != null) this.orbiter = options.orbiter;
        if (options.asteroid instanceof Asteroid) this.asteroid = options.asteroid;
      }
      this.set({
        velocity: options.velocity || 0,
        graph: options.graph || 0,
        interval: options.interval || 0,
        orbiter: options.orbiter,
        asteroid: options.asteroid || placeholder
      });
      let u = this.asteroid == placeholder || !(this.asteroid instanceof Asteroid);
      this.x = isNaN(options.starting_x)?(u?0:this.asteroid.x):Number(this.starting_x);
      this.size = isNaN(options.size)?(u?30:this.asteroid.size):Math.max(options.size, 1);
      this.custom = {};
      this.orbit = function () {
        let x;
        if (typeof this.orbiter == "function") {
          let t = this.orbiter(this.asteroid) || {};
          if (t.custom) return t;
          x = t.x
        }
        else x = this.x;
        let r = this.velocity;
        let angle = Math.atan(d(this.graph)(x)) || 0;
        return {y: this.graph(x) || this.asteroid.y || 0, vx: r * Math.cos(angle), vy: r * Math.sin(angle)}
      }
      this.tick = function(game) {
        if (this.asteroid.id != -1 && !this.asteroid.killed && game.step % this.interval === 0) {
          this.size = this.asteroid.size;
          this.x = this.asteroid.x;
          this.last_updated = this.asteroid.last_updated;
          this.asteroid.set(this.orbit())
        }
      }
      this.asteroid = u?new Asteroid(game, {x: this.x, size: this.size}):this.asteroid;
      let opts = this.orbit();
      opts.size = this.size;
      opts.x = this.x;
      if (u) this.asteroid = game.addAsteroid(opts);
      else this.asteroid.set(opts)
    }
  }
  if (!Array.isArray(game.orbitingAsteroids)) game.orbitingAsteroids = [];
  game.addOrbitingAsteroid = function (options) {
    return game.orbitingAsteroids.push(new OrbitingAsteroid(this, options))
  }
  var tickOrbitingAsteroids = function (game) {
    game.orbitingAsteroids = game.orbitingAsteroids.filter(orbitingAsteroid => (orbitingAsteroid.tick(game), !orbitingAsteroid.asteroid.killed))
  }
  var tick = this.tick;
  this.tick = function () {
    try { tickOrbitingAsteroids.apply(this, arguments) } catch(e){}
    typeof tick == "function" && tick.apply(this, arguments)
  }
}).call(this);
