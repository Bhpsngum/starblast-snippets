a = new SeedRandomizer(seed)

a.nextInt(4)

model =
  name: 'deposit-2'
  id: 'd2'
  size: 0.5
  bodies:
    hook:
      section_segments: 16
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0]
        y: [-130, -120, -55]
        z: [0, 0, 0]
      width: [0, 15, 15]
      height: [0, 15, 15]
      texture: [6, 12]
    deposit:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-90,-90,-80,-55,-50,-25,-20,70,85,95,95,80,-10,-15]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,65,72,72,75,75,80,80,80,75,70,70,70,70]
      height: [0,25,32,32,35,35,40,40,40,35,30,30,30,0]
      texture: [1,4,1,2,4,4,3,2,63,17,12,17.95,5]
    antenna:
      vertical: true
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 105
        z: 5
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0,0]
        y: [-80,-50, -45, -20, -19, 20, 21, 55, 60]
        z: [0, 0, 0, 0, 0, 0, 0, 0,0]
      width: [20,20, 10, 10, 8, 8, 3, 2, 0]
      height: [20,20, 10, 10, 8, 8, 3, 2, 0]
      texture: [3,3, 10, 1, 12, 63, 1]
    antenna2:
      vertical: true
      angle:180
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: -105
        z: 5
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0,0]
        y: [-80,-50, -45, -20, -19, 20, 21, 55, 60]
        z: [0, 0, 0, 0, 0, 0, 0, 0,0]
      width: [20,20, 10, 10, 8, 8, 3, 2, 0]
      height: [20,20, 10, 10, 8, 8, 3, 2, 0]
      texture: [3,3, 10, 1, 12, 63, 1]
    sidewalls:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 62
        y: 75
        z: -15
      position:
        x: [-15,-2,-2,2,2,0,0,0,-7,-7]
        y: [-160,-130,-100,-95,-35,-30,-20,5,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [5,15,15,18,18,15,15,15,5,0]
      height: [0,10,10,13,13,13,13,13,10,0]
      angle: [0]
      propeller: false
      texture: [2,13,1,11,3,13,4,4,4]
    sidewalls2:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 62
        y: 75
        z: 15
      position:
        x: [-15,-2,-2,2,2,0,0,0,-7,-7]
        y: [-160,-130,-100,-95,-35,-30,-20,5,45,45]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [5,15,15,18,18,15,15,15,5,0]
      height: [0,10,10,13,13,13,13,13,10,0]
      angle: [0]
      propeller: false
      texture: [2,13,1,11,3,13,4,4,4]
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 45
        y: 0
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [10,37,42,42,40,40]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [55,40,36,28,28,0]
      vertical: 1
      angle: 90
      texture: [4,2,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 45
        y: 0
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [10,37,42,42,40,40]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [55,40,36,28,28,0]
      vertical: 1
      angle: 90
      texture: [4,2,2,4,17]
    detail1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: -35
        z: -65
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [11,11,13,15,12,10,10,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 0
      texture: [13.418,2,4,4,3,1,17]
    detail2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: 35
        z: -65
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [11,11,13,15,12,10,10,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 180
      texture: [13.418,2,4,4,3,1,17]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: 39
        z: -26
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 4 ]
      angle: 90
      vertical:1
    D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 40
        y: -39
        z: -26
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
        x: 10
        y: 35
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 1 ]
      angle: 90
      vertical:1
    D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 10
        y: 35
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 1 ]
      angle: 90
      vertical:1
    D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 10
        y: -35
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 1 ]
      angle: 90
      vertical:1
    D6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 10
        y: -35
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-4,4,4,-4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [17,20,20,17,17]
      height: [42,45,45,42,42]
      texture: [ 1 ]
      angle: 90
      vertical:1
    D7:
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
    topsolarpanel:
      noshape: true
      doubleside: true
      offset:
        x: 60
        y: 40
        z: 0
      length: [0,25,35,2,15,0]
      width: [0,55,55,55,55,50,0]
      angle: [0,0,0,0,0,0,0,0,0]
      position: [0,0,0,0,0,0,0,0,0]
      texture: [2,2,14,1,11,1]
      bump:
        position: 0
        size: 3
    topsolarpanel2:
      noshape: true
      doubleside: true
      offset:
        x: 60
        y: -30
        z: 0
      length: [0,25,35,2,15,0]
      width: [0,55,55,55,55,50,0]
      angle: [0,0,0,0,0,0,0,0,0]
      position: [0,0,0,0,0,0,0,0,0]
      texture: [2,2,14,1,11,1]
      bump:
        position: 0
        size: 3
        
for i in [0..40] by 20
  for s in [-40..40] by 20
    a.nextInt(50)
    model.bodies['body' + i + s] =
      vertical:1
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
          x: 1 * i - 40
          y: 30 
          z: 1.5 * s - -5
      position:
          x: [0, 0, 0, 0, 0,0,0,0]
          y: [-8, -8, 10, 10,8,8]
          z: [0, 0, 0, 0,0,0,0]
      width: [0, 10, 8, 5,4,0]
      height: [0, 10, 8, 5,4,0]
      texture: [1, (if a.next() < 0.3 then 63 else 1 + a.nextInt(4)),(if a.next() < 0.3 then 63 else 1 + a.nextInt(4)), 12,17]
return model