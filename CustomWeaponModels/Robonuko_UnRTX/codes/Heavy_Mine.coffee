model =
  name: 'Heavy Mine'
  size: 1.05
  bodies: main:
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: 80 * -Math.cos(i / 2 * Math.PI) for i in [0..2]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: 80 * Math.sin(i / 2 * Math.PI) for i in [0..2]
    height: 80 * Math.sin(i / 2 * Math.PI) for i in [0..2]
    propeller: false
    texture: [63]

for i in [0..1]
  model.bodies['peak' + i] =
    angle: 90 * i
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-130, -75,0, 75, 130]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,10, 30, 10,0]
    height: [0, 10, 30, 10,0]
    propeller: false
    texture: [17, 4,4, 17]

  model.bodies['vert' + i] =
    vertical: true
    angle: 0
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-130, -75,0, 75, 130]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,10, 30, 10,0]
    height: [0, 10, 30, 10,0]
    propeller: false
    texture: [17, 4,4, 17]

for i in [0..1]
  model.bodies['side' + i] =
    angle: 45 + 90 * i
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: -0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-80,  0, 80]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,30,0]
    height: [0,30,0]
    propeller: false
    texture: [3]

for i in [0..1]
  model.bodies['side2' + i] =
    angle: 45 + 90 * i
    vertical:1
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: -0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-80,  0, 80]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,30,0]
    height: [0,30,0]
    propeller: false
    texture: [3]

return model