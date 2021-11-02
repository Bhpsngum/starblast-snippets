description = 'Modify this string to regenerate the model'
size = 1 << 30
seed = Math.random() * size
a = 13791
b = 12345
len = size - 1
inversedLen = 1 / size
next = () ->
  seed = (seed * a + b) & len
  return seed * inversedLen
floor = (x) ->
  return Math.floor(next() * x)
e = 1 + floor(4)

return model =
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
      x: [0]
      y: [0]
      z: [0]
    width: [30]
    height: [15]
    texture: [if i % 2 == 0 then 10 else e] for i in [0..20]
  bodies: sphere:
    section_segments: 8
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-160, -150, -100, -85, -70, -50, -20, 20, 50, 70, -50, -50]
    width: [0, 30, 30, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    height: [0, 30, 30, 40, 70, 90, 100, 100, 90, 60, 30, 0]
    texture: [6, 12, e, e, e, e, e, e, 1, 11, 12]
