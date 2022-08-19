return model =
  name: 'Torpedo'
  size: 1.5
  bodies: main:
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-100, -80, -75, 60, 80, 110, 100]
    width: [0, 16, 20, 20, 10, 10, 0]
    height: [0, 16, 20, 20, 10, 10, 0]
    propeller: true
    texture: [16.85, 63, 63, 3.85, 63, 16.85]
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
      texture: [3]
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
      texture: [3]