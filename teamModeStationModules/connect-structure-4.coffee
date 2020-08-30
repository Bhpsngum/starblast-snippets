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
llOl0 = (l101O) =>
  return Math.floor(next() * l101O)
a = llOl0(20)
i = 1 + llOl0(4)
o = llOl0(20)
model =
  name: "connect-structure-4"
  size: 0.5
  tori: {}
  bodies:
    main:
      section_segments: 16
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        y: [-130, -120, -55 - o, -40 - o, 40 + o, 55 + o, 120, 130]
      width: [0, 15, 16, 40, 40, 12, 10, 0]
      height: [0, 15, 16, 40, 40, 12, 10, 0]
      texture: [6, 12, 10, 11, 1, 4, 6]
for s in [-4..4] by 2
  model.tori["circle" + s] =
    segments: 4 + o
    radius: 100 - Math.abs(s * a)
    section_segments: 8
    offset:
      x: 0
      y: 20 * s
      z: 0
    position:
      x: Array(5 + o).fill(0)
      y: Array(5 + o).fill(0)
      z: Array(5 + o).fill(0)
    width: Array(5 + o).fill(10)
    height: Array(5 + o).fill(o + 3)
    texture: Array(41).fill(0).map(x = (t, s) => [i, 10][Number((s - 2) % 5 == 0)])
return model
