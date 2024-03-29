return model =
  name: 'joint-4-structure',
  size: 0.5
  id: 'st1'
  tori:
    main:
      radius: 90
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
      width: [25]
      height: [12]
      texture: [if (s - 2) % 5 == 0 then 10 else i] for s in [0..20]
  bodies:
    main:
      angle: [0]
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-135,-125,-85,-85,-70,-60,-50,-40,40,50,60,70,85,85,125,135]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width:  [0,16,16,25,35,35,40,40,40,40,35,35,25,12,12,0]
      height: [0,16,16,25,35,35,40,40,40,40,35,35,25,12,12,0]
      texture: [6,12,4,2,12,8,2,11,2,8,12,2,4,12,6]
    main2:
      angle: [90]
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-135,-125,-85,-85,-70,-60,-50,-40,40,50,60,70,85,85,125,135]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width:  [0,16,16,20,27,27,33,33,33,33,27,27,20,12,12,0]
      height: [0,16,16,20,27,27,33,33,33,33,27,27,20,12,12,0]
      texture: [6,12,4,3,13,10,3,4,3,10,13,3,4,12,6]
    bumpers:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 90
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-45,-30,-25,-20,20,25,35,45,80]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12,5,20,20,20,20,5,12,0]
      height: [0,12,5,30,30,30,30,5,12,0]
      texture: [4,4,1,4,10,4,1,4]
    bumpers2:
      vertical:1
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 105
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-30,-20,5,10,15,35,38,87,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [17,17,20,25,20,20,13,8,3,1,0]
      height: [0,27,30,35,30,30,23,18,3,1,0]
      texture: [13,17,4,11,4,2,13,4,1]
    bumpers3:
      vertical:1
      angle:180
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: -105
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-30,-20,5,10,15,35,38,87,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [17,17,20,25,20,20,13,8,3,1,0]
      height: [0,27,30,35,30,30,23,18,3,1,0]
      texture: [13,17,4,11,4,2,13,4,1]
    Glassesring1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,90,90,105,105,103,103]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 27
      texture: [4,4,4,1,17,7]
    Glassesring2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,90,90,105,105,103,103]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 63
      texture: [4,4,4,1,17,7]
    Glassesring3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,90,90,105,105,103,103]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 117
      texture: [4,4,4,1,17,7]
    Glassesring4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,90,90,105,105,103,103]
        z: [0,0,0,0,0,0,0,0]
      width: [0,0,12,12,10,10,0,]
      height: [0,0,18,18,15,15,0]
      vertical: 1
      angle: 153
      texture: [4,4,4,1,17,7]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 12
        z: 90
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
        x: 12
        y: 0
        z: 90
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
        y: -12
        z: 90
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
        x: 9
        y: -9
        z: 90
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
        x: 9
        y: 9
        z: 90
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
        y: 12
        z: -90
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
        x: 12
        y: 0
        z: -90
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
        y: -12
        z: -90
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
        x: 9
        y: -9
        z: -90
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
        x: 9
        y: 9
        z: -90
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,15,15,13,13]
      height: [13,15,15,13,13]
      texture: [ 2 ]
      angle: 135
      vertical:1
    DDD1:
      section_segments: 10
      offset:
        x: 33
        y: 0
        z: -31
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,17,17,13,13]
      height: [13,17,17,13,13]
      texture: [ 4 ]
      angle: 0
      vertical:1
    DDD2:
      section_segments: 10
      offset:
        x: 33
        y: 0
        z: 31
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [13,17,17,13,13]
      height: [13,17,17,13,13]
      texture: [ 4 ]
      angle: 0
      vertical:1
    power1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -3
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,25,46,46,43,43]
        z: [0,0,0,0,0,0,0,0]
      width: [45,45,26,24,19,0]
      height:  [15,15,6,4,4,0]
      vertical: 1
      angle: 0
      texture: [4,3,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 3
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,25,46,46,43,43]
        z: [0,0,0,0,0,0,0,0]
      width: [45,45,26,24,19,0]
      height:  [15,15,6,4,4,0]
      vertical: 1
      angle: 180
      texture: [4,3,2,4,17]