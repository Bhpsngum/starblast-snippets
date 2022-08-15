return model =
  name: 'joint-2-structure'
  size: 0.5
  id: 'st6'
  bodies:
    main:
      angle: [0]
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-135,-125,-90,-90,-80,-70,-50,10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,16,30,40,40,40,40]
      height: [0,15,16,30,40,40,40,40]
      texture: [6,12,4,2,8,1,13,4]
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
      texture: [6,12,2,10,3,12,11,13,3,8,11]
    connect:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,40,45,45]
        z: [0,0,0,0,0,0,0,0]
      width: [53,53,53,0]
      height:  [55,55,55,0]
      angle: 180
      texture: [11.18,4,3]
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
    Glassesring1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,10,10,8,8,0,]
      height:  [0,0,12,12,10,10,0,]
      angle: 0
      texture: [4,4,4,1,17,7]
    Glassesring2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 25
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,10,10,8,8,0,]
      height:  [0,0,12,12,10,10,0,]
      angle: 0
      texture: [4,4,4,1,17,7]
    Glassesring3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: -60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,10,10,8,8,0,]
      height:  [0,0,12,12,10,10,0,]
      angle: 90
      texture: [4,4,4,1,17,7]
    Glassesring4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      angle: 45
      vertical:1
      texture: [4,4,4,1,17,7]
    Glassesring5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      angle: 135
      vertical:1
      texture: [4,4,4,1,17,7]
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,42,45,45,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [35,30,20,19,19,0]
      height:  [15,10,5,4,4,0]
      vertical: 1
      angle: 0
      texture: [4,3,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,42,45,45,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [35,30,20,19,19,0]
      height:  [15,10,5,4,4,0]
      vertical: 1
      angle: 180
      texture: [4,3,2,4,17]
    center1:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-3,3,5]
        z: [0,0,0,0]
      width: [40,46,46,40]
      height: [40,46,46,40]
      texture: [1,4,1]
      angle:90
    center2:
      section_segments: 12
      offset:
        x: 25
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,-3,3,5]
        z: [0,0,0,0]
      width: [40,46,46,40]
      height: [40,46,46,40]
      texture: [1,4,1]
      angle:90
    center3:
      section_segments: 12
      offset:
        x: 12.5
        y: 3
        z: 0
      position:
        x: [0,0,0,0]
        y: [-3,-2,2,3]
        z: [0,0,0,0]
      width: [40,46,46,40]
      height: [31,36,36,31]
      texture: [1,2,1]
      angle:90
    center4:
      section_segments: 12
      offset:
        x: 37.5
        y: 3
        z: 0
      position:
        x: [0,0,0,0]
        y: [-3,-2,2,3]
        z: [0,0,0,0]
      width: [40,46,46,40]
      height: [31,36,36,31]
      texture: [1,2,1]
      angle:90
    center5:
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
    center6:
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
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 15
        z: 95
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
        x: 0
        y: -15
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 90
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 0
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 0
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 10
        y: 10
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: -45
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 10
        y: -10
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 3 ]
      angle: 45
      vertical:1