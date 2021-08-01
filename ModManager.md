# Mod Manager
Manager for extended events and properties

## Status
In beta
## Versions
### Full version
#### Benefits
* Have access to more features in Modding
#### Drawbacks
* A "placeholder" bot will be spawned in your game, leading to small inaccuracy

### Lite version
#### Benefits
* Small-sized
* High accuracy (because it only reads game info)
#### Drawbacks
* Have access to fewer features than the [Full Version](#full-version)

## Features
### Notes
* **<sup>F</sup>** means that it's only available on the [Full Version](#full-version)
### `game.options` extended options

Here is the list of options that are added: 
* `map_id`
* `map_name`

### Ship properties

#### `ship.customization`

An object with these fields:

|Field|Description|
|-|-|
|badge|The badge that the player uses (or `null` if the player doesn't have ECP)|
|skin|The skin uses by the player|
|laser|laser skin|
|hue|Initial hue (hue when player first appeared in-game)|

#### `ship.hue`

Current hue of the ship, a number (0->359)

#### Deathmatch-mode only field <sup>F</sup>
**Note:** Those fields only appears after the player finished their first round

|Field|Description|
|-|-|
|rounds|Rounds played|
|kills|Total kills|
|deaths|Total deaths|
|wins|Total wins|

### Extended `game` properties <sup>F</sup>

#### `game.team_stats` (Only works with `root_mode: "team"`)

Same as `game.options.teams` (an array), but each item contains more properties:

* `best_killer`
* `best_healer`
* `best_contributor`

Example:
```js
this.tick = function (game) {
  if (game.step % 30 === 0) { // make sure that this is done only once per second
    for (let team of game.team_stats) {
      if (team.best_killer != null) team.best_killer.instructorSays("Congratulations! You are the best killer on your team!")
    }
  }
}
```

### Extended events <sup>F</sup>
#### Deathmatch mode

##### `waiting`
* Fired when there are not enough players and players are waiting
* Aditional fields: None
##### `round_coutdown`
* Fired when the round is on countdown phase (choose ship screen before round start)
* Additional fields:

|Field|Description|
|-|-|
|map_id|Map pattern ID for this round|
|ships|Ships being chosen in this round|
|time|Countdown time (in ticks)|

##### `round_started`
* Fired when the round has started
* Additional fields:

|Field|Description|
|-|-|
|map_id|Map pattern ID for this round|
|ships|Ships being chosen in this round|

##### `round_finished`
* Fired when the round has finsished
* Additional fields:

|Field|Description|
|-|-|
|results|Result of the round, an array of ships|
