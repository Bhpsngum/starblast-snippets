return model =
  name: 'Attack Pod'
  level: 1
  model: 1
  size: 1.05
  specs:
    shield:
      capacity: [70, 70]
      reload: [1e-30, 1e-30] # no shield regen
    generator:
      capacity: [15, 15]
      reload: [15, 15]
    ship:
      mass: 1e-30 # no mass
      speed: [1e-30, 1e-30] # no speed
      rotation: [1e-30, 1e-30] # no rotation
      acceleration: [1e30, 1e30] # initial maximum speed
  bodies:
    main:
      section_segments: [35, 55, 125, 145, 215, 235, 305, 325, 395]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-50, -50, 0, 25, 50, 40]
        z: [0, 0, 0, 0, 0, 0, 0]
      width: [0, 10, 50, 50, 20, 0]
      height: [0, 5, 20, 15, 15, 0]
      propeller: false
      texture: [1, 1, 4, 3, 17]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-60, -70, -30, 0, 30, 35, 40]
        z: [0, 0, 0, 5, 5, 0, 0, 0, 0]
      width: [0, 10, 15, 10, 15, 10, 0]
      height: [0, 10, 15, 18, 15, 10, 0]
      laser:
        damage: [5, 5]
        rate: 2
        type: 1
        speed: [150, 150]
        number: 1
        error: 0
      propeller: false
      texture: [4, 63, 1, 1, 1, 4]
  wings: main:
    length: [60]
    width: [80, 30]
    angle: [0, 0]
    position: [0, 20]
    doubleside: true
    offset:
      x: 0
      y: 0
      z: -5
    bump:
      position: 30
      size: 20
    texture: [63]
