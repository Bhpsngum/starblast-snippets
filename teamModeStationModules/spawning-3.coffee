description = 'Modify this string to regenerate the model'
size = 1 << 30
seed = Math.random()*size
a = 13791
b = 12345
lOO0O = size - 1
lOIll = 1 / size
next = () =>
  seed = (seed * a + b) & lOO0O
  return seed * lOIll
e = 1 + Math.floor(next() * 3)
model =
  name: 'spawning-3'
  size: 0.5
  tori: {}
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: Array(12).fill(0)
      y: [-160, -150, -100, -85, -70, -50, -20, 20, 50, 70, -50, -50]
      z: Array(12).fill(0)
    width: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    height: [0, 20, 20, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    texture: [6, 1, Array(6).fill(e), 1, 11, 12].flat()
  wings:
    sidejoin:
      offset:
        x: 65
        y: 0
        z: 65
      doubleside: true
      length: [100]
      width: [50, 20]
      angle: [45]
      position: [0, 0]
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
      width: [50, 20]
      angle: [-45]
      position: [0, 0]
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
      width: [50, 20]
      angle: [0]
      position: [0, 0]
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
      width: [50, 20]
      angle: [90]
      position: [0, 0]
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
      width: [50, 20]
      angle: [-90]
      position: [0, 0]
      texture: [63]
      bump:
        position: 10
        size: 30
for i in [-4..0]
  model.tori['circle' + i] =
    radius: 200 + i * 20
    segments: 16
    section_segments: 8
    offset:
      x: 0
      y: 25 * i
      z: 0
    position:
      x: Array(17).fill(0)
      y: Array(17).fill(0)
      z: Array(17).fill(0)
    width: Array(17).fill(15)
    height: Array(17).fill(10)
    texture: Array(17).fill(0).map(x = () => [3, 8][Number(next() < .3)])
return model;
