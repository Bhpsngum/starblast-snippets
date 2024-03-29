s = new SeedRandomizer(seed)

e = 1 + s.nextInt(4)

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
      x: [0]
      y: [0]
      z: [0]
    width: [20]
    height: [10]
    texture: [if (i - 2) % 5 == 0 then 10 else e] for i in [0..42]
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
