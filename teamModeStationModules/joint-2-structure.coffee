description = 'Modify this string to regenerate the model'
size = 1 << 30
seed = Math.random()*size
a = 13791
b = 12345
lOO0O = size - 1
lOIll = 1 / size
e = 1 + Math.floor(((seed * a + b) & lOO0O) * lOIll * 4)
return model =
  name: 'joint-2-structure'
  size: 0.5
  bodies:
    main:
      angle: [0]
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        y: [-130, -120, -100, -40, 20, 30]
        z: [0, 0, 0, 0, 0, 0]
      width: [0, 15, 16, 40, 20, 0]
      height: [0, 15, 16, 40, 20, 0]
      texture: [6, 12, 8, e, 10, 4, 6]
    angle:
      angle: -90
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        y: [-130, -120, -55, -40, 40, 55]
        z: [0, 0, 0, 0, 0, 0]
      width: [0, 15, 16, 40, 40, 0]
      height: [0, 15, 16, 40, 40, 0]
      texture: [6, 12, 10, e, 10, 4, 6]
