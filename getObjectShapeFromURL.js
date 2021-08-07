this.tick = function (game) {
  // Usage
  // Note that CORS issue could happen if users attempts to load anything out of GitHub and Starblast sites

  game.getObjectShapeFromURL('https://raw.githubusercontent.com/Bhpsngum/img-src/master/Aries.obj').then(function(shape){
    game.modding.terminal.echo(`Object shape: [${shape.toString()}]`)
  }).catch(game.modding.terminal.error);

  // You can also omit `shape` in `obj.type.physics` as it's default modding behaviour
  // see modding docs for more info about that

  var assignation = {
    id: "Aries",
    obj: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/Aries.obj",
    diffuse: "https://raw.githubusercontent.com/mrGoldman1122/starblastGa/master/ship_lambert_texture.png",
    bump: "https://raw.githubusercontent.com/mrGoldman1122/starblastGa/master/ship_lambert_texture.png",
    emissiveColor: 0x80FFFF,
    specularColor: 0x805010,
    diffuseColor:0xFF8080,
    transparent: false,
    physics: {
      mass: 300 // high mass so that ships won't go through the 3D Object
    }
  };
  game.setObject({
    id: "Aries",
    type: assignation,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      x:0,
      y:0,
      z:0,
    },
    scale: {x:9,y:9,z:9}
  });
  // Center spawn so that you can instantly check the physics
  this.tick = function (game) {
    for (let ship of game.ships) {
      if (!ship.custom.init) {
        ship.set({x:0,y:0});
        ship.custom.init = true
      }
    }
  };
}

this.options = {
  starting_ship: 704,
  custom_map: ""
}

/* Encapsuled part, Copy the rest of the code and paste it:
 * At the start of your mod code if you want to use the functions instantly/before mod started
 * At the end of your mod code if you only use it in `this.tick` or/and `this.event`
 */
;(function(){

  var gF = function(f) {
    return typeof f == "function"?f:function(){}
  }

  THREE.OBJLoader.prototype.load = function(t, e, i, s) {
    var l = this,
    n = new THREE.FileLoader(l.manager);
    e = gF(e); i = gF(i); s = gF(s);
    n.setPath(this.path), n.load(t, function(t) {
      let st, r;
      try { r = l.parse(t) } catch (er) { s(new Error("Failed to convert file content to 3D Object")); st = 1 }
      if (!st) e(r)
    }, i, function(er) {
      s(new Error("The URL is invalid or blocked by CORS policy"))
    })
  }

  var shapePoint = function(e, t, i) {
    var s, o, l;
    return l = i.length, s = Math.atan2(t, -e), s = Math.round((s + 2 * Math.PI) / (2 * Math.PI) * l) % l, o = Math.sqrt(e * e + t * t), i[s] = Math.max(i[s], o)
  }

  var getShape = function(obj,e) {
    obj = new THREE.Geometry().fromBufferGeometry(obj.geometry);
    var t, i, s, o, l, n, r, a, h, p, c, d, u, f, g, m, y, x;
    for (null == e && (e = 50), u = [], s = l = 0, p = e - 1; 0 <= p ? l <= p : l >= p; s = 0 <= p ? ++l : --l) u[s] = 0;
    for (c = obj.faces, n = 0, r = c.length; n < r; n++)
    for (i = c[n], f = obj.vertices[i.a], g = obj.vertices[i.b], m = obj.vertices[i.c], s = a = 0; a <= 99; s = a += 1) t = s / 100, y = f.x * t + g.x * (1 - t), x = f.y * t + g.y * (1 - t), shapePoint(y, x, u), y = m.x * t + g.x * (1 - t), x = m.y * t + g.y * (1 - t), shapePoint(y, x, u), y = m.x * t + f.x * (1 - t), x = m.y * t + f.y * (1 - t), shapePoint(y, x, u);
    return u.map(i=>parseFloat(i.toFixed(3)))
  }

  game.getObjectShapeFromURL = function(url) {
    return new Promise(function (resolve, reject) {
      try {
        new THREE.OBJLoader().load(url, function (object) {
          let result, st;
          try { result = getShape(object.children[0]) } catch(e) { reject(new Error("Invalid 3D Object")); st = 1 }
          if (!st) resolve(result)
        },null,reject)
      }
      catch (e) {reject(e)}
    })
  }
})();
