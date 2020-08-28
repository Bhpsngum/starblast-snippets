return model =
  name: 'spawning-3'
  size: 0.5
  tori:
    circle0:
      radius: 200
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
      texture: [3,8,8,3,3,8,3,3,8,3,3,3,8,3,3,3,3]
    'circle-1':
      radius: 180
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
      texture: [3,8,3,8,3,3,8,8,3,8,8,3,3,3,8,3,8]
    'circle-2':
      radius: 160
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
      texture: [3,3,3,3,3,3,3,3,3,8,8,3,3,3,3,3,3]
    'circle-3':
      radius: 140
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -75
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
      texture: [3,3,3,8,8,8,3,8,8,3,3,3,8,8,3,3,3]
    'circle-4':
      radius: 120
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -100
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
      height: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
      texture: [8,3,8,3,3,3,8,3,3,8,3,3,3,3,8,3,3]
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0]
      y: [-160,-150,-100,-85,-70,-50,-20,20,50,70,-50,-50]
      z: [0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,20,20,40,70,90,100,100,90,60,30,0]
    height: [0,20,20,40,70,90,100,100,90,60,30,0]
    texture: [6,1,1,1,1,1,1,1,1,11,12]
  wings:
    sidejoin:
      offset:
        x: 65
        y: 0
        z: 65
      doubleside: true
      length: [100]
      width: [50,20]
      angle: [45]
      position: [0,0]
      texture: [63]
      bump:
        position: 0
        size: 30
    sidejoin2:
      offset:
        x: 65
        y: 0
        z: -65
      doubleside: true
      length: [100]
      width: [50,20]
      angle: [-45]
      position: [0,0]
      texture: [63]
      bump:
        position: 0
        size: 30
    sidejoin3:
      offset:
        x: 90
        y: 0
        z: 0
      doubleside: true
      length: [100]
      width: [50,20]
      angle: [0]
      position: [0,0]
      texture: [63]
      bump:
        position: 10
        size: 30
    topjoin:
      offset:
        x: 0
        y: 0
        z: 95
      doubleside: true
      length: [100]
      width: [50,20]
      angle: [90]
      position: [0,0]
      texture: [63]
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: 0
        z: -95
      doubleside: true
      length: [100]
      width: [50,20]
      angle: [-90]
      position: [0,0]
      texture: [63]
      bump:
        position: 10
        size: 30
