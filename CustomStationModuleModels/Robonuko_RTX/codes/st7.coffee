return model =
  name: 'joint-3-structure'
  size: 0.5
  id: 'st7'
  bodies:
    main:
      angle: [0]
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-120,-100,-85,-75,-50,0,50,60,70,80,95,95,120,130]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width:  [0,16,16,25,25,40,40,40,40,35,35,25,12,12,0]
      height: [0,16,16,25,25,40,40,40,40,35,35,25,12,12,0]
      texture: [6,12,8,2,10,13,11,2,8,12,2,3,12,6]
    angle:
      angle: -90
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-120,-70,-65,-50,-45,-34,34,45,50,60,62]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,15,16,30,30,45,45,45,45,40,40,10]
      height: [0,15,16,30,30,45,45,45,45,40,40,10]
      texture: [6,12,2,10,3,12,1,13,3,8,11]
    connect:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-45,-46,-40,40,46,45]
        z: [0,0,0,0,0,0,0,0]
      width: [0,53,53,53,53,0]
      height: [0,53,53,53,53,0]
      angle: 180
      texture: [4,4,11.18,4,3]
    observe:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [55,65,65,75,76]
        z: [0,0,0,0,0,0,0,0]
      width: [39,38,36.5,33,0]
      height: [39,38,36.5,33,0]
      texture: [2,2,7,7]
      propeller: false
      angle:-90
    observe2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [65,76.5,77,75]
        z: [0,0,0,0,0,0]
      width: [37,33,30,30]
      height: [37,33,30,30]
      texture: [1.9]
      propeller: false
      angle:-90
    center1:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [70,72,78,80,70]
        z: [0,0,0,0,0]
      width: [26,30,30,26,26]
      height: [26,30,30,26,26]
      texture: [1,2,1,4]
      angle:90
    center2:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [85,87,93,95,85]
        z: [0,0,0,0,0]
      width: [26,30,30,26,26]
      height: [26,30,30,26,26]
      texture: [1,2,1,4]
      angle:90
    center3:
      section_segments: 16
      offset:
        x: 30
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7,-5,5,7,-7]
        z: [0,0,0,0,0,0,0]
      width: [40,45,45,45,40]
      height: [55,60,60,55,55]
      texture: [1,8,1,13]
      angle:90
    Glasses1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 30
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,17,17,15,15,0,]
      height: [0,12,12,10,10,0,]
      vertical: 1
      angle: 0
      texture: [11,4,1,17,7]
    Glasses11:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 30
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,17,17,15,15,0,]
      height: [0,12,12,10,10,0,]
      vertical: 1
      angle: 0
      texture: [11,4,1,17,7]
    Glasses2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -30
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,17,17,15,15,0,]
      height: [0,12,12,10,10,0,]
      vertical: 1
      angle: 180
      texture: [11,4,1,17,7]
    Glasses22:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -30
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,17,17,15,15,0,]
      height: [0,12,12,10,10,0,]
      vertical: 1
      angle: 180
      texture: [11,4,1,17,7]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 20
        z: 65
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [23,25,25,23,23]
      height: [23,25,25,23,23]
      texture: [ 3 ]
      angle: 90
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -20
        z: 65
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [23,25,25,23,23]
      height: [23,25,25,23,23]
      texture: [ 3 ]
      angle: 90
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: 0
        z: 65
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [23,25,25,23,23]
      height: [23,25,25,23,23]
      texture: [ 3 ]
      angle: 0
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 14
        y: 14
        z: 65
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [23,25,25,23,23]
      height: [23,25,25,23,23]
      texture: [ 3 ]
      angle: -45
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 14
        y: -14
        z: 65
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [23,25,25,23,23]
      height: [23,25,25,23,23]
      texture: [ 3 ]
      angle: 45
      vertical:1