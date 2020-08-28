return model =
  name: 'connect-structure-1'
  size: 0.5
  tori: main:
    radius: 100
    segments: 20
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]
    height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
    texture: [1,1,10,1,1,1,1,10,1,1,1,1,10,1,1,1,1,10,1,1,1]
  bodies:
    bumpers:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 97
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-55,-30,-20,20,30,90,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,2,20,20,2,2,0]
      height: [0,12,5,30,30,5,2,0]
      texture: [4,4,1,10,1,1,1]
    main:
      section_segments: 15
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-110,-100,-55,-40,40,55,110,120]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,50,50,12,10,0]
      height: [0,20,20,30,30,12,10,0]
      texture: [6,15,10,11,10,4,6]
  wings:
    topjoin:
      offset:
        x: 0
        y: -3
        z: 0
      doubleside: true
      length: 100
      width: [20,20]
      angle: 45
      position: [0,0,0,50]
      texture: 1
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -3
        z: 0
      doubleside: true
      length: 100
      width: [20,20]
      angle: [-45]
      position: [0,0,0,50]
      texture: 1
      bump:
        position: -10
        size: 30
