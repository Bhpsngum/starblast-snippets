return model =
  name: 'Rocket'
  size: 1
  bodies: main:
    section_segments: 10
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-60, -45, -30, -25, 0, 15, 60, 70, 60]
    width: [0, 15, 20, 20, 16, 20, 20, 15, 0]
    height: [0, 15, 20, 20, 16, 20, 20, 15, 0]
    propeller: true
    texture: [13, 63, 3, 10, 63, 4, 12, 17]
  wings:
    main1:
      length: [35]
      width: [40, 20]
      angle: [45, 45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 0
      bump:
        position: 30
        size: 25
      texture: [0]
    main2:
      length: [35]
      width: [40, 20]
      angle: [-45, -45]
      position: [0, 0, 0]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 0
      bump:
        position: 30
        size: 25
      texture: [0]
