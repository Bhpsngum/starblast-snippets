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

An object with these properties:

|Property|Description|
|-|-|
|badge|The badge that the player uses (or `null` if the player doesn't have ECP)|
|skin|The skin uses by the player|
|laser|laser skin|
|hue|Initial hue (hue when player first appeared in-game)|

#### `ship.hue`

Current hue of the ship, a number (0->359)
