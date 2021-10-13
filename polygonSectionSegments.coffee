# To someone who wants to build polygons with section segments, here it is:

polygonSectionSegments = (sides, alpha) ->
  alpha = alpha %% 360 or 0
  sides = Math.trunc(Math.max(sides, 1)) or 1
  angle = 360 / sides
  return ((alpha + angle * i) %% 360 for i in [0...sides])

# Where:
# `sides`: the number of sides in the polygon
# `alpha`: rotating angle (in degrees - clockwise) along the y-axis - default to 0 if omitted
#
# **How to use it**
# ```coffee
# section_segments: polygonSectionSegments(6) ## hexagon: [0, 60, 120, 180, 240, 300]
# ```
# which is actually the same as
# ```coffee
# section_segments: 6
# ```
# since Ship Editor will automatically build the polygon based on the value of section segments if it's not an array
#
# But the above function isn't useless at all, we have the unused `alpha` parameter:
# ```coffee
# section_segments: plygonSectionSegments(6, 90) ## [90, 150, 210, 270, 330, 30]
# ```
# will build a hexagon rotating 90 degrees clockwise along the y-axis compared to
# ```coffee
# section_segments: 6
# ```
# You can use `brain.think()` and `brain.try()` to test the function yourself
#
#
# Some info about polygon section segments here: https://discord.com/channels/265400368765075456/327515470993293312/773787423074549760 (SB Main discord)
