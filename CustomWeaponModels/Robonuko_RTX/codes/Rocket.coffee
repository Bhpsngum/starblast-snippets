return model =
  name: 'Rocket'
  size: 1
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-64,-45,-40,-30,-25,-5,0,-5,5,10,15,30,35,40,60,72,72,60]
      width: [0,6,14,16,20,22,20,19,16,15,18,15,14,17,14,13,13,12,0]
      height: [0,6,14,16,20,22,20,19,16,15,18,15,14,17,14,13,13,12,0]
      propeller: true
      texture: [17,13,63,3,4,11,63,13,17,63,4,12,63,4,10,12,17]
    detail1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: -22
        z: 0
      position:
        x: [-7,-7,-4,0,-3]
        y: [-20,-20,-10,5,13]
        z: [0,0,0,0,0]
      width: [0,5,6,8,4]
      height: [0,1,1,1,1]
      texture: [3]
    detail2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -22
        z: 20
      position:
        x: [0,0,0,0,0]
        y: [-20,-20,-10,5,13]
        z: [-7,-7,-4,0,-3]
      width: [0,1,1,1,1]
      height: [0,5,6,8,4]
      texture: [3]
    detail3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -22
        z: -20
      position:
        x: [0,0,0,0,0]
        y: [-20,-20,-10,5,13]
        z: [7,7,4,0,3]
      width: [0,1,1,1,1]
      height: [0,5,6,8,4]
      texture: [3]
   wings:
    main1:
      length: [20,17]
      width: [30,30,15,10]
      angle: [45,45,45]
      position: [0,0,15,15]
      doubleside: true
      offset:
        x: 0
        y: 52
        z: 0
      bump:
        position: 30
        size: 10
      texture: [63,2]
    main2:
      length: [20,17]
      width: [30,30,15,10]
      angle: [-45,-45,-45]
      position: [0,0,15,15]
      doubleside: true
      offset:
        x: 0
        y: 52
        z: -0
      bump:
        position: 30
        size: 10
      texture: [63,2]