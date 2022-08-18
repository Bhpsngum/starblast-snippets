return model =
  name: 'connect-structure-1'
  size: 0.5
  id: 'st4'
  rotate: true
  tori: main:
    radius: 100
    segments: 20
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [20]
    height: [10]
    texture: [if (e - 2) % 5 == 0 then 10 else 1] for e in [0..20]
  bodies:
    bumpers:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 97
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-55,-30,-25,-20,20,25,35,95,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,5,20,20,20,20,5,2,0]
      height: [0,12,5,30,30,30,30,5,2,0]
      texture: [4,4,1,4,10,4,1,1,1]
    bumpers2:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 0
        z: 97
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-55,-30,-25,-20,20,25,35,95,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,5,30,30,30,30,5,2,0]
      height: [0,12,5,20,20,20,20,5,2,0]
      texture: [4,4,1,4,9.97,4,1,1,1]
    bumpers3:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 0
        z: -97
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-55,-30,-25,-20,20,25,35,95,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,5,30,30,30,30,5,2,0]
      height: [0,12,5,20,20,20,20,5,2,0]
      texture: [4,4,1,4,9.97,4,1,1,1]
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-110,-100,-65,-60,-52,-48,48,52,60,65,110,120]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,40,40,40,40,40,40,12,12,0]
      height: [0,20,20,40,40,40,40,40,40,12,12,0]
      texture: [6,15,18,2,17,1,17,2,11.2,4,6]
    center:
      section_segments: 15
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-50,-45,45,50]
        z: [0,0,0,0]
      width: [40,50,50,40]
      height: [40,50,50,40]
      texture: [4,11,4]
    center1:
      section_segments: 15
      offset:
        x: 0
        y: 22
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-3,3,5]
        z: [0,0,0,0]
      width: [40,52,52,40]
      height: [40,52,52,40]
      texture: [4]
    center2:
      section_segments: 15
      offset:
        x: 0
        y: -22
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-3,3,5]
        z: [0,0,0,0]
      width: [40,52,52,40]
      height: [40,52,52,40]
      texture: [4]
    center3:
      section_segments: 15
      offset:
        x: 0
        y: 5
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-2,2,5]
        z: [0,0,0,0]
      width: [40,52,52,40]
      height: [40,52,52,40]
      texture: [2]
    center4:
      section_segments: 15
      offset:
        x: 0
        y: -5
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-2,2,5]
        z: [0,0,0,0]
      width: [40,52,52,40]
      height: [40,52,52,40]
      texture: [2]
    center5:
      section_segments: 16
      offset:
        x: 0
        y: 41
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-4,4,5]
        z: [0,0,0,0]
      width: [40,52,52,40]
      height: [40,52,52,40]
      texture: [3,8,3]
    center6:
      section_segments: 16
      offset:
        x: 0
        y: -80
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-4,4,5]
        z: [0,0,0,0]
      width: [0,22,22,0]
      height: [0,22,22,0]
      texture: [3,8,3]
    observe:
      section_segments: 12
      offset:
        x: 0
        y: 65
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-11,-10,0,0,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,23,26.5,28,29]
      height: [0,23,26.5,28,29]
      texture: [7,7,2,2]
      propeller: false
      angle:180
    observe2:
      section_segments: 6
      offset:
        x: 0
        y: 65
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-12,-11.5,0]
        z: [0,0,0,0,0,0]
      width: [20,20,23,27]
      height: [20,20,23,27]
      texture: [1.9]
      propeller: false
      angle:180
    Glasses1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 39
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,12,10,10,0,]
      height: [0,25,25,23,23,0]
      vertical: 1
      angle: 0
      texture: [11,4,1,17,7]
    Glasses2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 39
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,12,10,10,0,]
      height: [0,25,25,23,23,0]
      vertical: 1
      angle: 90
      texture: [11,4,1,17,7]
    Glasses3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -39
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,15,15,14,14]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,12,10,10,0,]
      height: [0,25,25,23,23,0]
      vertical: 1
      angle: 180
      texture: [11,4,1,17,7]
    Glassesring1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,100,100,112,112,110,110]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 25.7
      texture: [4,4,4,1,17,7]
    Glassesring2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,100,100,112,112,110,110]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 63.5
      texture: [4,4,4,1,17,7]
    Glassesring3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,100,100,112,112,110,110]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 117.5
      texture: [4,4,4,1,17,7]
    Glassesring4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,100,100,112,112,110,110]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 153.5
      texture: [4,4,4,1,17,7]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 22
        z: 66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 90
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 22
        y: 0
        z: 66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 0
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -22
        z: 66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 90
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 16
        y: -16
        z: 66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 45
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 16
        y: 16
        z: 66
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 135
      vertical:1
  wings:
    topjoin:
      offset:
        x: 0
        y: -0
        z: 0
      doubleside: true
      length: [0,100,0]
      width: [0,20,20,0]
      angle: [45,45,45]
      position: [0,0,0,0]
      texture: 1
      bump:
        position: 0
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -0
        z: 0
      doubleside: true
      length: [0,100,0]
      width: [0,20,20,0]
      angle: [-45,-45,-45]
      position: [0,0,0,0]
      texture: 1
      bump:
        position: 0
        size: 30