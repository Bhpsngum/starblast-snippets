return model =
  name: 'deposit-1'
  size: 0.5
  tori:
    main:
      radius: 60
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [10]
      height: [10]
      texture: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 63, 63, 2]
    main2:
      radius: 60
      segments: 16
      section_segments: 8
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [10]
      height: [10]
      texture: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 63, 2, 2, 63, 2]
  bodies:
    hook:
      section_segments: 16
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0]
        y: [-130, -120, -55]
        z: [0, 0, 0]
      width: [0, 10, 12]
      height: [0, 10, 12]
      texture: [6, 12]
    deposit:
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0]
        y: [-90, -100, -90, 70, 85, 85, 0, -10]
        z: [0, 0, 0, 0, 0, 0, 0, 0]
      width: [0, 95, 100, 100, 100, 90, 90, 0]
      height: [0, 45, 50, 50, 50, 40, 30, 0]
      texture: [1, 4, 2, 4, 63, 10, 12]
    sidewalls:
      section_segments: 12
      offset:
        x: 80
        y: -20
        z: 0
      position:
        x: [0, 0, 0, 0, 0, 0, 0]
        y: [-55, -50, -20, 0, 20, 45, 50]
        z: [0, 0, 0, 0, 0, 0, 0]
      width: [0, 15, 15, 10, 10, 5, 0]
      height: [0, 15, 15, 10, 10, 5, 0]
      angle: [0]
      propeller: false
      texture: [4, 4, 10, 4, 63, 4]
    antenna:
      vertical: true
      section_segments: [40, 45, 50, 130, 135, 140, 220, 225, 230, 310, 315, 320]
      offset:
        x: 0
        y: 90
        z: -20
      position:
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        y: [-50, -45, -20, -19, 20, 21, 30, 60]
        z: [0, 0, 0, 0, 0, 0, 0, 0]
      width: [50, 30, 30, 12, 12, 3, 3, 0]
      height: [50, 30, 30, 12, 12, 3, 3, 0]
      texture: [3,[15], 4, 16, 63, 6, 10]
