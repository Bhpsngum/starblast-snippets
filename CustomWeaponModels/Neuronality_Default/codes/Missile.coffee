return model =
  name: 'Missile'
  size: 1
  bodies: main:
    section_segments: 10
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-100, -85, -60, -45, -40, -5, 0, 25, 90, 100, 90]
    width: [0, 20, 30, 30, 24, 22, 26, 20, 20, 20, 0]
    height: [0, 20, 30, 30, 24, 22, 26, 20, 20, 20, 0]
    propeller: true
    texture: [13, 63, 3, 4, 10, 4, 63, 4, 3, 17]
  wings:
    main1:
      length: [25, 25]
      width: [60, 40, 30]
      angle: [45, 45]
      position: [0, 0, 20]
      doubleside: true
      offset:
        x: 0
        y: 60
        z: 0
      bump:
        position: 30
        size: 15
      texture: [0]
    main2:
      length: [25, 25]
      width: [60, 40, 30]
      angle: [-45, -45]
      position: [0, 0, 20]
      doubleside: true
      offset:
        x: 0
        y: 60
        z: 0
      bump:
        position: 30
        size: 15
      texture: [0]
