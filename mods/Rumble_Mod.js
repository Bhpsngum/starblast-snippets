// Mod code provided by Money

//Thanks to Destroy & Dimed for the idea & Bhpsngum for code help
//Based on Team Rumble from Fortnite
var modifier = {
  map_size: 60,
  crystal_value: 0,
  max_players: 20,
  kills_to_win: 100,
  yeet_gems: true,
  healer_button: false,
  round_timer: 30,
  round_ship_tier: "random",//choose from 3-7 or "random"
  gems_upon_spawning: 169,//removed
  laggy_objs: false
};

var a = {};
a.a = '{"name":"Dugares","level":1,"model":1,"size":1.8,"specs":{"shield":{"capacity":[400,500],"reload":[10,12]},"generator":{"capacity":[140,200],"reload":[50,65]},"ship":{"mass":450,"speed":[75,85],"rotation":[32,45],"acceleration":[60,85]}},"bodies":{"main":{"section_segments":[-180,-90,-50,-45,-40,40,45,50,90,180],"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-156,-155,-150,-135,-120,-110,60,59.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2.142857142857143,5.714285714285714,7.857142857142858,9.285714285714286,10.714285714285715,14.285714285714286,0],"height":[0,2,3,8,12,14,24,0],"propeller":0,"texture":[2,4,3,3,3,3,4],"laser":{"damage":[100,150],"rate":1,"type":1,"speed":[80,100],"number":1,"recoil":300,"error":0}},"main1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-15,"z":-2.5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-156,-155,-150,-135,-120,-110,60,59.5],"z":[2.5,1.6,0,0,0,0,0,0,0,0,0]},"width":[0,3,8,11,13,15,20,0],"height":[0,1.25,3.75,5,7.5,10,15,0],"propeller":0,"texture":[2,3,2,3,3,3,4]},"main2":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-3},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-150,-150,-143,-110,-45,0,60,60],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8.399999999999999,12.6,16.799999999999997,23.799999999999997,37.8,37.8,0],"height":[0,4.8,6,13.2,15.6,15.6,15.6,0],"propeller":0,"texture":[3.9,2.9,3.9,2.9,3.9,2.9]},"main25":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-15,"z":-8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-150,-150,-143,-110,-45,0,50,50],"z":[3,3,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10.26,15.39,20.52,29.07,46.17,46.17,0],"height":[0,1.2,6,9.6,15.6,15.6,15.6,0],"propeller":0,"texture":[4,3,4,3,4,3]},"main3":{"section_segments":[60,65,70,110,115,120,220,225,230,310,315,320],"offset":{"x":0,"y":-15,"z":-9},"position":{"x":[-14,-14,-17,-31,-30,-30,-5,-5],"y":[-103,-100,-45,0,0,30,59,59],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0.1,6,9,12,27,27,30,0],"height":[4,10,12,14,14,14,14,0],"propeller":0,"texture":[3,3,3,3,3,3,4]},"main35":{"section_segments":[40,45,50,130,135,140,240,245,250,290,295,300],"offset":{"x":0,"y":-15,"z":-9},"position":{"x":[14,14,17,31,30,30,5,5],"y":[-103,-100,-45,0,0,30,59,59],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0.1,6,9,12,27,27,30,0],"height":[4,10,12,14,14,14,14,0],"propeller":0,"texture":[3.2,3.2,3.2,3.2,3.2,3.2,4]},"guns":{"section_segments":10,"offset":{"x":47.5,"y":-10,"z":-9},"position":{"x":[0,0,0,0],"y":[-18,-20,0,0],"z":[0,0,0,0]},"width":[0,4,5,0],"height":[0,4,5,0],"texture":[3]},"guns_front":{"section_segments":10,"offset":{"x":14,"y":-115,"z":-9},"position":{"x":[-3,-3,0,0],"y":[-35,-32,0,0],"z":[0,0,0,0]},"width":[0,4,5,0],"height":[0,4,5,0],"texture":[4]},"cannons":{"section_segments":12,"offset":{"x":61,"y":-17,"z":-16.5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-30,-56,-56,-56,-55,-49,-47,-40,-36,-32,0,1,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,2.5,2.5,3.7,5.3,5.3,3.5,3.5,6,6,6,3,0],"height":[0,2,2.5,2.5,3.7,5.3,5.3,3.5,3.5,6,6,6,3,0],"texture":[3,3,4,4,4,4,4,3,4],"laser":{"damage":[20,25],"rate":1.5,"type":2,"speed":[140,170],"number":1,"error":2}},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-40,"z":14},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,60,70,85,84.5],"z":[0,0.2,-2,-1,-1,3]},"width":[0,7,10,10,10,5],"height":[0,2,12,14,14,0],"texture":[7,8.98,4,4,4]},"cockpit_deco":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":2,"y":40,"z":18},"position":{"x":[0,0,0,0],"y":[0,0,2.5,2.5],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"texture":[3],"angle":90},"back_plate":{"section_segments":[45,135,225,315],"offset":{"x":3,"y":43,"z":37.4},"position":{"x":[0,0,0,0,0,0],"y":[0,0,30,50,90,90],"z":[-5,-5,0,0,-3,-3]},"width":[0,12,12,12,9,0],"height":[0,1,1,1,1,0],"texture":[3],"angle":0},"back_plate2":{"section_segments":[0,45,90,90],"offset":{"x":0,"y":43,"z":33},"position":{"x":[-11.5,-11.5,-11.5,-11.5,-8.5,-8.5],"y":[-7,-7,30,50,100,100],"z":[-6.2,-6.2,0,0,-3.5,-3.5]},"width":[5,5,5,5,5,0],"height":[5,5,5,5,5,0],"texture":[3]},"back_plate3":{"section_segments":[-90,-45,0,0],"offset":{"x":0,"y":43,"z":33},"position":{"x":[11.5,11.5,11.5,11.5,8.5,8.5],"y":[-7,-7,30,50,100,100],"z":[-6.2,-6.2,0,0,-3.5,-3.5]},"width":[5,5,5,5,5,0],"height":[5,5,5,5,5,0],"texture":[3]},"back_plate4":{"section_segments":[45,135,225,315],"offset":{"x":16,"y":43,"z":22.8},"position":{"x":[0,0,0,0,0,-3,-3],"y":[-7,-7,5,30,50,90,100],"z":[3.2,3.2,-1.6,0,0,-3.5,6.8]},"width":[0,0.5,0.5,0.5,0.5,1,1],"height":[0,1,11,15,15,15,0.1],"texture":[3]},"back_deco":{"section_segments":4,"offset":{"x":0,"y":53,"z":26},"position":{"x":[0,0,0,0],"y":[-16,-16,16,16],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,2,2,0],"texture":[8],"angle":90},"turbine":{"section_segments":[-140,-120,-100,-50,-45,-40,40,45,50,100,120,140,180],"offset":{"x":0,"y":49,"z":8},"position":{"x":[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],"y":[24,18,0,6,18,54,62.4,72,72,72,42,42,42,48,42,42],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,14.399999999999999,14.399999999999999,18,18,18,18,15.6,13.799999999999999,13.2,6,7.199999999999999,6,4.8,1.2,0],"height":[0,14.399999999999999,14.399999999999999,18,18,18,18,15.6,13.799999999999999,13.2,6,7.199999999999999,6,4.8,1.2,0],"texture":[4,3,3,3,4,3,3,17],"propeller":true},"turbine2":{"section_segments":[-140,-120,-100,-50,-45,-40,40,45,50,100,120,140,180],"offset":{"x":0,"y":49,"z":8},"position":{"x":[-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30,-30],"y":[24,18,0,6,18,54,62.4,72,72,72,42,42,42,48,42,42],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,14.399999999999999,14.399999999999999,18,18,18,18,15.6,13.799999999999999,13.2,6,7.199999999999999,6,4.8,1.2,0],"height":[0,14.399999999999999,14.399999999999999,18,18,18,18,15.6,13.799999999999999,13.2,6,7.199999999999999,6,4.8,1.2,0],"texture":[4,3,3,3,4,3,3,17],"propeller":true},"engine":{"section_segments":12,"offset":{"x":30,"y":47,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[-1.5,-1.5,-1,-1,0,10,10],"z":[0,0,0,0,0,0,0]},"width":[0,5.5,6,8,10,10,0],"height":[0,5.5,6,8,10,10,0],"texture":[2,4,3,3,4,3,37]},"turbinedeco":{"section_segments":[43,45,47,90,270,310,313,315,317],"offset":{"x":0,"y":89,"z":21},"position":{"x":[0,0,0,0],"y":[0,0,22,22],"z":[0,0,0,0]},"width":[0,27,27,0],"height":[0,15,15,0],"texture":[3],"angle":0},"turbinedeco2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":45,"y":73,"z":14},"position":{"x":[0,0,0,0],"y":[0,0,11,11],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,4,4,0],"texture":[4]},"grill":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":18,"y":67,"z":27},"position":{"x":[0,0,0,0,0,0],"y":[0,0,0,0,19,19],"z":[0,0,0,0,0,0]},"width":[0,3,5,6,6,0],"height":[0,2.5,5,6,6,0],"texture":[3,4,3],"angle":-15},"stab":{"section_segments":[45,135,225,315],"offset":{"x":10,"y":125,"z":33.5},"position":{"x":[-2,-2,-2,-2.5,-2.5,-2.5,-2.5,-2.5],"y":[-32,-30,2,6,16,20,21.5,21.5],"z":[1,2,0,1,2,1.5,0.5,0]},"width":[1.2,2,2,2,2,2,2,0],"height":[5,5,5,6,4,4,2.5,0],"texture":[4]},"winglet":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":25,"z":-120},"position":{"x":[0,0,0,0],"y":[0,0,40,40],"z":[0,1,-21,-21]},"width":[0,2,2,0],"height":[0,42,6,0],"texture":[3],"vertical":true,"angle":65},"winglet_lights":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":25,"z":-117},"position":{"x":[0,0,0,0],"y":[0,3,42,42],"z":[0,-2,-23,-21]},"width":[0,1.5,1.5,0],"height":[0,42,6,0],"texture":[17,17,4],"vertical":true,"angle":65},"winglet1":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":25,"z":-120},"position":{"x":[0,0,0,0],"y":[0,5,35,40],"z":[0,1,-17,-21]},"width":[0,2.1,2.1,0],"height":[0,26,0.1,0],"texture":[4],"vertical":true,"angle":65},"winglet2":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":25,"z":-155},"position":{"x":[0,0,0,0],"y":[0,0,8,8],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,15,15,0],"texture":[3],"vertical":true,"angle":65},"winglet3":{"section_segments":[45,135,225,315],"offset":{"x":45.5,"y":36.7,"z":-151},"position":{"x":[0,0,0,0],"y":[0,0,12,12],"z":[0,0,6,0]},"width":[0,2,2,0],"height":[0,12,12,0],"texture":[3],"vertical":true,"angle":65},"winglet3_lights":{"section_segments":[45,135,225,315],"offset":{"x":45.5,"y":36.7,"z":-151},"position":{"x":[0,0,0,0],"y":[0,0,13.9,13.9],"z":[0,0,6,6]},"width":[0,1.5,1.5,0],"height":[0,12,10,0],"texture":[17,17,4],"vertical":true,"angle":65},"winglet4":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":24,"z":-154},"position":{"x":[0,0,0,0],"y":[0,0,30,30],"z":[0,0,5,0]},"width":[0,0.5,0.5,0],"height":[0,12,8,0],"texture":[4],"vertical":true,"angle":65},"wing":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-85},"position":{"x":[0,0,0,0],"y":[0,0,60,60],"z":[0,-4,-55,-55]},"width":[0,3,3,0],"height":[0,34,4,0],"texture":[4],"vertical":true,"angle":130},"wing1":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-85},"position":{"x":[0,0,0,0],"y":[0,15,60,60],"z":[0,10,-50,-55]},"width":[0,3,3,0],"height":[0,20,4,0],"texture":[4],"vertical":true,"angle":130},"wing2":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-70},"position":{"x":[0,0,0,0],"y":[25,25,67,67],"z":[3,3,-58,-58]},"width":[0,4,4,0],"height":[0,30,25,0],"texture":[3],"vertical":true,"angle":130},"wing2_lights":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-70},"position":{"x":[0,0,0,0],"y":[25,25,69,69],"z":[3,8,-59,-60]},"width":[0,3.5,3.5,0],"height":[0,30,27,0],"texture":[3,17],"vertical":true,"angle":130},"wing3":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-45},"position":{"x":[0,0,0,0],"y":[25,25,55,55],"z":[6,6,-55,-55]},"width":[0,4,4,0],"height":[0,30,10,0],"texture":[3],"vertical":true,"angle":130},"wing3_lights":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-45},"position":{"x":[0,0,0,0],"y":[25,25,57.5,57.5],"z":[10,10,-55,-55]},"width":[0,3.5,3.5,0],"height":[0,30,10,0],"texture":[3,17],"vertical":true,"angle":130},"wing4":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":4},"position":{"x":[0,0,0,0],"y":[25,25,45,45],"z":[6,6,-73,-73]},"width":[0,4,4,0],"height":[0,40,0,0],"texture":[3],"vertical":true,"angle":130},"wing4_lights":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":4},"position":{"x":[0,0,0,0],"y":[25,25,47.5,45],"z":[6,6,-73,-73]},"width":[0,3.5,3.5,0],"height":[0,50,0,0],"texture":[3,17],"vertical":true,"angle":130},"wing5":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-80},"position":{"x":[0,0,0,0],"y":[0,0,30,30],"z":[0,1,20,20]},"width":[0,3,3,0],"height":[0,20,33,0],"texture":[4],"vertical":true,"angle":130},"wing5_lights":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":-80},"position":{"x":[0,0,0,0],"y":[0,0,30,30],"z":[0,1,20,20]},"width":[0,2.5,2.5,0],"height":[0,23,36,0],"texture":[4,17,4],"vertical":true,"angle":130},"wing6":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":8},"position":{"x":[0,0,0,0],"y":[25,25,32,32],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,50,42,0],"texture":[3],"vertical":true,"angle":130},"wing7_lights":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":8},"position":{"x":[0,0,0,0],"y":[25,25,34,32],"z":[0,0,0,0]},"width":[0,3.5,3.5,0],"height":[0,50,39,0],"texture":[3,17],"vertical":true,"angle":130},"wing7":{"section_segments":[45,135,225,315],"offset":{"x":43,"y":-3,"z":8},"position":{"x":[0,0,0,0],"y":[18,18,25,25],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,33,50,0],"texture":[3],"vertical":true,"angle":130},"wing_block":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":60,"y":-18,"z":-0.5},"position":{"x":[0,0,-12,-12],"y":[0,0,15,15],"z":[0,0,0,0]},"width":[0,8,8,0],"height":[0,17,17,0],"texture":[8],"vertical":true},"main_deco":{"section_segments":[45,135,225,315],"offset":{"x":22,"y":6.5,"z":-32},"position":{"x":[0,0,4,4],"y":[0,0,5,5],"z":[0,4,0,0]},"width":[0,5,5,0],"height":[0,23,17,0],"texture":[4],"vertical":true},"ring0":{"section_segments":[30,75,165,210,255,345],"offset":{"x":0,"y":-10,"z":-12},"position":{"x":[55,55,55,55],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring20":{"section_segments":[-30,15,105,150,195,285],"offset":{"x":0,"y":-10,"z":-12},"position":{"x":[-54,-54,-54,-54],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring1":{"section_segments":[30,75,165,210,255,345],"offset":{"x":0,"y":-4,"z":-12},"position":{"x":[55,55,55,55],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring21":{"section_segments":[-30,15,105,150,195,285],"offset":{"x":0,"y":-4,"z":-12},"position":{"x":[-54,-54,-54,-54],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring2":{"section_segments":[30,75,165,210,255,345],"offset":{"x":0,"y":2,"z":-12},"position":{"x":[55,55,55,55],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring22":{"section_segments":[-30,15,105,150,195,285],"offset":{"x":0,"y":2,"z":-12},"position":{"x":[-54,-54,-54,-54],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring3":{"section_segments":[30,75,165,210,255,345],"offset":{"x":0,"y":8,"z":-12},"position":{"x":[55,55,55,55],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0},"ring23":{"section_segments":[-30,15,105,150,195,285],"offset":{"x":0,"y":8,"z":-12},"position":{"x":[-54,-54,-54,-54],"y":[0,0,3,3],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,13,13,0],"texture":[3.9],"angle":0}},"wings":{"main":{"length":[20,15],"width":[85,60,5],"angle":[-10,-20],"position":[40,20,30],"doubleside":true,"offset":{"x":0,"y":-103,"z":-4},"bump":{"position":40,"size":5},"texture":[3]},"main_lights":{"length":[20,15],"width":[85,60,5],"angle":[-10,-20],"position":[40,20,30],"doubleside":true,"offset":{"x":0,"y":-105,"z":-4},"bump":{"position":40,"size":4},"texture":[17]},"main2":{"length":[10,0,20],"width":[16,14,45,7],"angle":[-30,-30,-30],"position":[-5,0,15,28],"doubleside":true,"offset":{"x":43,"y":77,"z":8},"bump":{"position":0,"size":5},"texture":[3,3]},"main2_lights":{"length":[10,0,20],"width":[16,14,45,7],"angle":[-30,-30,-30],"position":[-2,1,15,28],"doubleside":true,"offset":{"x":43,"y":75,"z":8},"bump":{"position":0,"size":4},"texture":[17,3,17]}},"typespec":{"name":"Dugares","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[400,500],"reload":[10,12]},"generator":{"capacity":[140,200],"reload":[50,65]},"ship":{"mass":450,"speed":[75,85],"rotation":[32,45],"acceleration":[60,85]}},"shape":[6.156,5.757,4.064,3.39,2.857,3.411,3.524,3.184,2.975,2.847,2.733,2.624,2.561,2.604,2.726,2.893,3.145,3.526,4.148,5.497,6.382,6.084,5.935,5.976,6.046,5.284,6.046,5.976,5.935,6.084,6.382,5.497,4.148,3.526,3.145,2.893,2.726,2.604,2.561,2.624,2.733,2.847,2.975,3.184,3.524,3.411,2.857,3.39,4.064,5.757],"lasers":[{"x":0,"y":-6.156,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":1,"speed":[80,100],"number":1,"spread":0,"error":0,"recoil":300},{"x":2.196,"y":-2.628,"z":-0.594,"angle":0,"damage":[20,25],"rate":1.5,"type":2,"speed":[140,170],"number":1,"spread":0,"error":2,"recoil":0},{"x":-2.196,"y":-2.628,"z":-0.594,"angle":0,"damage":[20,25],"rate":1.5,"type":2,"speed":[140,170],"number":1,"spread":0,"error":2,"recoil":0}],"radius":6.382}}';
//a.Barracuda = '{"name":"Barracuda","level":6,"model":7,"size":2.4,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":550,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,-10,0,20,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,25,35,40,40,35,30,0],"height":[0,5,40,45,40,60,70,60,30,0],"texture":[10,2,10,2,3,13,13,63,12],"propeller":true},"front":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-85,-70,-60,-20],"z":[0,0,0,0,0]},"width":[0,40,45,10,12],"height":[0,15,18,8,12],"texture":[8,63,4,4,4],"propeller":true},"propeller":{"section_segments":10,"offset":{"x":40,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,20,15,0],"height":[0,10,15,15,15,10,10,18,8,0],"texture":[4,4,10,3,3,63,4,63,12],"propeller":true},"sides":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-75,-60,-50,-10,10,50,60,75,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,30,35,10,12,12,10,35,30,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,0,10,30,50],"z":[0,0,0,0,0,0]},"width":[0,12,18,20,15,0],"height":[0,20,22,24,20,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":20,"z":15},"length":[70],"width":[70,30],"angle":[90],"position":[0,30],"texture":[63],"bump":{"position":10,"size":30}},"top2":{"doubleside":true,"offset":{"x":0,"y":51,"z":5},"length":[70],"width":[50,20],"angle":[90],"position":[0,60],"texture":[63],"bump":{"position":10,"size":30}}},"typespec":{"name":"Barracuda","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":550,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}}';
a.Barracuda = '{"name":"Barracuda","level":6,"model":7,"size":2.4,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":500,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[140,160],"speed":[100,120],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,-10,0,20,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,25,35,40,40,35,30,0],"height":[0,5,40,45,40,60,70,60,30,0],"texture":[10,2,10,2,3,13,13,63,12],"propeller":true},"front":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-85,-70,-60,-20],"z":[0,0,0,0,0]},"width":[0,40,45,10,12],"height":[0,15,18,8,12],"texture":[8,63,4,4,4],"propeller":true},"propeller":{"section_segments":10,"offset":{"x":40,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,20,15,0],"height":[0,10,15,15,15,10,10,18,8,0],"texture":[4,4,10,3,3,63,4,63,12],"propeller":true},"sides":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-75,-60,-50,-10,10,50,60,75,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,30,35,10,12,12,10,35,30,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,0,10,30,50],"z":[0,0,0,0,0,0]},"width":[0,12,18,20,15,0],"height":[0,20,22,24,20,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":20,"z":15},"length":[70],"width":[70,30],"angle":[90],"position":[0,30],"texture":[63],"bump":{"position":10,"size":30}},"top2":{"doubleside":true,"offset":{"x":0,"y":51,"z":5},"length":[70],"width":[50,20],"angle":[90],"position":[0,60],"texture":[63],"bump":{"position":10,"size":30}}},"typespec":{"name":"Barracuda","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":550,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,180],"speed":[120,140],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}}';
a.H_Mercury = '{"name":"H-Mercury","level":6,"model":9,"size":2,"specs":{"shield":{"capacity":[250,400],"reload":[6,9]},"generator":{"capacity":[100,175],"reload":[45,60]},"ship":{"mass":430,"speed":[75,90],"rotation":[50,65],"acceleration":[60,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,400],"reload":[6,9]},"generator":{"capacity":[100,175],"reload":[45,60]},"ship":{"mass":430,"speed":[75,90],"rotation":[50,65],"acceleration":[60,100]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917}}';
a.Toscain = '{"name":"Toscain","level":5,"model":8,"size":1.7,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":8,"code":508,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01}}';
var ships = [];
for (let ship in a) ships.push(a[ship]);

