model =
  name: 'Space Mine'
  level: 1
  model: 1
  size: 0.7
  specs:
    shield:
      capacity: [30, 30]
      reload: [1e-30, 1e-30] # no shield regen
    generator: # no generator
      capacity: [1e-30, 1e-30]
      reload: [1e-30, 1e-30]
    ship:
      mass: 100
      speed: [1e-30, 1e-30] # no speed
      rotation: [200, 200]
      acceleration: [1e30, 1e30] # initial maximum speed
  bodies: main:
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0]
      y: 80 * -Math.cos(i / 6 * Math.PI) for i in [0..10]
      z: [0, 0, 0, 0, 0, 0, 0, 0]
    width: 80 * Math.sin(i / 6 * Math.PI) for i in [0..10]
    height: 80 * Math.sin(i / 6 * Math.PI) for i in [0..10]
    propeller: false
    texture: [1, 1, 63, 63, 1]

for i in [0..2]
  model.bodies['peak' + i] =
    angle: 30 + 60 * i
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-115, -110, -100, -90, 90, 100, 110, 115]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0, 10, 10, 20, 20, 10, 10, 0]
    height: [0, 10, 10, 20, 20, 10, 10, 0]
    propeller: false
    texture: [4, 1, 17, 4, 17, 1, 4]

for i in [0..1]
  model.bodies['vert' + i] =
    vertical: true
    angle: 60 * i - 30
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-115, -110, -100, -90, 90, 100, 110, 115]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0, 10, 10, 20, 20, 10, 10, 0]
    height: [0, 10, 10, 20, 20, 10, 10, 0]
    propeller: false
    texture: [4, 1, 17, 4, 17, 1, 4]

return model
