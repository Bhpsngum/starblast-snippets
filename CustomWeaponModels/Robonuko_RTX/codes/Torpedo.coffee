return model =
  name: 'Torpedo'
  size: 1.5
  bodies: 
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0]
        y: [-91,-89,-87, -80, -70, -45,-40,-38,-20,-15,5,8,26,30,35,60,80,110,110,100]
      width: [0,6,10,16,18,18,18,15,15,17,17,15,15,20,20,20,13,13,12,0]
      height: [0,6,10,16,18,18,18,15,15,17,17,15,15,20,20,20,13,13,12,0]
      propeller: true
      texture: [17,13,10,63,11,63,2,17,63,13,63,17,3,63,4,18,13,17]
    frame:
      section_segments: 6
      offset:
        x: 15
        y: -90
        z: 0
      position:
        x: [-1, -1, -0, -0, -1, -1, -0, 0, 0, 0, 0]
        y: [25, 70, 75, 95, 100, 120, 125]
        z: [0, 0, 0, 0, 0, -0, -0, 0, 0, 0, 0]
      width: [4, 4, 4, 4, 4, 4, 0,]
      height: [4, 4, 4, 4, 4, 4, 0,]
      propeller:  0
      texture: [1, 2, 63, 3,4]
    frame2:
      section_segments: 6
      offset:
        x: 0
        y: -90
        z: 15
      position:
        x: [0, 0, 0, 0, 0, -0, -0, 0, 0, 0, 0]
        y: [25, 70, 75, 95, 100, 120, 125]
        z: [-1, -1, -0, 0, -1, -1, -0, 0, 0, 0, 0]
      width: [4, 4, 4, 4, 4, 4, 0,]
      height: [4, 4, 4, 4, 4, 4, 0,]
      propeller:  0
      texture: [1, 2, 63, 3,4]
    frame3:
      section_segments: 6
      offset:
        x: 0
        y: -90
        z: -15
      position:
        x: [0, 0, 0, 0, 0, -0, -0, 0, 0, 0, 0]
        y: [25, 70, 75, 95, 100, 120, 125]
        z: [1, 1, -0, 0, 1, 1, -0, 0, 0, 0, 0]
      width: [4, 4, 4, 4, 4, 4, 0,]
      height: [4, 4, 4, 4, 4, 4, 0,]
      propeller:  0
      texture: [1, 2, 63, 3,4]
    ring:
      section_segments: 16
      offset:
        x: 0
        y: 97
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-3,-7,-7,-5,3,8,8,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [20,20,24,26,27,28,27,26,20]
      height: [20,20,24,26,27,28,27,26,20]
      texture: [17,17,63,63,8,63,63,17]
      propeller: false
    gun:
      section_segments: 8
      offset:
        x: 0
        y: -80
        z: -0
      position:
        x: [17,17,17,17,17,17,17]
        y: [-23,-20,-15,11,13,31,35]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1.2,1.5,3,3,0]
      height: [0,1,1.2,1.5,3,3,0]
      texture: [17,63,1,63,4]
  wings:
    main1:
      length: [10, 15,10]
      width: [5, 40, 13,10,0]
      angle: [0, 0,0,0]
      position: [0, 0, 13,13]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 0
      bump:
        position: 30
        size: 20
      texture: [2,2,17]
    main2:
      length: [10, 15,10]
      width: [5, 40, 13,10,0]
      angle: [90, 90,90,90]
      position: [0, 0, 13,13]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 0
      bump:
        position: 30
        size: 20
      texture: [2,2,17]
    main3:
      length: [10, 15,10]
      width: [5, 40, 13,10,0]
      angle: [-90, -90,-90,-90]
      position: [0, 0, 13,13]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 0
      bump:
        position: 30
        size: 20
      texture: [2,2,17]
    back1:
      length: [10, 15]
      width: [5, 20, 15]
      angle: [-45, -45]
      position: [0, -5, 3]
      doubleside: true
      offset:
        x: 0
        y: 95
        z: 0
      bump:
        position: 30
        size: 10
      texture: [63]
    back2:
      length: [10, 15]
      width: [5, 20, 15]
      angle: [45, 45]
      position: [0, -5, 3]
      doubleside: true
      offset:
        x: 0
        y: 95
        z: 0
      bump:
        position: 30
        size: 10
      texture: [63]