var vocabulary = [
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Defend", icon:"\u0025", key:"D"},
  {text: "Kill", icon:"\u007f", key:"K"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "You", icon:"\u004e", key:"O"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "No Problem", icon:"\u0047", key:"P"},
  {text: "Attack", icon:"\u0049", key:"A"},
  {text: "Help", icon:"\u004a", key:"H"},
  {text: "Hmmm?", icon:"\u004b", key:"Q"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "Heal", icon:"\u0037", key:"L"},
  {text: "Follow", icon:"\u0050", key:"F"}
];

var ships_list = [
  ["Pulse-Fighter","Side-Fighter","Shadow-X-1","Y-Defender"],   
  ["Vanguard","Mercury","X-Warrior","Side-Interceptor","Pioneer","Crusader"],
  ["U-Sniper","FuryStar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender","Toscain"],   
  ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender","H-Mercury"],   
  ["Odyssey","Shadow X-3","Bastion","Aries"]  
];

function findShipCode(name){
  for (let i=0;i<ships_list.length;i++)
  for (let j=0;j<ships_list[i].length;j++)
  if (ships_list[i][j] == name) return (i+3)*100+j+1;
}

function shuffle(array,yeetus){
  var tmp, current, top = array.length;
  if (top) while(--top){
    current = Math.floor(Math.random()*(top+1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  if (yeetus) return array.slice(0,yeetus);
  return array;
}

function getRandByRatio(tierratio){
  let idx = Math.floor(Math.random()*101);
  for (let item of tierratio){
    if (idx >= item.r[0] && idx <= item.r[1]) return item.t;
  }
}

var chooseships,maps = [1761,1749,77,45,4360,3604,5575,4990],music = ["warp_drive.mp3","civilisation.mp3","argon.mp3"],
tierratio = [{t:3,r:[0,6]},{t:4,r:[7,16]},{t:5,r:[17,41]},{t:6,r:[42,74]},{t:7,r:[75,100]}/*6,17,25,33,17*/];
var colors = [
  {team:"Red",hue:0,team2:"Blue",hue2:240},
  {team:"Yellow",hue:60,team2:"Pink",hue2:300},
  {team:"Green",hue:120,team2:"Purple",hue2:270},
  {team:"Aqua",hue:150,team2:"Orange",hue2:30}
];

if (!game.custom.init){
  game.custom.init = true;
  if (modifier.round_ship_tier === "random")
  modifier.round_ship_tier = getRandByRatio(tierratio);
  var tier = modifier.round_ship_tier,rand_ships,ship_name,yeetus = 4;
  switch (modifier.round_ship_tier){
    case 3: yeetus = 3; break; case 4: yeetus = 3; break;
    case 5: yeetus = 3; break; case 7: yeetus = false; 
  }
  ship_name = JSON.parse(JSON.stringify(ships_list[tier-3]));
  rand_ships = JSON.parse(JSON.stringify(ships_list[tier-3])).map((n,p) => tier*100+p+1);
  chooseships = shuffle(rand_ships,yeetus);
  shuffle(colors,false);
}

var teams = {
  names: [colors[0].team,colors[0].team2],
  points: [0,0],
  count: [0,0],
  ships: [[],[]],
  hues: [colors[0].hue,colors[0].hue2]
};

var maps = [
  {name: "Dimension", author: "Liberal", map:
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "    9977797777979777799999999999999999977779797777977799    \n"+
    "    9977797777979777799999999999999999977779797777977799    \n"+
    "    99777977779797777999999      99999977779797777977799    \n"+
    "    9977797777979777799999        9999977779797777977799    \n"+
    "    997779777797977779999          999977779797777977799    \n"+
    "    99777977779797777999            99977779797777977799    \n"+
    "    9977797777979777999     9999     9997779797777977799    \n"+
    "    99777977779797799                  99779797777977799    \n"+
    "    9977999777979799                    9979797779997799    \n"+
    "    99799 997797999                      999797799 99799    \n"+
    "    9999   9979799                        9979799   9999    \n"+
    "    999     99999        7997  7997        99999     999    \n"+
    "    99       999                            999       99    \n"+
    "    99        9    7                    7    9        99    \n"+
    "    99             9                    9             99    \n"+
    "    99             9                    9             99    \n"+
    "    99   7         7   99997    79999   7         7   99    \n"+
    "    99   99           99            99           99   99    \n"+
    "    99    99          7              7          99    99    \n"+
    "    99     99                                  99     99    \n"+
    "    99      99                                99      99    \n"+
    "    99      999   97                    79   999      99    \n"+
    "    99      9799 99        7    7        99 9979      99    \n"+
    "    99      977999        99    99        999779      99    \n"+
    "    99      97779        99      99        97779      99    \n"+
    "    99      97779        99      99        97779      99    \n"+
    "    99      977999        99    99        999779      99    \n"+
    "    99      9799 99        7    7        99 9979      99    \n"+
    "    99      999   97                    79   999      99    \n"+
    "    99      99                                99      99    \n"+
    "    99     99                                  99     99    \n"+
    "    99    99          7              7          99    99    \n"+
    "    99   99           99            99           99   99    \n"+
    "    99   7         7   99997    79999   7         7   99    \n"+
    "    99             9                    9             99    \n"+
    "    99             9                    9             99    \n"+
    "    99        9    7                    7    9        99    \n"+
    "    99       999                            999       99    \n"+
    "    999     99999        7997  7997        99999     999    \n"+
    "    9999   9979799                        9979799   9999    \n"+
    "    99799 997797999                      999797799 99799    \n"+
    "    9977999777979799                    9979797779997799    \n"+
    "    99777977779797799                  99779797777977799    \n"+
    "    9977797777979777999     9999     9997779797777977799    \n"+
    "    99777977779797777999            99977779797777977799    \n"+
    "    997779777797977779999          999977779797777977799    \n"+
    "    9977797777979777799999        9999977779797777977799    \n"+
    "    99777977779797777999999      99999977779797777977799    \n"+
    "    9977797777979777799999999999999999977779797777977799    \n"+
    "    9977797777979777799999999999999999977779797777977799    \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            ",
  shipspawn: [{x:-210,y:0},{x:210,y:0}],
  radar: {type:"box",width:10,height:18}},
  {name: "Waves", author: "Kirito", map:
    "9999    99999        99999        99999        99999    9999\n"+
    "9999    99999        99999        99999        99999    9999\n"+
    "9999    99999       99999997    79999999       99999    9999\n"+
    "9999    99999     66999999        99999966     99999    9999\n"+
    "9999    99999        99999        99999        99999    9999\n"+
    "9999   9999999       99999        99999       9999999   9999\n"+
    "9999  699999996      9999          9999      699999996  9999\n"+
    "9999    99999        9999          9999        99999    9999\n"+
    "99999   99999        9999          9999        99999   99999\n"+
    "999996  99999       99999          99999       99999  699999\n"+
    "999     9999        99999          99999        9999     999\n"+
    "999     9999        9999            9999        9999     999\n"+
    "99     9999         9999            9999         9999     99\n"+
    "99     9999        799997  6    6  799997        9999     99\n"+
    "99    799997        9999   6    6   9999        799997    99\n"+
    "99     9999         9999   6    6   9999         9999     99\n"+
    "99     9999         999   99    99   999         9999     99\n"+
    "99      9999         99  699    996  99         9999      99\n"+
    "99      9999             699    996             9999      99\n"+
    "99      9999             999    999             9999      99\n"+
    "99      9999             999    999             9999      99\n"+
    "99      99999            999    999            99999      99\n"+
    "99      99999            999    999            99999      99\n"+
    "99       9999           6999    9996           9999       99\n"+
    "99       9999           9999    9999           9999       99\n"+
    "99      799997         6999      9996         799997      99\n"+
    "99       9999          6999      9996          9999       99\n"+
    "99        99          6999        9996          99        99\n"+
    "99                    999          999                    99\n"+
    "99                    999          999                    99\n"+
    "99                    999          999                    99\n"+
    "99                    999          999                    99\n"+
    "99        99          6999        9996          99        99\n"+
    "99       9999          6999      9996          9999       99\n"+
    "99      799997         6999      9996         799997      99\n"+
    "99       9999           9999    9999           9999       99\n"+
    "99       9999           6999    9996           9999       99\n"+
    "99      99999            999    999            99999      99\n"+
    "99      99999            999    999            99999      99\n"+
    "99      9999             999    999             9999      99\n"+
    "99      9999             999    999             9999      99\n"+
    "99      9999             699    996             9999      99\n"+
    "99      9999         99  699    996  99         9999      99\n"+
    "99     9999         999   99    99   999         9999     99\n"+
    "99     9999         9999   6    6   9999         9999     99\n"+
    "99    799997        9999   6    6   9999        799997    99\n"+
    "99     9999        799997  6    6  799997        9999     99\n"+
    "99     9999         9999            9999         9999     99\n"+
    "999     9999        9999            9999        9999     999\n"+
    "999     9999        99999          99999        9999     999\n"+
    "999996  99999       99999          99999       99999  699999\n"+
    "99999   99999        9999          9999        99999   99999\n"+
    "9999    99999        9999          9999        99999    9999\n"+
    "9999  699999996      9999          9999      699999996  9999\n"+
    "9999   9999999       99999        99999       9999999   9999\n"+
    "9999    99999        99999        99999        99999    9999\n"+
    "9999    99999     66999999        99999966     99999    9999\n"+
    "9999    99999       99999997    79999999       99999    9999\n"+
    "9999    99999        99999        99999        99999    9999\n"+
    "9999    99999        99999        99999        99999    9999", 
  shipspawn: [{x:-190,y:0},{x:190,y:0}],
  radar: {type:"box",width:10,height:10}},
  {name: "Slides", author: "Healer", map: 
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "9          999999999999999999  999999999999999999          9\n"+
    "9  9999999999              99  999     999     999   999   9\n"+
    "9 99999999                  9  9999     999     999   999  9\n"+
    "9 999                       9  99999     999     999   999 9\n"+
    "9 99                    9   9  9 9999     999     999   99 9\n"+
    "9 99          9        99   9  9  9999     999     999   9 9\n"+
    "9 99         99       999   9  9   9999     999     999    9\n"+
    "9 99        99       999    9  9    9999     999     999   9\n"+
    "9 99       999      999     9  9     9999     999     999  9\n"+
    "9 9       999      999      9  9      9999     999     999 9\n"+
    "9 9      999      999       9  9       9999     999     99 9\n"+
    "999     999      999         9 99       9999     999     999\n"+
    "99     999                    9999       9999     999     99\n"+
    "99    99      99               9999       9999     999    99\n"+
    "99            99                9999       9999     999   99\n"+
    "99                               9999       9999     999  99\n"+
    "99          9                     9999       9999     999 99\n"+
    "99         99        9999          9999       9999     99999\n"+
    "99        999       9999            9999       9999     9999\n"+
    "99       999       9999              9999       9999     999\n"+
    "99      999       9999                9999       9999     99\n"+
    "99     999        999                  9999       9999    99\n"+
    "99    999         99        9999        9999       9999   99\n"+
    "99   999          9                      9999       9999  99\n"+
    "99                                        9999       9999 99\n"+
    "99                                         9999       999999\n"+
    "999                        9    9           9999       99999\n"+
    "999999999999           9    9  9    9        999999999999999\n"+
    "          999          9     99     9         9999          \n"+
    "           999         9     99     9          999          \n"+
    "999999999999999        9    9  9    9           999999999999\n"+
    "99999       9999           9    9                        999\n"+
    "999999       9999                                         99\n"+
    "99 9999       9999                                        99\n"+
    "99  9999       9999                      9          999   99\n"+
    "99   9999       9999        9999        99         999    99\n"+
    "99    9999       9999                  999        999     99\n"+
    "999    9999       9999                9999       999      99\n"+
    "9999    9999       9999              9999       999       99\n"+
    "99999    9999       9999            9999       999        99\n"+
    "999999    9999       9999          9999        99         99\n"+
    "99 9999    9999       9999                     9          99\n"+
    "99  9999    9999       9999                               99\n"+
    "99   9999    9999       9999                99            99\n"+
    "99    9999    9999       9999               99      99    99\n"+
    "999    9999    9999       9999                    999     99\n"+
    "9999    9999    9999       9999         999      999     999\n"+
    "99999    9999    9999       9999       999      999      9 9\n"+
    "9 9999    9999    9999      9999      999      999       9 9\n"+
    "9  9999    9999    9999     9 99     999      999       99 9\n"+
    "9   9999    9999    9999    9  9    999       99        99 9\n"+
    "9    9999    9999    9999   9  9   999       99         99 9\n"+
    "9 9   9999    9999    9999  9  9   99        9          99 9\n"+
    "9 99   9999    9999    9999 9  9   9                    99 9\n"+
    "9 999   9999    9999    99999  9                       999 9\n"+
    "9  999   9999    9999    9999  9                  99999999 9\n"+
    "9   999   9999    9999    999  99              9999999999  9\n"+
    "9          999999999999999999  999999999999999999          9\n"+
    "999999999999999999999999999999999999999999999999999999999999",
  shipspawn: [{x:-220,y:-220},{x:220,y:220}],
  radar: {type:"box",width:8,height:8}},
  {name: "Boxes 2.0", author: "EDEN", map:   
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    " 9999999999999999999999999999999999999999999999999999999999 \n"+
    " 9999999999999999999999999999999999999999999999999999999999 \n"+
    " 99999999999                                    99999999999 \n"+
    " 9999999999                                      9999999999 \n"+
    " 9999999999    999999999999      999999999999    9999999999 \n"+
    " 9999999999   99999999999999    99999999999999   9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 999999999    999999999999999  999999999999999    999999999 \n"+
    " 999999999     99999999999999  99999999999999     999999999 \n"+
    " 999                       99  99                       999 \n"+
    " 99                       999  999                       99 \n"+
    " 99                      999    999                      99 \n"+
    " 99                     999      999                     99 \n"+
    " 99                    999        999                    99 \n"+
    " 99                    999        999                    99 \n"+
    " 99                    9999      9999                    99 \n"+
    " 99                   999999    999999                   99 \n"+
    " 99                9999999999  9999999999                99 \n"+
    " 99               99999999999  99999999999               99 \n"+
    " 99              999999999999  999999999999              99 \n"+
    " 99             999  99999999  99999999  999             99 \n"+
    " 99      9     999    999999    999999    999     9      99 \n"+
    " 99      99   999      9999      9999      999   99      99 \n"+
    " 99      99                  99                  99      99 \n"+
    " 99      99                  99                  99      99 \n"+
    " 99      99   999      9999      9999      999   99      99 \n"+
    " 99      9     999    999999    999999    999     9      99 \n"+
    " 99             999  99999999  99999999  999             99 \n"+
    " 99              999999999999  999999999999              99 \n"+
    " 99               99999999999  99999999999               99 \n"+
    " 99                9999999999  9999999999                99 \n"+
    " 99                   999999    999999                   99 \n"+
    " 99                    9999      9999                    99 \n"+
    " 99                    999        999                    99 \n"+
    " 99                    999        999                    99 \n"+
    " 99                     999      999                     99 \n"+
    " 99                      999    999                      99 \n"+
    " 99                       999  999                       99 \n"+
    " 999                       99  99                       999 \n"+
    " 999999999     99999999999999  99999999999999     999999999 \n"+
    " 999999999    999999999999999  999999999999999    999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999  9999999999999999  9999999999999999  9999999999 \n"+
    " 9999999999   99999999999999    99999999999999   9999999999 \n"+
    " 9999999999    999999999999      999999999999    9999999999 \n"+
    " 9999999999                                      9999999999 \n"+
    " 99999999999                                    99999999999 \n"+
    " 9999999999999999999999999999999999999999999999999999999999 \n"+
    " 9999999999999999999999999999999999999999999999999999999999 \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            ",
  shipspawn: [{x:-235,y:0},{x:235,y:0}],
  radar: {type:"box",width:8,height:12}},
  {name: "Atoms", author: "45rfew", map:
    "                                                            \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                               99999        \n"+
    "                                             9999999999     \n"+
    "                                            9999999999999   \n"+
    "                                            99999999999999  \n"+
    "                                            999      99999  \n"+
    "                                           9999       9999  \n"+
    "                                          9999         999  \n"+
    "                                          9999         999  \n"+
    "                                         99999         999  \n"+
    "                                        999999         999  \n"+
    "                                       999999          999  \n"+
    "                                      999999          9999  \n"+
    "                       99  9    99  9999999    9     9999   \n"+
    "                      99  99999999  999999    99999999999   \n"+
    "                     99   999999999999999    9999999999     \n"+
    "                    999  999999999999999    9999999         \n"+
    "                    9999999999999999999    999999           \n"+
    "                   9999999999999999999    9999999           \n"+
    "                   999999999999999999    999999             \n"+
    "                  999999999      999    9999999             \n"+
    "                  999999               999999               \n"+
    "                  99999               999999                \n"+
    "                  99999              9999999                \n"+
    "                  99999              999999                 \n"+
    "                 99999                99999                 \n"+
    "                 99999                99999                 \n"+
    "                 99999                99999                 \n"+
    "                 99999                9999                  \n"+
    "                 99999                9999                  \n"+
    "                 99999                9999                  \n"+
    "                 999999               9999                  \n"+
    "                 999999              99999                  \n"+
    "            9   999999               99999                  \n"+
    "           9  9999999               999999                  \n"+
    "         999 9999999    999       9999999                   \n"+
    "        999 9999999    9999999999999999                     \n"+
    "        9999999999    9999999999999999                      \n"+
    "    9999999999999    99999999999999                         \n"+
    "    999999999999    99999999999999                          \n"+
    "   999999999999    99999999                                 \n"+
    "   99999999999    99999                                     \n"+
    "  99999     9    99999                                      \n"+
    "  9999          99999                                       \n"+
    "  999          999999                                       \n"+
    "  999         999999                                        \n"+
    "  999         999999                                        \n"+
    "  999         99999                                         \n"+
    "  999         99999                                         \n"+
    "  9999       999999                                         \n"+
    "  99999      999999                                         \n"+
    "   9999999999999999                                         \n"+
    "    9999999999999                                           \n"+
    "     999999999999                                           \n"+
    "        999999                                              \n"+
    "                                                            \n"+
    "                                                            \n"+
    "                                                            ",
  shipspawn: [{x:-204,y:185},{x:204,y:-185}],
  radar: {type:"round",width:15,height:15}},  
  {name: "Rammer's Paradise", author: "Destroy", map:   
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999    9       9    9999999999999999999999\n"+
    "999999999999999999999   999     999    999999999999999999999\n"+
    "99999999999               999  99              9999999999999\n"+
    "99999999999                 9  9               9999999999999\n"+
    "99999                     999  999                     99999\n"+
    "9999                   9999      9999                   9999\n"+
    "999                    9            9                    999\n"+
    "999             9     99            99     9             999\n"+
    "999             99999999            99999999             999\n"+
    "999             9      9999      9999      9             999\n"+
    "9999            9         9      9         9            9999\n"+
    "99999           9         9      9         9           99999\n"+
    "9999999999999   9         9      9         9    999999999999\n"+
    "9999999999999   9         9      9         9    999999999999\n"+
    "9999999999999   9         9      9        99    999999999999\n"+
    "9999999999999   99        9      9              999999999999\n"+
    "9999999999999             9      9              999999999999\n"+
    "9999999999999             9      9              888888899999\n"+
    "9999999                   9      9                   9899999\n"+
    "999999                  999      999                  899999\n"+
    "999999                 99          99                 899999\n"+
    "999999                 9            9                 899999\n"+
    "999999          99     9            9     99          899999\n"+
    "999999          9      9            9      9          899999\n"+
    "999999          9      9            9      9          899999\n"+
    "999999          9      99          99      9          899999\n"+
    "999999          9                          9          899999\n"+
    "9999999         9                          9         9899999\n"+
    "999999999999    9                          9   8899889999999\n"+
    "999999999999    999999999          999999999   8999999999999\n"+
    "999999999999    9      9            9      9   8999999999999\n"+
    "999999999999           9            9          8999999999999\n"+
    "999999999999           9            9          8999999999999\n"+
    "999999999999           9            9          9999999999999\n"+
    "99999                  9            9                  99999\n"+
    "999                    99          99                    999\n"+
    "999                    99999    99999                    999\n"+
    "999             9      9            9      9             999\n"+
    "999             99999999            99999999             999\n"+
    "999             9      9            9      9             999\n"+
    "999                    9            9                    999\n"+
    "9999                   99999    99999                   9999\n"+
    "99999999999              999    999             999999999999\n"+
    "99999999999              999    999            9999999999999\n"+
    "999999999999999999999     99    99     999999999999999999999\n"+
    "999999999999999999999      9    9     9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999                 9999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999",  
  shipspawn: [{x:0,y:-255},{x:0,y:255}],
  radar: {type:"box",width:13,height:7}} 
];

maps[0].basedmg = [{x:-185,x2:-230,y:40,y2:-40},{x:185,x2:230,y:40,y2:-40}];
maps[1].basedmg = [{x:-165,x2:-215,y:25,y2:-25},{x:165,x2:215,y:25,y2:-25}];
maps[2].basedmg = [{x:-200,x2:-235,y:200,y2:240},{x:200,x2:235,y:-200,y2:-240}];
maps[3].basedmg = [{x:-212,x2:-254,y:30,y2:-30},{x:212,x2:254,y:30,y2:-30}];
maps[4].basedmg = [{x:-175,x2:-230,y:-150,y2:-215},{x:175,x2:230,y:150,y2:215}];
maps[5].basedmg = [{x:-30,x2:30,y:240,y2:270},{x:-30,x2:30,y:-240,y2:-270}];
let map_id = ~~(Math.random()*maps.length);
let map = maps[map_id];
let custommap = map.map, mapname = map.name, mapauthor = map.author;

this.options = {
  vocabulary: vocabulary,
  custom_map: custommap,
  soundtrack: music[~~(Math.random()*music.length)],
  weapons_store: false,
  friendly_colors: 2,
  radar_zoom: 1,
  map_size: modifier.map_size,
  starting_ship: 801,
  crystal_value: modifier.crystal_value,
  speed_mod: 1.2,
  max_players: modifier.max_players,
  max_level: modifier.round_ship_tier,
  ships: ships,
  choose_ship: chooseships,
  release_crystal: modifier.yeet_gems,
  healing_ratio: 0.5,
  hues: [colors[0].hue,colors[0].hue2],
  asteroids_strength: 4,
  crystal_drop: 0,
  max_level: 1
};

var update = 1;
var delay = 1*3600;
this.tick = function(game){
  if (game.step === delay){
    checkscores(game);
    updatescoreboard(game);
    setTimeout(function(){game.setUIComponent({id:"delay time",visible:false});},100);  
    for (let ship of game.ships){
      ship.set({idle:false});
      ship.setUIComponent({id:"delay",visible:false}); 
      if (ship.custom.wait){
        ship.custom.wait = false;
        joinmessage(ship);
      }        
    }
  }
  if (game.step % 30 === 0){
    teams.count = [0,0];      
    for (let ship of game.ships){
      if (!ship.custom.lol){
        ship.custom.lol = true;
        ship.frags = 0;
        ship.deaths = 0; 
        setteam(ship); 
        setup(ship);
        ship.setUIComponent(radar_background);
        echo(`${ship.name} spawned`);  
        if (!game.custom.delayed){
          game.custom.delayed = true;
          delay += game.step;
        }    
        if (game.step > delay){
          joinmessage(ship);}        
        else {ship.custom.wait = true;}
      } teams.count[ship.custom.team]++;
      (ship.score != ship.frags) && ship.set({score:ship.frags});
    }
    if (game.step < delay){
      for (let ship of game.ships){
        ship.set({idle:true});
        ship.setUIComponent({
          id: "delay",
          position: [39,18,42,40],
          visible: true,
          components: [
            {type: "text",position:[2,5,80/1.5,33/1.5],value:"Waiting for more players...",color:"#cde"},
          ]
        });                
        ship.setUIComponent({
          id: "scoreboard",
          visible: true,
          components: [
            {type: "text",position:[15,0,70,10],value:"Waiting for more players...",color:"#cde"},
          ]
        });
      }
    } 
    for (let i=0; i<2; i++){
      if (teams.points[i] >= modifier.kills_to_win){
        game.setUIComponent({
          id: "end",
          position: [39,18,42,40],
          visible: true,
          components: [{type: "text",position:[2,5,80/1.5,33/1.5],value:`${teams.names[i]} team wins!`,color:"#cde"}]
        });  
        setTimeout(function(){
          for (let ship of game.ships){
            ship.gameover({"Winner":`${teams.names[i]} team`,"Frags":ship.frags,"Deaths":ship.deaths});
          }
        }, 5000);
        if (!game.custom.echo){
          game.custom.echo = true;
          echo(`${teams.names[i]} team wins!`);
        }
      }
    }
    let time = delay+modifier.round_timer*3600;
    if (game.step < time){
      if (game.step > delay){
        let steps = time - game.step;
        let minutes = ~~(steps / 3600);
        let seconds = ~~((steps % 3600) / 60);
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        game.setUIComponent({
          id: "timer",
          position: [2.5,28,15,10],
          visible: true,
          components: [
            {type: "text",position:[0,0,100,50],value:`Time left: ${minutes}:${seconds}`,color:"#cde"},
          ]
        });
      } else {
        if (game.custom.delayed){
          let steps = delay - game.step;
          let minutes = ~~(steps / 3600);
          let seconds = ~~((steps % 3600) / 60);
          if (seconds < 10) seconds = "0" + seconds;
          game.setUIComponent({
            id: "delay time",
            position: [45.7,26,10,7],
            visible: true,
            components: [
              {type: "text",position:[0,0,100,50],value:`${minutes}:${seconds}`,color:"#cde"},
            ]
          });        
        }     
      }
    } else {
      game.setUIComponent({
        id: "timer",
        position: [2.5,28,15,10],
        visible: true,
        components: [
          {type: "text",position:[0,0,100,50],value:`Time's up!`,color:"#cde"},
        ]
      });
      let win,text;
      if (teams.points[0] != teams.points[1]){
        win = teams.points.indexOf(Math.max(...teams.points));
        text = `${teams.names[win]} team wins!`;
      } else text = "It's a draw!"; 
      game.setUIComponent({
        id: "end",
        position: [39,18,42,40],
        visible: true,
        components: [{type:"text",position:[2,5,80/1.5,33/1.5],value:text,color:"#cde"}]
      });    
      setTimeout(function(){
        for (let ship of game.ships)
        ship.gameover({"":text,"Frags:":ship.frags,"Deaths:":ship.deaths});
      }, 5000);
      if (!game.custom.echo){
        game.custom.echo = true;
        echo(text);
      }
    }       
  }
  if (game.step === 0){ 
    echo("Round tier: "+modifier.round_ship_tier); echo("Map: "+mapname);
    //if (isNaN(modifier.round_ship_tier)){
    //  game.modding.terminal.echo("Mod fucked up",{finalize: function($div){ 
     //   $div.children().last().append('<br><img src="https://media1.tenor.com/images/56311458a054ab7e72f60d797f5c625c/tenor.gif?itemid=14139731">');
    //  }});
    //  game.modding.I1I0I.send({name:"stop"});
    //}
  }
  if (update){
    checkscores(game);
    ///updatescoreboard(game);
    update = 0;
  }
  if (game.step % 60 === 0){ 
    checkteambase(game)
    updatescoreboard(game);
  }    
};      

game.modding.tick = function(t){
  this.game.tick(t); if (this.context.tick != null) this.context.tick(this.game);
};
 
var radar_background = {
  id: "radar_background",
  components: [],
};
 
var scale_pos = 100 / (this.options.map_size * 10);
var scale_size = 50 / this.options.map_size;

function addRadarSpot (x, y, type, width, height, alpha, color){
  radar_background.components.push({
    type: type,
    position: [
      50+x*scale_pos-width*scale_size/2,
      50+y*scale_pos-height*scale_size/2,
      width*scale_size, height*scale_size,
    ],
    fill:`hsla(${color},100%,50%,${alpha})`,
  });
}

for (let i=0; i<2; i++){
  addRadarSpot(maps[map_id].shipspawn[i].x,maps[map_id].shipspawn[i].y,map.radar.type,map.radar.width,map.radar.height,.3,teams.hues[i]); 
  addRadarSpot(maps[map_id].shipspawn[i].x,maps[map_id].shipspawn[i].y,map.radar.type,map.radar.width-2,map.radar.height-2,.2,teams.hues[i]); 
}

function setup(ship){
  let level = Math.trunc(ship.type/100); //level = (level<4)?4:level;
  let gems = ((modifier.round_ship_tier**2)*20)/1.5;
  let x = maps[map_id].shipspawn[ship.custom.team].x,
  y = maps[map_id].shipspawn[Math.abs(ship.custom.team-1)].y;
  ship.set({x:x,y:y,stats:88888888,invulnerable:600,shield:999,crystals:gems});
}

function setteam(ship){
  let t;
  if ([...new Set(teams.count)].length == 1) t=teams.points.indexOf(Math.min(...teams.points));
  else t = teams.count.indexOf(Math.min(...teams.count));
  ship.custom.team = t;
  configship(ship, t);
  echo(teams.count);
}

function configship(ship,t){
  ship.set({hue:teams.hues[t],team:t,invulnerable:600,stats:88888888});
}

function rekt(ship,num){
  if (ship.shield<num){
    let val=ship.crystals + ship.shield;
    if (val < num) ship.set({kill:true});
    else ship.set({crystals:val-num,shield:0});
  }
  else ship.set({shield:ship.shield-num});
}

function isRange(a,b,c){
  return Math.min(a,b) <= c && c <= Math.max(a,b)
}

function checkteambase(game){
  for (let ship of game.ships){
    let u=1-ship.custom.team;
    let x = maps[map_id].basedmg[u];
    let y = maps[map_id].basedmg[u];
    if (isRange(x.x,x.x2,ship.x) && isRange(y.y,y.y2,ship.y)) rekt(ship,15*Math.trunc(ship.type/100));
  }
}

var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
}; 

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}

function PlayerBox(posx,posy) {
  return {type:"box",position:[posx,posy-1.8,50,7],fill:"rgb(56,74,92,0.5)",width:2};
}
 
function Tag(indtext,param,posx,posy,hex,al,size) {
  let obj= {type: indtext,position: [posx,posy-0.5,50-(size||0),5],color: hex,align:al};
  switch(indtext) {
    case "text":
      obj.value=param;
      break;
    case "player":
      obj.id=param;
    break;
  }
  return obj;
}
 
function sort(arr){
  let array=[...arr],i=0;
  while (i<array.length-1) {
    if (array[i].frags<array[i+1].frags) {
      array[i+1]=[array[i],array[i]=array[i+1]][0];
      if (i>0) i-=2;
    }
    i++;
  }
  return array;
}
 
function updatescoreboard(game){
  if (game.step >= delay){
    let t=[[],[]];
    for (let ship of game.ships) t[ship.team].push(ship);
    scoreboard.components = [
      { type:"box",position:[0,0,50,8],fill:getcolor(teams.hues[0])},
      { type: "text",position: [0,0,50,8],color:"#e5e5e5",value: teams.names[0]},
      { type:"box",position:[50,0,50,8],fill:getcolor(teams.hues[1])},
      { type: "text",position: [50,0,50,8],color:"#e5e5e5",value: teams.names[1]}
    ];
    let sc=[sort(t[0]),sort(t[1])],line=1;
    sc[0].slice(10);sc[1].slice(10);
    for (let i=0;i<10;i++){
      for (let j=0;j<2;j++){
        if (sc[j][i]) scoreboard.components.push(
          new Tag("text",sc[j][i].frags,j*50,line*10,"#cde","right",2),
          new Tag("player",sc[j][i].id,j*50,line*10,"#cde","left")
        );
        else scoreboard.components.push({},{});
      }
      line++;
    }
    outputscoreboard(game,sc);
  }
}
 
function outputscoreboard(game,tm){
  let origin =[...scoreboard.components];
  for (let ship of game.ships){
    let j=0,team=tm[ship.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        scoreboard.components.splice((j*2+ship.team)*2+4,0,
          new PlayerBox(ship.team*50,(j+1)*10)  
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.team)*2,2,
      new PlayerBox(ship.team*50,90),
      new Tag("text",ship.frags,ship.team*50,90,ship.team,"right",2),
      new Tag("player",ship.id,ship.team*50,90,ship.team,"left")
    );
    ship.setUIComponent(scoreboard);
    scoreboard.components = [...origin];
  }
}

function checkscores(game){
  if (game.step >= delay)
  game.setUIComponent({
    id: "scores",
    position: [34,10,42,40],
    visible: true,
    components: [
      {type: "text",position:[2,5,80/1.5,33/1.5],value:teams.points[0],color:getcolor(teams.hues[0])},
      {type: "text",position:[0,0,80,33],value:"-",color:"#CDE"},
      {type: "text",position:[25,5,80/1.5,33/1.5],value:teams.points[1],color:getcolor(teams.hues[1])},
    ]
  });
}

function joinmessage(ship){
  ship.setUIComponent({
    id: "yeet",
    position: [36,16,34,32],
    visible: true,
    components: [
      {type: "text",position:[0,0,85+3,38+3],value:`First team to ${modifier.kills_to_win} kills wins`,color:"#cde"},
      {type: "text",position:[5.5,20,80-4,33-4],value:"Good luck and have fun!",color:"#cde"},
    ]
  });      
  ship.setUIComponent({
    id: "map info",
    position: [2,88,24,22],
    visible: true,
    components: [
      {type: "text",position:[0,0,100,50],value:`Map: ${mapname} by ${mapauthor}`,color:"#cde"},
    ]
  });        
  setTimeout(function(){  
    ship.setUIComponent({id:"yeet",visible:false});
  },8000);
}

function checkButtons(ship){
  if (!ship.custom.buttons){
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({id:"heal",visible:false});  
    for (let i=0;i<3;i++){ ship.setUIComponent({id:ship.custom.rand[i],visible:false});}
    ship.setUIComponent({id:"close",visible:false});
  }
}

function optionopenmenu(ship){
  addShipSelection(ship);
  ship.custom.rand = shuffle(ship_name);
  (modifier.healer_button) && confighealing(ship);
  echo("Opened");
  setTimeout(function(){  
    ship.custom.buttons = false;
    checkButtons(ship);
  },9000);    
}

function confighealing(ship) {
  ship.setUIComponent({
    id: "heal",
    position: [3,42,16,20/2],
    visible: true,
    clickable: true,
    shortcut: "J",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[6,4,88/1.2,40/1.2*2],value:`${(ship.healing)?"Attacker":"Healer"} [J]`,color:"#cde"},
    ]
  });
}

