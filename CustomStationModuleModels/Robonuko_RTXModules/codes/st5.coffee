s = new SeedRandomizer(seed)

e = 1 + s.nextInt(4)

return model =
  name: 'end-structure-1'
  size: 0.5
  id: 'st5'
  rotate: true
  tori: main:
    radius: 95
    segments: 20
    section_segments: 8
    offset:
      x: 0
      y: -10
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [20]
    height: [10]
    texture: [if (i - 2) % 5 == 0 then 10 else e] for i in [0..42]
  bodies:
    main:
     angle: [0]
     section_segments: 12
     offset:
       x: 0
       y: 0
       z: 0
     position:
       x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
       y: [-130,-120,-70,-65,-55,-50,-10,-5,20,35,40,55,57]
       z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     width: [0,15,16,35,35,45,45,40,40,40,33,33,10]
     height: [0,15,16,35,35,45,45,40,40,40,33,33,10]
     texture: [6,12,18,2,4,11,3,1,12,3,8,11]
    observe:
      section_segments: 12
      offset:
        x: 0
        y: 60
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
        y: 60
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
    window1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 90
      texture: [4,4,4,1,17,7]
    window2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 45
      texture: [4,4,4,1,17,7]
    window3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 135
      texture: [4,4,4,1,17,7]
    window4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 0
      texture: [4,4,4,1,17,7]
    window5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,43,43,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 180
      texture: [4,4,4,1,17,7]
    window6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,47,47,45,45]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 45
      texture: [4,4,4,1,17,7]
    window7:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,47,47,45,45]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height:  [0,0,10,10,8,8,0,]
      vertical: 1
      angle: 135
      texture: [4,4,4,1,17,7]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 18
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 18
        y: 0
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 0
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -18
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 12
        y: -12
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 45
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 12
        y: 12
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 135
      vertical:1
    D11:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 27
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D21:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 27
        y: 0
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 0
      vertical:1
    D31:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -27
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D41:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 19
        y: -19
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 45
      vertical:1
    D51:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 19
        y: 19
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 135
      vertical:1
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,45,50,50,46,46]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [25,22,20,19,19,0]
      vertical: 1
      angle: 0
      texture: [4,3,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,45,50,50,46,46]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [25,22,20,19,19,0]
      vertical: 1
      angle: 180
      texture: [4,3,2,4,17]
    power3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,45,50,50,46,46]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [25,22,20,19,19,0]
      vertical: 1
      angle: 90
      texture: [4,3,2,4,17]
    bumpers:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 92
        y: -10
        z: 0
      angle:180
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-55,-30,-25,-20,20,25,35,95,100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,5,20,20,20,20,5,2,0]
      height: [0,12,5,30,30,30,30,5,2,0]
      texture: [4,4,1,4,10,4,1,1,1]
  wings:
    topjoin:
      offset:
        x: 0
        y: -10
        z: 0
      doubleside: true
      length: [0,100,0]
      width: [0,15,15,0]
      angle: [45,45,45]
      position: [0,0,0,0]
      texture: 1
      bump:
        position: 0
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -10
        z: 0
      doubleside: true
      length: [0,100,0]
      width: [0,15,15,0]
      angle: [-45,-45,-45]
      position: [0,0,0,0]
      texture: 1
      bump:
        position: 0
        size: 30