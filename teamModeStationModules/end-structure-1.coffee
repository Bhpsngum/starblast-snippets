description = 'Modify this string to regenerate the model'
size = 1 << 30
seed = Math.random()*size
a = 13791
b = 12345
lOO0O = size - 1
lOIll = 1 / size
e = 1 + Math.floor(((seed * a + b) & lOO0O) * lOIll * 4)
generateTexture = () =>
  t = []
  for i in [0..42]
    t.push([e, 10][Number((i - 2) % 5 == 0)])
  return t
return model =
  name: 'end-structure-1'
  size: 0.5
  tori: main:
    radius: 70
    segments: 20
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: Array(21).fill(0)
      y: Array(21).fill(0)
      z: Array(21).fill(0)
    width: Array(21).fill(20)
    height: Array(21).fill(10)
    texture: generateTexture()
  bodies: main:
    angle: [0]
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-130, -120, -55, -40, 40, 55]
      z: [0, 0, 0, 0, 0, 0]
    width: [0, 15, 16, 40 + e, 40 + e, 0]
    height: [0, 15, 16, 40 + e, 40 + e, 0]
    texture: [6, 12, 10, e, 10, 4, 6]