function addMenu(ship){
  let shortcut = ["I","M","B"];
  for (let i=0; i<3; i++){
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({
      id: ship.custom.rand[i],
      position: [36,26+i*7,34,18/2],
      visible: true,
      clickable: true,
      shortcut: shortcut[i],
      components: [
        {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
        {type: "text",position:[0,4,88/1.2,40/1.2*2],value:`${ship.custom.rand[i]} [${shortcut[i]}]`,color:"#cde"},
      ]
    });
  }
}

function drawmenu(ship){
  addMenu(ship);
  ship.setUIComponent({
    id: "close",
    position: [43,26+4*7,34/2,18/2],
    visible: true,
    clickable: true,
    shortcut: "L",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[0,4,88/1.2,40/1.2*2],value:"Close [L]",color:"#cde"},
    ]
  });   
}

function addShipSelection(ship){
  ship.setUIComponent({
    id: "open",
    position: [3,33,16,20/2],
    visible: true,
    clickable: true,
    shortcut: "W",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[6,4,88/1.2,40/1.2*2],value:"Select ship [W]",color:"#cde"},
    ]
  });   
}

function removemenu(ship){
  for (let i=0; i<ship_name.length; i++){
    ship.setUIComponent({id:ship_name[i],visible:false});    
  }
  ship.setUIComponent({id:"close",visible:false});
}

