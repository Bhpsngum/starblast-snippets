description = 'Modify this string to regenerate the model'
size = 1 << 30
seed = Math.random()*size
a = 13791
b = 12345
lOO0O = size - 1
lOIll = 1 / size
e = 1 + Math.floor(((seed * a + b) & lOO0O) * lOIll * 3)
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
      x: Array(43).fill(0)
      y: Array(43).fill(0)
      z: Array(43).fill(0)
    width: Array(43).fill(30)
    height: Array(43).fill(15)
    texture: Array(43).fill(0).map(x = (j, i) => [1, 10][Number(i%7 == 0)])
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: Array(12).fill(0)
      y: [-160, -150, -100, -85, -70, -50, -20, 20, 50, 70, -50, -50]
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    width: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    height: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    texture: [6, 1, Array(6).fill(e), 1, 11, 12].flat()
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
