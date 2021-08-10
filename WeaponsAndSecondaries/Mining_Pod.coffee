return model =
  name: 'Mining Pod'
  level: 1
  model: 1
  size: 1.05
  specs:
    shield:
      capacity: [50, 50]
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
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: 50 * -Math.cos(i / 6 * Math.PI) for i in [0..10]
        z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      width: 50 * Math.sin(i / 6 * Math.PI) for i in [0..10]
      height: 50 * Math.sin(i / 6 * Math.PI) for i in [0..10]
      propeller: false
      texture: [1, 3, 1, 12, 4]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-50, -60, -30, 0, 30, 55, 60]
        z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      width: [0, 10, 15, 10, 15, 10, 0]
      height: [0, 10, 15, 10, 15, 10, 0]
      laser:
        damage: [10, 10]
        rate: 1
        type: 1
        speed: [200, 200]
        number: 1
        error: 0
      propeller: false
      texture: [4, 63, 1, 1, 1, 4]
  wings:
    main:
      length: [50, 10]
      width: [20, 30, 20]
      angle: [45, 45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 30
        z: 0
      bump:
        position: 30
        size: 20
      texture: [63]
    main2:
      length: [50, 10]
      width: [20, 30, 15]
      angle: [-45, -45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 30
        z: 0
      bump:
        position: 30
        size: 20
      texture: [63]
    wing3:
      length: [20]
      width: [50, 30]
      angle: [0, 0]
      position: [0, 0]
      doubleside: true
      offset:
        x: 35
        y: 0
        z: 0
      bump:
        position: 30
        size: 40
      texture: [3]