/*lOlO0.prototype.shipDisconnected = function(t){
  var e=this.modding.game.findShip(t.id);
  if (e != null) {
    this.context.event != null && this.context.event({name:"ship_disconnected",ship:e},this.modding.game);
    return e.lI101 = !0;
  }
};*/

this.event = function(event, game){
  let ship = event.ship;
  switch (event.name){
    case "ship_destroyed":
      let killer = event.killer;
      if (killer != null) {
        teams.points[killer.team]++;
        killer.frags++;
        echo(`${killer.name} killed ${ship.name}`);
      } else {
        echo(ship.name + " killed themselves");
        teams.points[Math.abs(ship.team-1)]++;
      }
      ship.deaths++;
      update = 1;
      ship.custom.hasbeenkilled = true;
      echo(`${teams.names[0]}:${teams.points[0]},${teams.names[1]}:${teams.points[1]}`);
    break;
    case "ship_spawned":
      if (ship.custom.hasbeenkilled === true){
        ship.custom.buttons = true;
        optionopenmenu(ship);
        ship.custom.hasbeenkilled = false;
      }
      setup(ship);
      update = 1;
      break;
    //case "ship_disconnected":
    //  update = 1;
    //  break;
    case "ui_component_clicked":
      let component = event.id;
      switch (component){
        case "open": drawmenu(ship); break;
        case "heal": confighealing(ship);ship.set({healing:!ship.healing}); 
          ship.setUIComponent({id:"heal",visible:false}); break;
        case "close": removemenu(ship);addShipSelection(ship); break;
        default:
          ship.set({type:findShipCode(component),stats:88888888,shield:999});
          removemenu(ship);
        break;
      }
      checkButtons(ship);
    break;  
  }
};

