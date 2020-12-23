/* Don't touch this! */
var manageAliens = function(game)
{
  if (!game._init)
  {
    game._init = true;
    for (let i in game.modding) try {
      if (game.modding[i].modding && i != "game") {
        game.moddingPath = i;
        game.modding[game.moddingPath].modding.game.alienCreated = function(t, e) {
          var i, s, n, r;
          for (r = this.aliens, s = 0, n = r.length; s < n; s++)
          {
            i = r[s];
            if (i.request_id === t)
            {
              i.id = e;
              let id = this.execAliens.indexOf(t);
              if (id != -1)
              {
                i.set({kill:true});
                this.execAliens.splice(id,1);
              }
            }
          }
        }
      }
    }
    catch(e){game._init = false}
  }
}
game.execAliens = [];
game.addCrystal = function(data)
{
  data = data || {};
  this.execAliens.push(game.modding[game.moddingPath].request_id);
  let crystal = {x:data.x||0, y:data.y||0, value: data.value||0,
    toString: function(){return "Crystal:"+JSON.stringify(this)}
  };
  this.addAlien({code:13,x:crystal.x,y:crystal.y,crystal_drop:crystal.value});
  return crystal;
}

/* Do mod stuffs below, don't remove anything in this.tick, just add */

/* RESTRICTIONS - Do not use the values/variables/components listing below in their particular contexts:
Global Scope Variables:
  manageAliens

Game properties:
  game.execAliens
  game.moddingPath

*/

this.options = {
  // see documentation for options reference
  root_mode: "survival",
  map_size: 30
};

this.tick = function(game)
{
  manageAliens(game);
  // do mod stuff here, see documentation
}
