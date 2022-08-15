model =
  name: 'connect-structure-4'
  size: 0.5
  rotate: true
  id: 'st2'
  tori: {}
  bodies:
    main:
      section_segments: 16
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130, -120,-60-o,-55-o,-45-o,-40-o,-30-o,30+o,40+o,45+o,55+o,60+o,120,130]
      width: [0,16,16,25,25,40,40,40,40,25,25,12,12,0]
      height: [0,16,16,25,25,40,40,40,40,25,25,12,12,0]
      texture: [6,12,18,8,4,13,11,13,18,3,12,4,6]
    power:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,42,45,45,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [35,30,20,19,19,0]
      vertical: 1
      angle: 0
      texture: [4,3,2,4,17]
    power2:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0.1
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,42,45,45,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [35,30,20,19,19,0]
      vertical: 1
      angle: 90
      texture: [4,3,2,4,17]
    power3:
      section_segments: [40,50,130,140,140,220,230,310,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [20,42,45,45,41,41]
        z: [0,0,0,0,0,0,0,0]
      width: [15,10,5,4,4,0]
      height:  [35,30,20,19,19,0]
      vertical: 1
      angle: 180
      texture: [4,3,2,4,17]
    battery:
      section_segments: 12
      offset:
        x: 25
        y: 0
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-35,-30,-15,-13,13,15,30,35]
        z: [0,0,0,0,0,0,0,0,0]
      width: [3,11,11,10,10,11,11,3]
      height: [3,11,11,10,10,11,11,3]
      texture: [3,8,4,17,4,8,3]
    battery2:
      section_segments: 12
      offset:
        x: 25
        y: 0
        z: -25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-35,-30,-15,-13,13,15,30,35]
        z: [0,0,0,0,0,0,0,0,0]
      width: [3,11,11,10,10,11,11,3]
      height: [3,11,11,10,10,11,11,3]
      texture: [3,8,4,17,4,8,3]
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