var cube = {
  id: "cube",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/smol.png",
  transparent: false,
  physics: {
    mass: 100,
    shape: [2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.308,3.048,2.878,2.759,2.697,2.697,2.759,2.878,3.048,3.308,3.672,3.678,3.474,3.169,2.958,2.806,2.723,2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.307,3.054,2.878,2.761,2.698,2.698,2.761,2.878,3.054,3.307,3.672,3.678,3.474,3.169,2.958,2.806,2.723],
    fixed: true
  }
};

function addcube(x,y,w,h,z){
  game.setObject({
    id: "cube"+x+"-"+y,
    type: cube,
    position: {x:x,y:y,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:w,y:h,z:z}
  });
}

let map_size = 60;
if (map_id === 0){
  for (let i=-map_size*5;i<map_size*5;i+=40){
    addcube(map_size*5,i,8,8,8);
    addcube(-map_size*5,i,8,8,8);
    addcube(i,map_size*5,8,8,8);
    addcube(i,-map_size*5,8,8,8);  
  }
} else if (map_id === 1){} else if (map_id === 2){
} else if (map_id === 3){
  for (let i=-map_size*5;i<map_size*5;i+=40){
    addcube(map_size*5,i/2,4,4,4);
    addcube(-map_size*5,i/2,4,4,4);
    addcube(i,map_size*5,8,8,8);
    addcube(i,-map_size*5,8,8,8);  
  }  
} else if (map_id === 4){
   for (let i=-map_size*5;i<map_size*5;i+=40){
    addcube(map_size*5,i/2,4,4,4);
    addcube(-map_size*5,i/2,4,4,4);
    addcube(i,map_size*5,8,8,8);
    addcube(i,-map_size*5,8,8,8);  
  }   
} else if (map_id === 5){  
  for (let i=-map_size*5;i<map_size*5;i+=40){
    addcube(map_size*5,i/2,4,4,4);
    addcube(-map_size*5,i/2,4,4,4);
    addcube(i/2,map_size*5,8,4,4);
    addcube(i/2,-map_size*5,8,4,4);  
  }  
}

