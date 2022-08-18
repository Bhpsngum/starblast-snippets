return model =
  name: 'Defense Pod'
  level: 1
  model: 1
  size: 1.05
  specs:
    shield:
      capacity: [75,100]
      reload: [2,3]
    generator:
      capacity: [40,60]
      reload: [10,15]
    ship:
      mass: 60
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    main:
      section_segments: [35,55,125,145,215,235,305,325,395]
      offset:
        x: 0
        y: 5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-35,-35,-38,-5,-0,25,50,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,11,15,20,50,50,20,18,0]
      height: [0,21,25,30,10,10,10,9,0]
      propeller: false
      texture: [17,4,3,2,18,3,17]
    side:
      section_segments: 6
      offset:
        x: 41
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-23,-23,-25,-20,0,0,30,35,35,30]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,9,13,15,10,10,5,4,0]
      height: [0,8,9,15,17,18,15,10,9,0]
      propeller: false
      texture: [16.8,3.8,3.8,63,1,13,63,16.8]
    back:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 35
        z: 0
      position:
        x: [0,0,0,0]
        y: [-30,-10,0,15]
        z: [0,0,0,0]
      width: [35,35,20,15]
      height: [30,30,20,10]
      texture: [4,63,3]
    detail1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 5
        y: -0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [28,30,30,28]
      height: [33,35,35,33]
      texture: [17]
      angle: 90
    detail2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 15
        y: 8
        z: 0
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [13,15,15,13]
      height: [33,35,35,33]
      texture: [17]
      angle: 90
    detail3:
      section_segments: 6
      offset:
        x: 46
        y: 0
        z: -0
      position:
        x: [0,0,0,0]
        y: [-3,-3,3,3]
        z: [0,0,0,0]
      width: [16,20,20,16]
      height: [16,20,20,16]
      texture: [16.8]
      angle: 0
      vertical: 1
    detail4:
      section_segments: 8
      offset:
        x: 30
        y: -30
        z: -0
      position:
        x: [-0,0,-15,-15]
        y: [-20,-10,10,10]
        z: [0,0,0,0]
      width: [2,2,2,2]
      height: [2,2,2,2]
      texture: [17]
      angle: 90
   wings: 
     I000l:
      length: [15,45,32,0]
      width: [45,45,30,15,0]
      angle: [0,0,0,0]
      position: [0,0,10,30,30]  
      texture: [1,11.25,63]
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 0
      bump:
        position: 0
        size: 80
     amog:
      length: [15,45,0]
      width: [45,45,30,0]
      angle: [0,0,0]
      position: [0,0,10,10]  
      texture: [18,18.1,63]
      doubleside: true
      offset:
        x: 0
        y: 0.1
        z: 0
      bump:
        position: 0
        size: 80
     double:
      length: [15,45,0]
      width: [30,30,15,0]
      angle: [0,0,0,0]
      position: [0,0,9,9]  
      texture: [12,18]
      doubleside: true
      offset:
        x: 0
        y: -4.7
        z: 0
      bump:
        position: 40
        size: 165
     double2:
      length: [15,45,0]
      width: [30,30,15,0]
      angle: [0,0,0,0]
      position: [0,0,9,9]  
      texture: [13,4]
      doubleside: true
      offset:
        x: 0
        y: -4.6
        z: 0
      bump:
        position: 40
        size: 165