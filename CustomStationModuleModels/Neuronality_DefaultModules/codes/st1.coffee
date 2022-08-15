l = new SeedRandomizer(seed)

i = 1 + l.nextInt(4)

model =
  name: 'joint-4-structure',
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
          x: [0]
          y: [0]
          z: [0]
      width: [20]
      height: [10]
      texture: [if (s - 2) % 5 == 0 then 10 else i] for s in [0..20]
  bodies: {}
for s in [0, 90]
  a = l.nextInt(40)
  model.bodies['body' + s] =
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