var tree = {
  id: "tree",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Tree.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/green.png",
};

var present = {
  id: "present",
  obj: "https://starblast.data.neuronality.com/models/xmas/gift/model.obj",
  diffuse: "https://starblast.data.neuronality.com/models/xmas/gift/lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/xmas/gift/emissive.jpg",
  specular: "https://starblast.data.neuronality.com/models/xmas/gift/specular.jpg"
};

var pumpkin = {
  id: "pumpkin",
  obj: "https://starblast.data.neuronality.com/models/halloween/pumpkin/model.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/pumpkin%20lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/halloween/pumpkin/emissive.jpg",
};

var alien = {
  id: "alien",
  obj: "https://starblast.data.neuronality.com/models/aliens/10/model.obj",
  diffuse: "https://starblast.data.neuronality.com/models/aliens/10/lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/aliens/10/emissive.jpg",
  emissiveColor: 0xff0000,
  transparent: false,
};

if (map_id === 0 && modifier.laggy_objs){
  game.setObject({
    id: "tree",
    type: tree,
    position: {x:0,y:0,z:-13},
    rotation: {x:Math.PI/2,y:0,z:0},
    scale: {x:5,y:5,z:5}
  }); 
  for (let i=0; i<6; i++){
    let th = (i/6)*Math.PI*2;
    let rd = 13;
    game.setObject({
      id: "present"+i,
      type: present,
      position: {x:Math.cos(th)*rd,y:Math.sin(th)*rd,z:-10},
      rotation: {x:0,y:0,z:Math.random()*Math.PI/2},
      scale: {x:2,y:2,z:2}
    }); 
  }
} else if (map_id === 1 && modifier.laggy_objs){
  let objx = [0,20,-16,-2,13,3,-11], objy = [0,5,-6,-22,-14,15,11], scale = [0,1.5,1.5,1.6,1.8,2,2];
  for (let i=0; i<7; i++){
    game.setObject({
      id: "pumpkin"+i,
      type: pumpkin,
      position: {x:objx[i],y:objy[i],z:-10/scale[i]},
      rotation: {x:Math.PI/2,y:Math.random()*Math.PI*2,z:(Math.random()*Math.PI)/8},
      scale: {x:6/scale[i],y:5/scale[i],z:6/scale[i]}
    }); 
  }
  game.setObject({
    id: "pumpkin",
    type: pumpkin,
    position: {x:0,y:0,z:-10},
    rotation: {x:Math.PI/2,y:Math.random()*Math.PI*2,z:0},
    scale: {x:6,y:5,z:6}
  }); 
  let alienx = [-18,11,18,-11], alieny = [5,11,-7,-16];
  for (let i=0; i<4; i++){
    game.setObject({
      id: "alien"+i,
      type: alien,
      position: {x:alienx[i],y:alieny[i],z:-10},
      rotation: {x:0,y:0,z:Math.PI/2+((Math.random() - 0.5)*2)/4},
      scale: {x:.4,y:.4,z:.4}
    });
  }
}

