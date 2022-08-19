return model =
  name: 'Missile'
  size: 1
  bodies: main:
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-100, -55, -45, -5, 0, 35, 100, 90]
    width: [0, 25, 30, 22, 26, 20, 20, 0]
    height: [0, 25, 30, 22, 26, 20, 20, 0]
    propeller: true
    texture: [16.85, 63, 63, 2.85, 63, 63, 16.85]
  wings:
    main1:
      length: [55]
      width: [50, 30]
      angle: [45]
      position: [0, 20]
      doubleside: true
      offset:
        x: 0
        y: 60
        z: 0
      bump:
        position: 30
        size: 15
      texture: [3]
    main2:
      length: [55]
      width: [50, 30]
      angle: [-45]
      position: [0, 20]
      doubleside: true
      offset:
        x: 0
        y: 60
        z: 0
      bump:
        position: 30
        size: 15
      texture: [3]