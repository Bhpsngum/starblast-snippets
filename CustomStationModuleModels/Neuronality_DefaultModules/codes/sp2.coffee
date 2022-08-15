s = new SeedRandomizer(seed)

e = 1 + s.nextInt(3)

return model =
  name: 'spawning-2'
  size: 0.5
  tori: main:
    radius: 200
    segments: 42
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [30]
    height: [15]
    texture: [if i % 7 == 0 then 10 else 1] for i in [0..42]
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-160, -150, -100, -85, -70, -50, -20, 20, 50, 70, -50, -50]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    height: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    texture: [6, 1, e, e, e, e, e, e, 1, 11, 12]
  wings:
    topjoin:
      offset:
        x: 45
        y: 0
        z: 80
      doubleside: true
      length: [100]
      width: [50, 20]
      angle: [60]
      position: [0, 0]
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
      length: [100]
      width: [50, 20]
      angle: [0]
      position: [0, 0]
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
      length: [100]
      width: [50, 20]
      angle: [-60]
      position: [0, 0]
      texture: [63]
      bump:
        position: 0
        size: 30
