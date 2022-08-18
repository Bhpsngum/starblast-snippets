n = new SeedRandomizer(seed)

e = 1 + n.nextInt(3)

model =
  name: 'spawning-3'
  size: 0.5
  id: 'sp1'
  rotate: true
  tori: {}
  bodies:
    sphere:
     section_segments: 16
     offset:
       x: 0
       y: 0
       z: 0
     position:
       x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
       y: [-160,-150,-105,-100,-80,-75,-55,-50,30,35,55,85,88,60,-30,-35,-50,-90,-90]
     width: [0,30,30,60,60,80,80,100,100,90,85,65,60,60,45,30,25,20,0]
     height: [0,30,30,60,60,80,80,100,100,90,85,65,60,60,45,30,25,20,0]
     texture: [6,12,4,10,3,8,18,13,4,11,10.25,17,8.2,18,13,17,4,5]
    detail1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: -60
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
        x: 0.1
        y: 0
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 45
      texture: [13.418,2,2,2,3,1,17]
    detail3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 90
      texture: [13.418,2,4,4,3,1,17]
    detail4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 135
      texture: [13.418,2,2,2,3,1,17]
    detail5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: -60
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [55,55,55,65,95,95,90,90]
        z: [0,0,0,0,20,20,20,20,0,0]
      width: [13,13,15,20,15,13,13,0]
      height:  [0,47,50,50,25,22,22,22]
      vertical: 1
      angle: 180
      texture: [13.418,2,4,4,3,1,17]
    D1:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 45
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,5,-5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [31,35,35,31,31]
      height: [31,35,35,31,31]
      texture: [ 3 ]
      angle: 90
      vertical:1
     D2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 45
        y: 0
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,5,-5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [31,35,35,31,31]
      height: [31,35,35,31,31]
      texture: [ 3 ]
      angle: 0
      vertical:1
     D3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: -45
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,5,-5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [31,35,35,31,31]
      height: [31,35,35,31,31]
      texture: [ 3 ]
      angle: 90
      vertical:1
     D4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 32
        y: 32
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,5,-5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [31,35,35,31,31]
      height: [31,35,35,31,31]
      texture: [ 3 ]
      angle: -45
      vertical:1
     D5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: -32
        y: -32
        z: 90
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,5,-5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [31,35,35,31,31]
      height: [31,35,35,31,31]
      texture: [ 3 ]
      angle: -45
      vertical:1
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 10
      texture: [4,3,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 50
      texture: [4,3,2,4,17]
    power3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 70
      texture: [4,3,2,4,17]
    power4:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 110
      texture: [4,3,2,4,17]
    power5:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 130
      texture: [4,3,2,4,17]
    power6:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [90,112,115,115,111,111]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [45,40,30,29,29,0]
      vertical: 1
      angle: 170
      texture: [4,3,2,4,17]
  wings:
    topjoin:
      offset:
        x: 45
        y: 0
        z: 80
      doubleside: true
      length: [0,100,0]
      width: [0,60,10,0]
      angle: [60,60,60]
      position: [0,0,0,0]
      texture: [63]
      bump:
        position: 0
        size: 30
    sidejoin:
      offset:
        x: 90
        y: 0
        z: 0
      doubleside: true
      length: [0,100,0]
      width: [0,60,10,0]
      angle: [-0,-0,-0]
      position: [0,0,0,0]
      texture: [63]
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 45
        y: 0
        z: -80
      doubleside: true
      length: [0,100,0]
      width: [0,60,10,0]
      angle: [-60,-60,-60]
      position: [0,0,0,0]
      texture: [63]
      bump:
        position: 0
        size: 30
for i in [-4..0]
  model.tori['circle' + i] =
    radius: 200 + i * 20 + n.nextInt(5)
    segments: 20
    section_segments: 8
    offset:
      x: 0
      y: 25 * i
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [13]
    height: [10]
    texture: [if n.next() < .2 then 8 else 3] for x in [0..16]

return model