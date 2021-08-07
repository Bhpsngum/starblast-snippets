var alienCode = 20; // edit alien code here
var dataDirectory = "https://starblast.data.neuronality.com/models/aliens/" + alienCode + "/";
var alienType = {
  id: "Alien_" + alienCode,
  obj: dataDirectory + "model.obj",
  diffuse: dataDirectory + "lambert.jpg",
  specular: dataDirectory + "lambert.jpg",
  emissive: dataDirectory + "emissive.jpg",
  diffuseColor: 0xFFFFFF,
  emissiveColor: 0xFF4010,
  specularColor: 0x404040,
  shininess: 30
}

game.setObject({
  id: "Alien_" + alienCode,
  type: alienType,
  position: {x: 0, y: 0, z: 0},
  rotation: {x: 0, y: 0, z: 0},
  scale: {x: 1, y: 1, z: 1}
});
