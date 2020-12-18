var present = {
  id: "gift",
  obj: "https://starblast.data.neuronality.com/models/xmas/gift/model.obj",
  diffuse: "https://starblast.data.neuronality.com/models/xmas/gift/lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/xmas/gift/emissive.jpg",
  specular: "https://starblast.data.neuronality.com/models/xmas/gift/specular.jpg"
};

game.setObject({
  id: "gift",
  type: present,
  position: {x:0,y:0,z:0},
  rotation: {x:3*Math.PI/4,y:0,z:Math.PI/4},
  scale: {x:2,y:2,z:2}
}); 
