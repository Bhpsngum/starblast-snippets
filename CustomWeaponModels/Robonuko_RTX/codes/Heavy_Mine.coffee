model =
  name: 'Heavy Mine'
  size: 1.05
  bodies: main:
    section_segments: 16
    angle:90
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0]
      y: 80 * -Math.cos(i / 11 * Math.PI) for i in [0..12]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
    width: 80 * Math.sin(i / 11 * Math.PI) for i in [0..12]
    height: 80 * Math.sin(i / 11 * Math.PI) for i in [0..12]
    propeller: false
    texture: [4,11,1, 63, 3 ,13, 3, 63, 1,11,4]

for i in [0..1]
  model.bodies['peak' + i] =
    angle: 40 + 100 * i
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0]
      y: [-105,-105,-100,-95,-90,0,90,95,100,105,105]
      z: [0,0,0,0,0,0,0,0,0,0,0]
    width: [0,12,14,14,20,25,20,14,14,12,0]
    height: [0,12,14,14,20,25,20,14,14,12,0]
    propeller: false
    texture: [18,3,4,17,4,4,17,4,3,18]

for i in [0..1]
  model.bodies['vert' + i] =
    vertical: true
    angle: 40 + 100 * i
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0]
      y: [-105,-105,-100,-95,-90,0,90,95,100,105,105]
      z: [0,0,0,0,0,0,0,0,0,0,0]
    width: [0,12,14,14,20,25,20,14,14,12,0]
    height: [0,12,14,14,20,25,20,14,14,12,0]
    propeller: false
    texture: [18,3,4,17,4,4,17,4,3,18]

  model.bodies['sides' + i] =
    vertical: false
    angle: 90 
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [-100,-105,-95,-94,-91,-90,0,90,91,94,95,105,100]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,12,25,17,17,25,25,25,17,17,25,12,0]
    height: [0,12,25,17,17,25,25,25,17,17,25,12,0]
    propeller: false
    texture: [17,18,17,13,17,4,4,17,13,17,18,17]

  model.bodies['ring' + i] =
    vertical: true
    angle: 90 
    section_segments: 16
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [0, -15, -11, -3, 3, 11, 15, -0]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [100, 100, 108, 110, 110, 108, 100, 100]
    height: [100, 100, 108, 110, 110, 108, 100, 100]
    propeller: false
    texture: [17, 4, 63, 17, 63, 4, 17]

  model.bodies['ring2' + i] =
    vertical: false
    angle: 30
    section_segments: 16
    offset:
      x: 0.1
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [3, -3, -3, 3, 3]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [124, 124, 125, 125, 124]
    height: [124, 124, 125, 125, 124]
    propeller: false
    texture: [17]

  model.bodies['ring3' + i] =
    vertical: true
    angle: 30
    section_segments: 16
    offset:
      x:0.1
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [3, -3, -3, 3, 3]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [124, 124, 125, 125, 124]
    height: [124, 124, 125, 125, 124]
    propeller: false
    texture: [17]

return model