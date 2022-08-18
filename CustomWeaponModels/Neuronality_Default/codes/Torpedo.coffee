return model =
  name: 'Torpedo'
  size: 1.5
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
