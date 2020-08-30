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
  for i in [0..20]
    t.push([e, 10][Number(i%2 == 0)])
  return t
model =
  name: 'spawning-1'
  size: 0.5
  tori: main:
    radius: 100
    segments: 12
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: Array(12).fill(0)
      y: Array(12).fill(0)
      z: Array(12).fill(0)
    width: Array(12).fill(30)
    height: Array(12).fill(15)
    texture: generateTexture()
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: Array(12).fill(0)
      y: [-160, -150, -100, -85, -70, -50, -20, 20, 50, 70, -50, -50]
    width: [0, 30, 30, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    height: [0, 30, 30, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    texture: [6, 12, Array(6).fill(e), 1, 11, 12].flat()
return model
