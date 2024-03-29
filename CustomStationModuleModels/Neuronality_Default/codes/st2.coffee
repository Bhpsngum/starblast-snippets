l = new SeedRandomizer(seed)

a = l.nextInt(20)
i = 1 + l.nextInt(4)
o = l.nextInt(20)

model =
  name: 'connect-structure-4'
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
  model.tori['circle' + s] =
    segments: 4 + o
    radius: 100 - Math.abs(s * a)
    section_segments: 8
    offset:
      x: 0
      y: 20 * s
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [10]
    height: [o + 3]
    texture: [if (g - 2) % 5 == 0 then 10 else i] for g in [0..40]

return model
