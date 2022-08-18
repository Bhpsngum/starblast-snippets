return model =
  name: 'deposit-1'
  id: 'd1'
  size: 0.5
  tori:
    main:
      radius: 110
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -45
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [10]
      height: [10]
      texture: [2, 1, 10, 11, 11, 10, 1, 2, 12, 1, 11, 10, 10, 11,1,12]
    main2:
      radius: 110
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -65
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [10]
      height: [10]
      texture: [18, 2,4, 13, 13, 4, 2, 18, 2, 8, 2, 13, 13, 2, 8,2]
  bodies:
    hook:
      section_segments: 16
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0]
        y: [-130, -120, -85]
        z: [0, 0, 0]
      width: [0, 15, 16]
      height: [0, 15, 16]
      texture: [6, 12]
    deposit:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-90,-80,-50,-45,-15,-10,70,85,95,95,80,-10,-15]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,75,80,80,90,90,80,80,80,75,70,70,70,70]
      height: [0,35,40,40,45,45,40,40,40,35,30,30,30,0]
      texture: [1,4,17.955,2,13,2,3,2,63,17,12,17.95,5]
    sidewalls:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 65
        y: 75
        z: -17
      position:
        x: [-5,2,2,0,0,0,-7,-7]
        y: [-110,-80,-35,-30,-20,5,45,45]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,18,18,15,15,15,5,0]
      height: [10,15,15,15,15,15,10,0]
      angle: [0]
      propeller: false
      texture: [1,11,3,13,4,4,4]
    sidewalls2:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 65
        y: 75
        z: 17
      position:
        x: [-5,2,2,0,0,0,-7,-7]
        y: [-110,-80,-35,-30,-20,5,45,45]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,18,18,15,15,15,5,0]
      height: [10,15,15,15,15,15,10,0]
      angle: [0]
      propeller: false
      texture: [1,11,3,13,4,4,4]
    antenna:
      vertical: true
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 100
        z: -30
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
        y: [-70,-50, -45, -20, -15, 25, 30, 70, 80]
        z: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0]
      width: [50,45, 30, 25, 12, 7, 3, 2, 0]
      height: [55,50, 40, 35, 22, 12, 3, 2, 0]
      texture: [3,2,13, 18, 18, 63, 1]
    antenna2:
      vertical: true
      angle:180
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: -100
        z: -30
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
        y: [-70,-50, -45, -20, -15, 25, 30, 70, 80]
        z: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0]
      width: [50,45, 30, 25, 12, 7, 3, 2, 0]
      height: [55,50, 40, 35, 22, 12, 3, 2, 0]
      texture: [3,2,13, 18, 18, 63, 1]
    bumpers2:
      vertical:1
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 120
        z: 55
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-30,-20,5,10,15,35,38,87,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [17,17,20,25,20,20,13,8,3,1,0]
      height: [0,27,30,35,30,30,23,18,3,1,0]
      texture: [13,17,4,11,4,2,13,4,1]
    bumpers3:
      vertical:1
      angle:180
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: -120
        z: 55
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-30,-20,5,10,15,35,38,87,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [17,17,20,25,20,20,13,8,3,1,0]
      height: [0,27,30,35,30,30,23,18,3,1,0]
      texture: [13,17,4,11,4,2,13,4,1]
    detail1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 35
        y: -35
        z: -65
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 0
      texture: [13.418,2,4,4,3,1,17]
    detail2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 35
        y: 35
        z: -65
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 180
      texture: [13.418,2,4,4,3,1,17]
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 45
        y: 0
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [10,45,50,50,47,47]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [55,33,30,28,28,0]
      vertical: 1
      angle: 90
      texture: [4,2,2,4,17]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 70
        y: 0
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 2 ]
      angle: 0
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 35
        y: 39
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 4 ]
      angle: 90
      vertical:1
    D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 35
        y: -39
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 4 ]
      angle: 90
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 45
        z: -0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [22,25,25,22,22]
      height: [42,45,45,42,42]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: -45
        z: -0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [22,25,25,22,22]
      height: [42,45,45,42,42]
      texture: [ 2 ]
      angle: 90
      vertical:1
    D6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 20
        y: 0
        z: 85
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [42,45,45,42,42]
      height: [17,20,20,17,17]
      texture: [ 3 ]
      angle: 0
      vertical:1
  wings:
    sidejoin:
      offset:
        x: 50
        y: -50
        z: 20
      doubleside: true
      length: [0,55,0]
      width: [0,50,20,0]
      angle: [40,40,40]
      position: [0,0,-0,-0]
      texture: [63]
      bump:
        position: 10
        size: 30
    sidejoin2:
      offset:
        x: 50
        y: -50
        z: -20
      doubleside: true
      length: [0,55,0]
      width: [0,50,20,0]
      angle: [-40,-40,-40]
      position: [0,0,-0,-0]
      texture: [63]
      bump:
        position: 10
        size: 30