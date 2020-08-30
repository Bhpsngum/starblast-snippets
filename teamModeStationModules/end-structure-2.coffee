return model =
  name: 'end-structure-2'
  size: 0.5
  bodies: main:
    angle: 0
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0]
      y: [-130,-120,-55,-40,40,55]
      z: [0,0,0,0,0,0]
    width: [0,15,16,43,43,0]
    height: [0,15,16,43,43,0]
    texture: [6,12,10,3,10,4,6]
  wings:
    topsolarpanel:
      noshape: true
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      length: [60,60,60,60]
      width: [70,70,65,60,55]
      angle: [90,90,90,90,90]
      position: [0,0,0,0,0]
      texture: [14]
      bump:
        position: 0
        size: 5
    solarpanels:
      noshape: true
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      length: [60,60,60,60]
      width: [70,70,65,60,55]
      angle: [-30,-30,-30,-30,-30]
      position: [0,0,0,0,0]
      texture: [14]
      bump:
        position: 0
        size: 5
