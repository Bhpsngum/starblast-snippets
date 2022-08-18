return model =
  name: 'Mining Pod'
  size: 1.05
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
    face:
      section_segments: 6
      offset:
        x: 0
        y: -5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-55,-54,-47,-40,30,60,60,55]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,25,35,16,15,0]
      height: [0,10,20,25,35,16,15,0]
      propeller: false
      texture: [3.8,63,2.8,2.8,15,8,16.8]
    face2:
      section_segments: 8
      offset:
        x: 0
        y: -0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-55,-54,-47,-40,-31,-20,-5,10,17,10]
        z: [0,0,5,15,25,30,34,34,35,35]
      width: [0,7,13,16,20,22,23,22,17,0]
      height: [0,10,20,20,20,20,20,20,17,0]
      propeller: false
      texture: [3,4,4,3,2,1,63,2,17]
    eyecam:
      section_segments: 8
      offset:
        x: 0
        y: -2
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-48,-45,-29,-10,-10]
        z: [15,15,28,30,30]
      width: [0,6,11,10,0]
      height: [0,10,18,18,0]
      propeller: false
      texture: [4,17,2]
    face3:
      section_segments: 12
      offset:
        x: 15
        y: 5
        z: 0
      position:
        x: [-6,-6,-2,3,5,5,4,2,0,0]
        y: [-55,-54,-47,-40,-31,-20,-5,10,17,30]
        z: [0,0,-5,-15,-20,-25,-30,-30,-30,-25]
      width: [0,5,10,10,10,10,10,10,10,0]
      height: [0,10,20,20,20,20,20,20,17,0]
      propeller: false
      texture: [63]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: -18
        z: -20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-60,-60,-45,-30,30,40]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,6,9,13,5,0]
      height: [0,5,6,9,13,5,0]
      propeller: false
      texture: [17,17,13,2,1,4]
    detail:
      section_segments: 8
      offset:
        x: 21
        y: -40
        z: -0
      position:
        x: [-19,0,0,0]
        y: [-33,-15,10,10]
        z: [-21,-10,0,0]
      width: [2,2,2,2]
      height: [2,2,2,2]
      texture: [17]
    side:
      section_segments: 12
      offset:
        x: 45
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,6,9,8]
        y: [-20,-27,-27,-10,-5,5,40,45,60,80,75]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,9,10,15,15,15,15,15,8,3,0]
      height: [0,9,10,15,15,15,15,15,13,8,0]
      texture: [17,3,2,63,13,10,2,4,4,17]
      angle:9
    detail2:
      section_segments: 6
      offset:
        x: 15
        y: 0
        z: 36
      position:
        x: [0,0,0,0]
        y: [-3,-3,3,3]
        z: [0,0,0,0]
      width: [18,20,20,18]
      height: [8,10,10,8]
      texture: [17]
    detail3:
      section_segments: 6
      offset:
        x: 12
        y: -10
        z: 36
      position:
        x: [0,0,0,0]
        y: [-3,-3,3,3]
        z: [0,0,0,0]
      width: [18,20,20,18]
      height: [8,10,10,8]
      texture: [17]
  wings:
    main:
      length: [30,13]
      width: [55,35,30]
      angle: [20,20]
      position: [-10,5,20]
      doubleside: true
      offset:
        x: 5
        y: 15
        z: 20
      bump:
        position: 30
        size: 20
      texture: [63]
    main2:
      length: [22,12]
      width: [20,30,15]
      angle: [-30,-30]
      position: [0,5,20]
      doubleside: true
      offset:
        x: 0
        y: 30
        z: -10
      bump:
        position: 30
        size: 20
      texture: [63]
    main3:
      length: [0,23,19]
      width: [0,55,35,30]
      angle: [90,90,90]
      position: [-10,-15,5,20]
      doubleside: true
      offset:
        x: 0
        y: -2
        z: 25
      bump:
        position: 60
        size: 25
      texture: [63]
    wing3:
      length: [20]
      width: [50,30]
      angle: [0,0]
      position: [0,-0]
      doubleside: true
      offset:
        x: 50
        y: -7
        z: 0
      bump:
        position: 30
        size: 30
      texture: [3]