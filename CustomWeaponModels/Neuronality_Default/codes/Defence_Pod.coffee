return model =
  name: 'Defense Pod'
  size: 1.05
  bodies:
    main:
      section_segments: [35, 55, 125, 145, 215, 235, 305, 325, 395]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0]
        y: [0, 25, 50, 40]
        z: [0, 0, 0, 0, 0]
      width: [50, 50, 20, 0]
      height: [15, 10, 10, 0]
      propeller: false
      texture: [3, 3, 17]
    cannon:
      section_segments: 6
      offset:
        x: 40
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-25, -20, 0, 0, 20, 30, 35]
        z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      width: [0, 10, 15, 10, 7, 6, 0]
      height: [0, 10, 15, 18, 15, 10, 0]
      propeller: false
      texture: [4, 63, 1, 1, 1, 4]
  wings: main:
    length: [60, 20]
    width: [40, 35, 25]
    angle: [0, 0, 0]
    position: [0, 10, 20]
    doubleside: true
    offset:
      x: 0
      y: 0
      z: 0
    bump:
      position: 0
      size: 80
    texture: [1, 63]
