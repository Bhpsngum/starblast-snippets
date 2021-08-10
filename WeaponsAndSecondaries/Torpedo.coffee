return model =
  name: 'Torpedo'
  level: 1
  model: 1
  size: 1.5
  specs:
    shield:
      capacity: [300, 300]
      reload: [1e-30, 1e-30] # no shield regen
    generator: # no generator
      capacity: [1e-30, 1e-30]
      reload: [1e-30, 1e-30]
    ship:
      mass: 200
      speed: [140, 140]
      rotation: [20, 20]
      acceleration: [1e30, 1e30] # initial maximum speed
  bodies: main:
    section_segments: 10
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-100, -90, -80, -25, 0, 60, 80, 110, 100]
    width: [0, 15, 20, 20, 20, 20, 10, 10, 0]
    height: [0, 15, 20, 20, 20, 20, 10, 10, 0]
    propeller: true
    texture: [13, 63, 3, 10, 63, 4, 12, 17]
  wings:
    main1:
      length: [10, 25]
      width: [5, 30, 20]
      angle: [45, 45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 95
        z: 0
      bump:
        position: 30
        size: 25
      texture: [0]
    main2:
      length: [10, 25]
      width: [5, 30, 20]
      angle: [-45, -45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 95
        z: 0
      bump:
        position: 30
        size: 25
      texture: [0]
