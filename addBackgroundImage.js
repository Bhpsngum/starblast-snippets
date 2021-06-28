// add background images to the scenery
// see examples in line 24

game.addBackgroundImage = function (options) {
  options = options || {}
  var Picture = {
    id: options.id,
    obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
    emissive: options.src,
    diffuse: options.src,
    emissiveColor: options.emissiveColor || 0xFFFFFF,
    shininess: options.shininess || 0,
    transparent: options.transparent || true
  }
  return this.setObject({
    id: options.id, 
    type: Picture,
    position: options.position || {x: 0, y: 0, z: 0},
    scale: options.scale || {x: 1, y: 1, z: 1},
    rotation: options.rotation || {x: Math.PI, y: 0, z: 0}
  })
}

/* example */

game.addBackgroundImage({
  id: "example", // id of the image
  src: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/takagi.jpg", // image source
  emissiveColor: 0xFFFFFF, // image color tone, optional (default White)
  shininess: 0, // image shininess, optional (default 0)
  transparent: true, // image is transparent or not, optional (default true)
  position: {x: 0, y: 0, z: 0}, // image position, optional (default is {x: 0, y: 0, z: 0})
  scale: {x: 1, y: 1, z: 1}, // image scale, optional (default is {x: 1, y: 1, z: 1})
  rotation: {x: Math.PI, y: 0, z: 0} // image rotation, optional (default is {x: Math.PI, y: 0, z: 0})
});

// You can later remove the image by using game.removeObject(<image id>)
