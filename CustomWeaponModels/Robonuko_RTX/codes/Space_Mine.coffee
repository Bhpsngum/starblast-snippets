return model =
  name: 'Space Mine'
  size: 0.7
  bodies: main:
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [0, 0, 0, 0, 0, 0, 0]
      y: 80 * -Math.cos(i / 2 * Math.PI) for i in [0..10]
      z: [0, 0, 0, 0, 0, 0, 0, 0]
    width: 80 * Math.sin(i / 2 * Math.PI) for i in [0..10]
    height: 80 * Math.sin(i / 2 * Math.PI) for i in [0..10]
    propeller: false
    texture: [63]