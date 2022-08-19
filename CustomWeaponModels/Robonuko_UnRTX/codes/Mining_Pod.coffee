return model =
  name: 'Mining Pod'
  size: 1.05
  bodies:
    main:
      section_segments: 4
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: 50 * -Math.cos(i / 2 * Math.PI) for i in [0..2]
        z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      width: 50 * Math.sin(i / 2 * Math.PI) for i in [0..2]
      height: 50 * Math.sin(i / 2 * Math.PI) for i in [0..2]
      propeller: false
      texture: [63]
    cannon:
      section_segments: 4
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-70, -45, -30]
        z: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      width: [0, 8, 15]
      height: [0, 8, 15]
      laser:
        damage: [10, 10]
        rate: 1
        type: 1
        speed: [200, 200]
        number: 1
        error: 0
      propeller: false
      texture: [17, 63]