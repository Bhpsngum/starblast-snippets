return model =
  name: 'Rocket'
  size: 1
  bodies: main:
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0,]
      y: [-65, -35, -25, 20, 25, 70, 60]
    width: [0, 15, 20, 14, 18, 11, 0]
    height: [0, 15, 20, 14, 18, 11, 0]
    propeller: true
    texture: [17, 63, 63, 3, 63, 17]
  wings:
    main1:
      length: [35]
      width: [40, 20]
      angle: [45, 45]
      position: [0, 10, 0]
      doubleside: true
      offset:
        x: 0
        y: 45
        z: 0
      bump:
        position: 30
        size: 25
      texture: [3]
    main2:
      length: [35]
      width: [40, 20]
      angle: [-45, -45]
      position: [0, 10, 0]
      doubleside: true
      offset:
        x: 0
        y: 45
        z: 0
      bump:
        position: 30
        size: 25
      texture: [3]