/* Credits to Starblast Developers for this outstanding work */
var lost_sector_aries = {
  id: "lost_sector_aries",
  obj: "https://starblast.io/lost_sector/LostSector_Aries_HardEdges.obj",
  diffuse: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Diffuse.jpg",
  bump: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Height.jpg",
  specular: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Specular.jpg",
  shininess: 10,
  emissiveColor: 0,
  specularColor: 0xFFFFFF,
  transparent: false
}
game.setObject({
  id: "lost_sector_aries",
  type: lost_sector_aries,
  position: {x:75, y:-25, z:-60},
  scale: {x:3, y:3, z:3},
  rotation: {x:0, y:0, z:Math.PI}
});
