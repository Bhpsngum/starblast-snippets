return model =
  name: 'Missle'
  size: 1.05
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-96,-85,-80,-60,-45,-35,-30,-5,0,25,28,40,45,50,65,70,75,90,100,100,85]
      width: [0,8,19,23,29,30,30,24,22,27,23,20,20,22,20,20,22,20,20,20,18,0]
      height: [0,8,19,23,29,30,30,24,22,27,23,20,20,22,20,20,22,20,20,20,18,0]
      propeller: true
      texture: [17,13,63,10,3,4,63,17,63,8,63,18,63,4,13,63,4,3,2,17]
    support:
      section_segments: 8
      offset:
        x: 26
        y: -40
        z: 0
      position:
        x: [0,0,0,-5,-9]
        y: [-20,-10,5,10,40]
        z: [0,0,0,0,0,0,0]
      width: [3,7,8,8,8]
      height: [3,6,7,5,6]
      texture: [2,3,4,4]
    support2:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 26
      position:
        x: [0,0,0,-0,0]
        y: [-20,-10,5,10,40]
        z: [0,0,0,-5,-9,0,0]
      width: [3,6,7,5,6]
      height: [3,7,8,8,8]
      texture: [2,3,4,4]
    support3:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: -26
      position:
        x: [0,0,0,-0,0]
        y: [-20,-10,5,10,40]
        z: [0,0,0,5,9,0,0]
      width: [3,6,7,5,6]
      height: [3,7,8,8,8]
      texture: [2,3,4,4]
   wings:
     main1:
      length: [25,25]
      width: [50,40,25]
      angle: [45,45]
      position: [0,0,20]
      doubleside: true
      offset:
        x: 0
        y: 70
        z: 0
      bump:
        position: 30
        size: 5
      texture: [4,2]
     main2:
      length: [25,25]
      width: [50,40,25]
      angle: [-45,-45]
      position: [0,0,20]
      doubleside: true
      offset:
        x: 0
        y: 70
        z: 0
      bump:
        position: 30
        size: 5
      texture: [4,2]
     main3:
      length: [15,20]
      width: [40,50,5]
      angle: [0,0]
      position: [0,0,30]
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      bump:
        position: 30
        size: 7
      texture: [63]
     main4:
      length: [15,20]
      width: [40,50,5]
      angle: [90,90]
      position: [0,0,30]
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      bump:
        position: 30
        size: 7
      texture: [63]
     main5:
      length: [15,20]
      width: [40,50,5]
      angle: [-90,-90]
      position: [0,0,30]
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      bump:
        position: 30
        size: 7
      texture: [63]