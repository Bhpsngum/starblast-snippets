return model =
  name: 'Attack Pod'
  size: 1.05
  bodies:
    main:
      section_segments: [35,55,125,145,215,235,305,325,395]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,0,25,50,50,46]
        z: [0,0,0,0,0,0,0]
      width: [0,22,35,35,20,18,0]
      height: [0,5,20,20,15,13,0]
      propeller: false
      texture: [1,18.15,4,3,2,17]
    side:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 33
        y: 7
        z: 0
      position:
        x: [0,-0,0,0,0,0,0,0,0,0,0,0]
        y: [-36,-40,-40,-30,-15,-8,0,25,40,40,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [7,7,8,9,10,10,12,12,8,7,0]
      height: [0,4,5,10,10,10,15,15,5,4,0]
      propeller: false
      texture: [13,4,3,11.15,2,4,10.42,4,4,17]
    sidcoonect:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 30
        y: 9
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-0,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,40,40,0]
      height: [0,5,6,0]
      propeller: false
      texture: [63]
      angle: 90
    top:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 10
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-45,-20,0,30,35,30]
        z: [0,0,1,5,0,0,0,0,0]
      width: [7,8,15,20,12,10,10]
      height: [0,9,17,18,15,13,0]
      propeller: false
      texture: [13,3,2,63,4,13]
    eyecam:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 10
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-10,-0]
        z: [0,0,4,2,0,0,0,0,0]
      width: [0,6,11,8]
      height: [0,9,16,15]
      propeller: false
      texture: [17,17,63]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-60,-75,-75,-70,-50,-48,-30,-20,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,9,10,12,9,15,20,15]
      height: [0,8,9,10,12,9,15,15,15]
      propeller: false
      texture: [17,17,63,13,4,3,4,4]
    detail:
      section_segments: 8
      offset:
        x: 16
        y: -40
        z: -0
      position:
        x: [-10,0,0,0]
        y: [-30,-10,10,10]
        z: [0,0,0,0]
      width: [2,2,2,2]
      height: [2,2,2,2]
      texture: [17]
    detail2:
      section_segments: 6
      offset:
        x: 15
        y: 14
        z: 13
      position:
        x: [0,0,0,0]
        y: [-3,-3,3,3]
        z: [0,0,0,0]
      width: [18,20,20,18]
      height: [5,7,7,5]
      texture: [17]
    detail3:
      section_segments: 6
      offset:
        x: 15
        y: 25
        z: 13
      position:
        x: [0,0,0,0]
        y: [-3,-3,3,3]
        z: [0,0,0,0]
      width: [18,20,20,18]
      height: [5,7,7,5]
      texture: [17]
   wings: 
     I000l:    
      length: [30]
      width: [50,20]
      angle: [20,0]
      position: [0,25]
      doubleside: true      
      texture: [63]
      offset:
        x: 35
        y: 7
        z: -0
      bump:
        position: 30
        size: 10
     bottom:    
      length: [18]
      width: [50,15]
      angle: [-20,0]
      position: [0,30]
      doubleside: true      
      texture: [13]
      offset:
        x: 35
        y: 7
        z: -0
      bump:
        position: 30
        size: 10
     top:    
      length: [0,40]
      width: [50,75,0]
      angle: [90,90]
      position: [0,-20,45]
      doubleside: true      
      texture: [63]
      offset:
        x: 0
        y: 7
        z: -0
      bump:
        position: 55
        size: 20