var removed_maps = [
  {name: "Alleyway", author: "Healer", map:  
    "999999989899998888989899998888898899998888888899998988889999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999                999                999                999\n"+
    "99                  999              999                  99\n"+
    "99                  99999999999999999999                  99\n"+
    "99                   999999999999999999                   99\n"+
    "999999                                                999999\n"+
    "999                                                      999\n"+
    "99      89998888    8888899  999999    88888   88999      99\n"+
    "99     899               99     99                998     99\n"+
    "99  9  8999              99      99              9998  9  99\n"+
    "99 8   88999            99        99            99988   9 99\n"+
    "9988   889999           9          9           999988   9999\n"+
    "9988   88999999        999                   99999988   9989\n"+
    "9988     9999 9        9999                  9 9999     9999\n"+
    "998       99   9      9999       99999      9   99       899\n"+
    "99                    999           99                    99\n"+
    "99                    99             9                    99\n"+
    "99                    9             99                    99\n"+
    "99                    99           999                    99\n"+
    "998       99   9      99999       9999      9   99       899\n"+
    "9988     9999 9                  9999        9 9999     9999\n"+
    "9988   88999998                   999        99999988   9989\n"+
    "9998   889999           9          9           999988   9999\n"+
    "99 9   88899            99        99            99988   9 99\n"+
    "99  9  8899              99      99              9998  9  99\n"+
    "99     999                99     99               999     99\n"+
    "99      99998   88888    999999  8888888    88888889      99\n"+
    "999                                                      999\n"+
    "999999                                                999999\n"+
    "99                   999999999999999999                   99\n"+
    "99                  99999999999999999999                  99\n"+
    "99                  999              999                  99\n"+
    "999                999                999                999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999999999999999999999999999999999999999999999999999999999999\n"+
    "999988889899989888999899998888888899998999888989998988889999",
  shipspawn: [{x:-235,y:0},{x:235,y:0}],
  radar: {type:"box",width:8,height:12}}
];
