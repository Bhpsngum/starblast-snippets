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
generateTexture = () =>
  t = []
  for s in [0..20]
    t.push([i, 10][Number((s - 2) % 5 == 0)])
  return t
i = 1 + llOl0(4)
model =
  name: "joint-4-structure",
  size: 0.5,
  tori:
    main:
      radius: 80
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
  bodies: {}
for s in [0, 90]
  a = llOl0(40)
  model.bodies["body" + s] =
    angle: [s],
    section_segments: 12
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      y: [-130, -120, -55 - a, -40 - a, 40 + a, 55 + a, 120, 130]
    width: [0, 15, 16, 40 + i, 40 + i, 12, 10, 0]
    height: [0, 15, 16, 40 + i, 40 + i, 12, 10, 0]
    texture: [6, 12, 10, i, 10, 4, 6]
return model
