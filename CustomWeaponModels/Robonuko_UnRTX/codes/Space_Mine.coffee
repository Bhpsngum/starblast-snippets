model =
  name: 'Space Mine'
  size: 0.7
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
      y: [-120, -80, 0, 80,120]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,10,60,10,0]
    height: [0,10,60,10,0]
    propeller: false
    texture: [ 17, 4,4, 17]

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
      y: [-120, -80, 0, 80,120]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0,10,60,10,0]
    height: [0,10,60,10,0]
    propeller: false
    texture: [ 17, 4,4, 17]

return model