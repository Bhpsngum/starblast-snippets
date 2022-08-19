return model =
  name: 'Attack Pod'
  size: 1.05
  bodies:
    cannon:
      section_segments: 4
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0, 0, 0, 0]
        y: [-80, -50, -20]
        z: [0, 0, 0,0]
      width: [0, 10, 15]
      height: [0, 5, 13]
      laser:
        damage: [5, 5]
        rate: 2
        type: 1
        speed: [150, 150]
        number: 1
        error: 0
      propeller: false
      texture: [17, 1, 3]
  wings: main:
    length: [55,8]
    width: [100, 30,0]
    angle: [0, 0,0]
    position: [-30, 40,40]
    doubleside: true
    offset:
      x: 0
      y: 0
      z: -0
    bump:
      position: 50
      size: 30
    texture: [63]