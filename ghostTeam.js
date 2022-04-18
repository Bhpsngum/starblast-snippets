/* GHOST TEAM - having a ship that can damage other ships in all teams (and they can damage that ship as well)

NOTE: This code DOESN'T WORK in team mode-based games

USAGE:

Whenever you want to set the ship to the ghost team:
```js
ship.set({team: "ghost"});
```
and if you don't want it to be anymore, just set its team to the team id number you want

SENSITIVE PROPERTIES:

- ship.custom.__ghost_team_index__

COMMENTS:

Alternatively, you can either use `ship.set({team: []})` or `ship.set({team: ""})` to assign them to ghost team as well.
But since their type is different from team id, which is a number, they might be changes that fixes it in the future first and they won't work anymore.
Anyway, use them at your risk if you still want to do so :D
*/

/* Copy the code from the line to the rest and then append it to your code */

;(function(){
  let __init__ = function (game) {
    let teams = game.options.friendly_colors;
    for (let i in window) try {
        let pro = window[i].prototype;
        if ("function" != typeof pro.setUIComponent || "function" != typeof pro.set) continue;
        let oldset = "function" == typeof pro.set.old ? pro.set.old : pro.set;
        pro.set = function () {
          let opts = arguments[0] = Object.assign({}, arguments[0]);
          delete this.custom.__ghost_team_index__;
          if (opts.team == "ghost") {
            let digits = 10, tries = 1, team_ids = this.game.ships.map(ship => {
              if (!(ship instanceof pro.constructor)) return null;
              if (ship.custom.__ghost_team_index__ == null) return ship.team;
              return ship.custom.__ghost_team_index__
            });
            while (true) {
              if (tries >= teams * digits) {
                digits *= 10;
                tries = 1;
              }
              if (tries % 10 == 0) {
                ++tries;
                continue
              }
              let val = tries / digits;
              if (!team_ids.includes(val)) {
                this.custom.__ghost_team_index__ = val;
                opts.team = val;
                break
              }
              ++tries;
            }
          }
          return this.set.old.apply(this, arguments)
        }
        pro.set.old = oldset;
        break
    } catch (e) {}
  }
  let tick = this.tick;

  this.tick = function() {
    try { game.options.friendly_colors > 0 && __init__.apply(this, arguments) } catch(e){}
    this.tick = tick;
    return typeof tick == "function" && tick.apply(this, arguments)
  }
}).call(this);
