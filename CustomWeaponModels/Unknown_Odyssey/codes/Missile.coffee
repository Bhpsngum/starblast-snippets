return model =
  name: 'Odyssey'
  size: 4
  tori: circle:
    segments: 20
    radius: 95
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]
    height: [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
    texture: [63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]
  bodies:
    main:
      section_segments: 20
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-130,-85,-70,-60,-20,-25,40,40,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,20,40,45,10,12,30,30,40,30,0]
      height: [0,20,25,25,10,12,25,25,20,10,0]
      texture: [4,15,63,4,4,4,11,10,4,12]
    laser1:
      section_segments: 12
      offset:
        x: 110
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      texture: [12,6,63,63,6,12]
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    laser2:
      section_segments: 12
      offset:
        x: 110
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-30,-20,0,20,30,20]
        z: [0,0,0,0,0,0,0]
      width: [0,3,5,5,5,3,0]
      height: [0,3,5,5,5,3,0]
      texture: [12,6,63,63,6,12]
      angle: 180
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -115
        z: 0
      position:
        x: [0,0,0,0]
        y: [-25,-30,-20,0]
        z: [0,0,0,0]
      width: [0,15,9,7]
      height: [0,10,9,7]
      texture: [6,6,6,10]
      laser:
        damage: [250,250]
        rate: 1
        type: 1
        speed: [100,100]
        number: 1
        error: 0
        recoil: 300
    cockpit:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,0,10,30]
        z: [0,0,0,0,0]
      width: [0,12,15,10,0]
      height: [0,20,22,18,0]
      texture: [ 9 ]
    bumpers:
      section_segments: 8
      offset:
        x: 85
        y: 20
        z: 0
      position:
        x: [-5,0,5,10,5,0,-5]
        y: [-85,-80,-40,0,20,50,55]
        z: [0,0,0,0,0,0,0]
      width: [0,10,15,15,15,5,0]
      height: [0,20,35,35,25,15,0]
      texture: [11,2,63,4,3]
      angle: 0
    toppropulsors:
      section_segments: 10
      offset:
        x: 17
        y: 50
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    bottompropulsors:
      section_segments: 10
      offset:
        x: 17
        y: 50
        z: -15
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
  wings:
    topjoin:
      offset:
        x: 0
        y: -3
        z: 0
      doubleside: true
      length: [ 100 ]
      width: [20,20]
      angle: [ 25 ]
      position: [0,0,0,50]
      texture: [ 1 ]
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -3
        z: 0
      doubleside: true
      length: [ 100 ]
      width: [20,20]
      angle: [ -25 ]
      position: [0,0,0,50]
      texture: [ 1 ]
      bump:
        position: -10
        size: 30
