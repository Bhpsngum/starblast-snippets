/* Tier 8 selection screen
Just change the level to 7.9 and everything will works!
with every t7s ships' editor code, place the property `next_t8s` like the `next` (but don't add the `next`!)
e.g 
  level: 7
  next_t8s: [791,792]
Have fun :D
*/

var Odyssey_701 = '{"name":"Odyssey","level":7,"model":1,"size":4,"next_t8s":[791,792],"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"tori":{"circle":{"segments":20,"radius":95,"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,40,45,10,12,30,30,40,30,0],"height":[0,20,25,25,10,12,25,25,20,10,0],"texture":[4,15,63,4,4,4,11,10,4,12]},"laser1":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"laser2":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":180,"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":0,"y":-115,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[6,6,6,10],"laser":{"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"error":0,"recoil":300}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"bumpers":{"section_segments":8,"offset":{"x":85,"y":20,"z":0},"position":{"x":[-5,0,5,10,5,0,-5],"y":[-85,-80,-40,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,5,0],"height":[0,20,35,35,25,15,0],"texture":[11,2,63,4,3],"angle":0},"toppropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true},"bottompropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true}},"wings":{"topjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[25],"position":[0,0,0,50],"texture":[1],"bump":{"position":10,"size":30}},"bottomjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[-25],"position":[0,0,0,50],"texture":[1],"bump":{"position":-10,"size":30}}},"typespec":{"name":"Odyssey","level":7,"model":1,"code":701,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"shape":[11.623,11.646,10.525,8.979,7.873,3.633,3.688,8.551,8.989,8.821,9.353,9.348,9.272,9.272,9.348,9.353,8.977,9.064,9.121,4.686,5.299,6.216,7.781,8.276,8.144,7.775,8.144,8.276,7.781,6.216,5.299,4.686,9.121,9.064,8.977,9.353,9.348,9.272,9.272,9.348,9.353,8.821,8.989,8.551,3.688,3.633,7.873,8.979,10.525,11.646],"lasers":[{"x":8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":8.8,"y":2.4,"z":0,"angle":180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":2.4,"z":0,"angle":-180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-11.6,"z":0,"angle":0,"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"spread":0,"error":0,"recoil":300}],"radius":11.646}}';
var Shadow_X_4_791 = '{"name":"Shadow X-4","level":7.9,"model":1,"size":4,"specs":{"shield":{"capacity":[650,650],"reload":[18,18]},"generator":{"capacity":[700,700],"reload":[220,220]},"ship":{"mass":550,"speed":[130,130],"rotation":[25,25],"acceleration":[55,55]}},"bodies":{"main":{"section_segments":16,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-138,-138,-76,-116,-118,-105,-70,-40,0,40,60,65,90,106,95],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,22,22,25,25,25,20,30,38,40,40,30,0],"height":[0,10,10,22,22,25,25,20,10,15,30,30,30,20,0],"texture":[3,3,4,13,3,12.8,4,63,3,4,4,18,13,17]},"main2":{"section_segments":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-120,-128,-115,-70,-40,0,40,60,65,90,106,95],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,22,25,25,25,20,30,38,40,40,30,0],"height":[0,22,25,25,20,10,15,30,30,30,20,0],"texture":[4,3,12.8,4,63,63,4,4,18,13,17],"propeller":true},"cockpit":{"section_segments":16,"offset":{"x":0,"y":-30,"z":17},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-50,-25,0,25,60,90,100,90],"z":[0,0,0,0,-10,-8,-10,-10]},"width":[0,10,15,10,20,15,10,0],"height":[0,15,17,10,18,15,10,0],"texture":[9,9,4,63,10,4]},"superchargers":{"section_segments":24,"offset":{"x":17,"y":-15,"z":-8},"position":{"x":[1,2,2,2,-17,-17,-8,-8,-8],"y":[-45,-40,-50,-40,50,80],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,12,17,17,10],"height":[0,5,12,16,16,8],"angle":0,"texture":[15.1,8,13,4,4,10,11,13,17]},"thrusters":{"section_segments":16,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-25,-20,-25,-15,0,10,15,30,43,57,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,10,13,15,15,15,17,22,22,15,0],"height":[0,3,10,13,15,15,15,17,22,20,13,0],"texture":[15.1,8,63,4,10,3,4,3,8,13,17],"propeller":true},"cannonsinner":{"section_segments":16,"offset":{"x":53,"y":-5,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-49,-40,-38,-5,-1],"z":[0,0,0,0,0,0,0,0]},"width":[0,1,2.5,2.5,1.5,3],"height":[0,1,2.5,2.5,1.5,3],"texture":[8,13,4,4,3,13],"angle":0.5,"laser":{"damage":[5,5],"rate":6,"type":1,"speed":[150,150],"number":1}},"cannonsouter":{"section_segments":16,"offset":{"x":90,"y":20,"z":3},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-49,-40,-38,-5,-1],"z":[0,0,0,0,0,0,0,0]},"width":[0,1,2.5,2.5,1.5,3],"height":[0,1,2.5,2.5,1.5,3],"texture":[8,13,4,4,3,13],"angle":1.5,"laser":{"damage":[5,5],"rate":5,"type":1,"speed":[150,150],"number":1}},"cannonbarrelA":{"section_segments":12,"offset":{"x":0,"y":-134,"z":15.5},"position":{"x":[0,0,0,0,0,0,0],"y":[25,0,2,10,80],"z":[0,0,0,0,0]},"width":[0,5,5,5,5],"height":[0,5,5,5,5],"texture":[3,13,8,4],"laser":{"damage":[22,22],"rate":10,"type":1,"speed":[130,130],"number":1,"error":0,"recoil":45},"propeller":true},"cannonbarrelB":{"section_segments":12,"offset":{"x":13,"y":-134,"z":8.5},"position":{"x":[0,0,0,0,0,0,0],"y":[25,0,2,10,80],"z":[0,0,0,0,0]},"width":[0,5,5,5,5],"height":[0,5,5,5,5],"texture":[3,13,8,4]},"cannonbarrelC":{"section_segments":12,"offset":{"x":15.5,"y":-134,"z":-4},"position":{"x":[0,0,0,0,0,0,0],"y":[25,0,2,10,80],"z":[0,0,0,0,0]},"width":[0,5,5,5,5],"height":[0,5,5,5,5],"texture":[3,13,8,4]},"cannonbarrelD":{"section_segments":12,"offset":{"x":7,"y":-134,"z":-14},"position":{"x":[0,0,0,0,0,0,0],"y":[25,0,2,10,80],"z":[0,0,0,0,0]},"width":[0,5,5,5,5],"height":[0,5,5,5,5],"texture":[3,13,8,4]},"sidecannons":{"section_segments":12,"offset":{"x":70,"y":-1,"z":10},"position":{"x":[0,0,0,0,0,0,-3],"y":[-10,-10,-30,-20,0,20,42],"z":[0,0,0,0,0,-5,-10]},"width":[0,5,5,7,9,8,0],"height":[0,5,5,7,9,8,0],"texture":[5,3,13,11,4,4],"angle":1,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[150,150],"number":1}},"thrusters2":{"section_segments":0,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-25,-15,0,10,15,30,43,57,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,13,15,15,15,17,22,22,15,0],"height":[0,10,13,15,15,15,17,22,20,13,0],"texture":[18,63,4,10,3,4,3,8,13,17],"propeller":true},"isee":{"vertical":true,"section_segments":8,"offset":{"x":55,"y":-15,"z":-20},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-15,0,15,30],"z":[-16,-8,0,8,16]},"width":[4,4,4,4,4],"height":[4,4,4,4,4],"texture":[3],"angle":100}},"wings":{"wing1":{"doubleside":true,"offset":{"x":10,"y":15,"z":0},"length":[75,10,20,8],"width":[80,50,60,35,45],"angle":[0,20,-5,0],"position":[-5,0,10,30,50],"texture":[4,4,4,63],"bump":{"position":-15,"size":15}},"triangle":{"doubleside":true,"offset":{"x":0,"y":-30,"z":0},"length":[100],"width":[70,30],"angle":[0],"position":[-10,50],"texture":[3.4],"bump":{"position":10,"size":10}},"frontfacingwings":{"length":[37],"width":[40,15],"angle":[30],"position":[0,-45],"texture":[4],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":10,"y":-10,"z":15}},"middlesides":{"doubleside":true,"offset":{"x":0,"y":30,"z":-1},"length":[95],"width":[100,40],"angle":[20],"position":[-50,50],"texture":[3],"bump":{"position":10,"size":10}},"josheywings":{"doubleside":true,"offset":{"x":0,"y":75,"z":-3},"length":[80],"width":[100,40],"angle":[-30],"position":[-50,50],"texture":[63],"bump":{"position":10,"size":10}}},"typespec":{"name":"Shadow X-4","level":7.9,"model":1,"code":791,"specs":{"shield":{"capacity":[650,650],"reload":[18,18]},"generator":{"capacity":[700,700],"reload":[220,220]},"ship":{"mass":550,"speed":[130,130],"rotation":[25,25],"acceleration":[55,55]}},"shape":[11.062,11.069,9.505,6.45,5.761,6.026,6.171,6.043,5.37,6.456,7.658,8.118,8.293,8.51,9.534,10.522,11.15,12.032,10.56,10.724,10.332,12.856,12.633,9.366,8.632,8.497,8.632,9.366,12.633,12.856,10.332,10.724,10.56,12.032,11.15,10.522,9.534,8.51,8.293,8.118,7.658,6.456,5.37,6.043,6.171,6.026,5.761,6.45,9.505,11.069],"lasers":[{"x":4.205,"y":-4.4,"z":-0.16,"angle":0.5,"damage":[5,5],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.205,"y":-4.4,"z":-0.16,"angle":-0.5,"damage":[5,5],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":7.095,"y":-2.399,"z":0.24,"angle":1.5,"damage":[5,5],"rate":5,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-7.095,"y":-2.399,"z":0.24,"angle":-1.5,"damage":[5,5],"rate":5,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-10.72,"z":1.24,"angle":0,"damage":[22,22],"rate":10,"type":1,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":45},{"x":5.558,"y":-2.48,"z":0.8,"angle":1,"damage":[15,15],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.558,"y":-2.48,"z":0.8,"angle":-1,"damage":[15,15],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":12.856}}';
var Shadow_X_3_702 = '{"name":"Shadow X-3","level":7,"model":2,"size":3,"next_t8s":[791,792],"specs":{"shield":{"capacity":[400,400],"reload":[10,10]},"generator":{"capacity":[250,250],"reload":[45,45]},"ship":{"mass":350,"speed":[140,140],"rotation":[35,35],"acceleration":[35,35]}},"bodies":{"main":{"section_segments":16,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,65,75,90,105,95],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,25,20,20,30,30,30,22,0],"height":[0,5,10,25,20,10,10,20,20,20,15,0],"texture":[8,3,12.8,4,63,63,4,4,8,13,17],"laser":{"damage":[225,225],"rate":1,"type":1,"speed":[200,200],"number":1,"error":0,"recoil":500},"propeller":true},"cockpit":{"section_segments":16,"offset":{"x":0,"y":-30,"z":17},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-50,-25,0,25,60,90,100,90],"z":[0,0,0,0,-10,-8,-10,-10]},"width":[0,10,15,10,20,15,10,0],"height":[0,15,20,10,10,5,10,0],"texture":[9,9,9,63,10,4]},"superchargers":{"section_segments":24,"offset":{"x":17,"y":-5,"z":-8},"position":{"x":[1,2,2,2,2,2,0,0,0],"y":[-45,-40,-50,-40,-20,0],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,12,17,20,10],"height":[0,5,12,16,16,3],"angle":0,"texture":[15.1,8,13,4,4,10,11,13,17]},"innerthruster":{"section_segments":16,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-25,-15,0,10,20,25,30,57,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,13,15,15,15,13,13,16,13,0],"height":[0,10,13,15,15,15,10,10,15,9,0],"texture":[18,63,4,10,3,4,3,18,13,17],"propeller":true},"outerthruster":{"section_segments":16,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-25,-15,0,10,20,25,3,57,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,13,15,15,15,15,17,14,12,0],"height":[0,10,13,15,15,15,10,10,15,9,0],"texture":[18,63,4,10,3,4,3,18,13,17],"propeller":true},"cannonsinner":{"section_segments":16,"offset":{"x":50,"y":-10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-49,-40,-38,-5,-1],"z":[0,0,0,0,0,0,0,0]},"width":[0,1,2.5,2.5,1.5,3],"height":[0,1,2.5,2.5,1.5,3],"texture":[8,13,4,10,10,13],"laser":{"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1}},"cannonsouter":{"section_segments":16,"offset":{"x":90,"y":20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-49,-40,-38,-5,-1],"z":[0,0,0,0,0,0,0,0]},"width":[0,1,2.5,2.5,1.5,3],"height":[0,1,2.5,2.5,1.5,3],"texture":[8,13,4,10,10,13],"laser":{"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1}}},"wings":{"wing1":{"doubleside":true,"offset":{"x":10,"y":0,"z":0},"length":[35,15,30,25],"width":[100,50,60,35,45],"angle":[-10,20,-5,0],"position":[0,0,10,30,-10],"texture":[4,4,4,4,4],"bump":{"position":-15,"size":15}}},"typespec":{"name":"Shadow X-3","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[400,400],"reload":[10,10]},"generator":{"capacity":[250,250],"reload":[45,45]},"ship":{"mass":350,"speed":[140,140],"rotation":[35,35],"acceleration":[35,35]}},"shape":[7.8,7.281,5.239,4.058,3.788,4.672,4.739,4.5,4.475,4.314,7.081,7.024,6.859,6.848,6.786,6.8,7.152,7.624,7.778,7.011,3.893,3.747,5.727,6.437,6.413,6.312,6.413,6.437,5.727,3.747,3.893,7.011,7.778,7.624,7.152,6.8,6.786,6.848,6.859,7.024,7.081,4.314,4.475,4.5,4.739,4.672,3.788,4.058,5.239,7.281],"lasers":[{"x":0,"y":-7.8,"z":0,"angle":0,"damage":[225,225],"rate":1,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":500},{"x":3,"y":-3.6,"z":-1.2,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3,"y":-3.6,"z":-1.2,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.4,"y":-1.8,"z":-1.2,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.4,"y":-1.8,"z":-1.2,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":7.8}}';
var Bastion_703 = '{"name":"Bastion","level":7,"model":3,"size":4,"next_t8s":[791,792],"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":50,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-50,-20,0,20,40,25],"z":[0,0,0,0,0,0,0]},"width":[0,5,22,18,16,15,0],"height":[0,2,12,16,16,15,0],"texture":[10,1,1,10,8,17],"propeller":true},"thrusters":{"section_segments":8,"offset":{"x":40,"y":43,"z":-24},"position":{"x":[0,0,0,0,0,0],"y":[-25,-20,0,20,40,30],"z":[0,0,0,0,0,0]},"width":[0,8,12,8,8,0],"height":[0,12,12,8,8,0],"texture":[63,2,2,2,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-10,0,11,35],"z":[-5,-3,-1,0,0]},"width":[0,5,10,10,0],"height":[0,3,5,7,0],"texture":[9]},"cannon1":{"section_segments":4,"offset":{"x":10,"y":-80,"z":1},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"laser":{"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1}},"cannon2":{"section_segments":4,"offset":{"x":42,"y":-129,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":3,"laser":{"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1}},"cannon3":{"section_segments":4,"offset":{"x":75,"y":-105,"z":-8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":5,"laser":{"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1}}},"wings":{"main1":{"doubleside":true,"offset":{"x":9,"y":15,"z":0},"length":[0,15,0,7],"width":[0,160,70,30,30],"angle":[0,20,0,-10],"position":[30,-20,30,30,30],"texture":[13,63,13,8],"bump":{"position":35,"size":5}},"main2":{"doubleside":true,"offset":{"x":30,"y":15,"z":0},"length":[0,15,0,20],"width":[0,80,90,200,30],"angle":[30,30,30,30],"position":[30,30,10,-45,30],"texture":[13,3,13,4],"bump":{"position":35,"size":7}},"main3":{"doubleside":true,"offset":{"x":0,"y":25,"z":-7},"length":[45,35,0,20],"width":[40,40,40,200,40],"angle":[-20,20,-20,-5],"position":[20,30,0,-30,10],"texture":[0,8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Bastion","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"shape":[4.056,7.244,11.603,11.152,9.19,10.943,9.896,9.163,8.149,7.735,7.473,7.332,7.401,7.615,7.85,8.175,8.679,8.889,9.155,9.588,9.692,7.67,7.338,6.661,7.299,7.214,7.299,6.661,7.338,7.67,9.692,9.588,9.155,8.889,8.679,8.175,7.85,7.615,7.401,7.332,7.473,7.735,8.149,9.163,9.896,10.943,9.19,11.152,11.603,7.244],"lasers":[{"x":0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.318,"y":-11.119,"z":0.64,"angle":3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.318,"y":-11.119,"z":0.64,"angle":-3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.93,"y":-9.197,"z":-0.64,"angle":5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.93,"y":-9.197,"z":-0.64,"angle":-5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":11.603}}';
var Aries_704 = '{"name":"Aries","level":7,"model":4,"size":4.5,"next_t8s":[791,792],"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"bodies":{"arm":{"section_segments":6,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90,85],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,15,20,20,15,0],"height":[0,10,12,8,12,12,8,12,10,5,0],"texture":[4,63,4,4,4,4,4,63,3],"propeller":true},"arm45":{"section_segments":6,"angle":45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm90":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm135":{"section_segments":6,"angle":-45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":20,"offset":{"x":0,"y":-10,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-35,-25,-15,0,15,25,35,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,20,25,20,10,15,15,0],"height":[0,10,13,15,15,15,12,10,0],"texture":[6,15,15,1,4,3,3,15]},"topcockpit":{"section_segments":16,"offset":{"x":0,"y":-23,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-63,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-25,-30,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"laser":{"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"error":0}},"sidecannons":{"section_segments":6,"offset":{"x":45,"y":-45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":-45,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}},"backsidecannons":{"section_segments":6,"offset":{"x":45,"y":45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":225,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}}},"wings":{"side_joins":{"offset":{"x":0,"y":0,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[1,11],"bump":{"position":10,"size":20}}},"typespec":{"name":"Aries","level":7,"model":4,"code":704,"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"shape":[8.386,8.406,7.816,4.278,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,3.408,7.88,8.184,8.116,8.184,7.88,3.408,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,4.278,7.816,8.406],"lasers":[{"x":0,"y":-8.37,"z":0,"angle":0,"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":-5.959,"z":0.63,"angle":-45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":-5.959,"z":0.63,"angle":45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":5.959,"z":0.63,"angle":225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":5.959,"z":0.63,"angle":-225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":8.431}}';
var Fly_792 = '{"name":"Fly","level":7.9,"model":2,"size":4,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":7.9,"model":2,"code":792,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[5.21,5.212,4.162,3.676,3.364,3.151,3.011,2.921,2.887,2.959,3.227,3.622,4.16,6.349,6.503,6.767,7.069,6.96,6.644,6.426,5.808,5.392,5.086,6.119,6.108,6.012,6.108,6.119,5.086,5.392,5.808,6.426,6.644,6.96,7.069,6.767,6.503,6.349,6.303,3.622,3.227,2.959,2.887,2.921,3.011,3.151,3.364,3.676,4.162,5.212],"lasers":[{"x":0,"y":-5.2,"z":-0.8,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":7.069}}';

var ships=[];

ships.push(Odyssey_701);
ships.push(Shadow_X_4_791);
ships.push(Shadow_X_3_702);
ships.push(Bastion_703);
ships.push(Aries_704);
ships.push(Fly_792);

var t7s = new Map(), t8s=new Map();

for (let ship of ships)
{
  let prs = JSON.parse(ship);
  if (prs.level == 7) t7s.set(prs.typespec.code,{name:prs.name,next:prs.next_t8s});
  else if (prs.level == 7.9) t8s.set(prs.typespec.code,{
    name: prs.name,
    specs: prs.specs
  });
}

this.options = {
  ships:ships,
  reset_tree:false
}
var e = Math.round;
Math.round = function(num,precision)
{
  precision = e(precision||0);
  return e(num/(10**precision))*(10**precision);
}
this.tick = function ()
{
  for (let ship of game.ships)
  {
    if (Math.round(ship.type,2) == 700 && ship.crystals >= 980)
    {
      ship.notlvl8 = false;
      if (!ship.lvl8)
      {
        ship.show = true;
        showUI(ship);
        ship.lvl8 = true;
      }
    }
    else
    {
      ship.lvl8 = false;
      if (!ship.notlvl8)
      {
        hideUI(ship,true);
        ship.notlvl8 = true;
      }
    }
  }
}
this.event = function(event, game) {
  let ship=event.ship;
  switch (event.name)
  {
    case "ui_component_clicked":
      switch (event.id)
      {
        case "upgrades":
          ship.show = !ship.show;
          if (ship.show) showUI(ship);
          else hideUI(ship);
          break;
        default:
          if (event.id.startsWith("lvl8-opt"))
          {
            let type = t7s.get(ship.type).next[event.id.slice(-1)];
            ship.set({type:type,shield:t8s.get(type).specs.shield.capacity[0],crystals:0});
            hideUI(ship,true);
          }
      }
      break;
  }
}
var hideUI = function(ship, isNot)
{
  for (let i=0;i<2;i++) ship.setUIComponent({id:"lvl8-opt"+i,visible:false});
  if (isNot) ship.setUIComponent({id:"upgrades",visible:false});
  else ship.setUIComponent({
    id: "upgrades",
    position: [36,4,28,4],
    clickable: true,
    shortcut: "K",
    visible: true,
    components: [
      { type: "box",position:[0,0,100,100],stroke:"#CDE",width:1},
      { type: "text",position:[0,10,100,80],value:"Upgrades  K ",color:"#CDE"},
      { type: "box",position:[62,15,6,70],stroke:"#CDE",width:1}
    ]
  });
}
var showUI = function(ship)
{
  let key = [9,0];
  for (let i=0;i<2;i++)
  {
    let next_ship = t8s.get(t7s.get(ship.type).next[i]),
    name = next_ship.name;
    def = "DEF MK "+Math.round((next_ship.specs.shield.capacity[0]+next_ship.specs.shield.reload[0]*10)/20),
    atk = "ATK MK "+Math.round((next_ship.specs.generator.capacity[0]+next_ship.specs.generator.reload[0]*10)/20),
    agl = "AGL MK "+Math.round((next_ship.specs.ship.speed[0]+next_ship.specs.ship.acceleration[0]+next_ship.specs.ship.rotation[0])/30);
    ship.setUIComponent({
      id: "lvl8-opt"+i,
      position: [25+i*20,0,20,10],
      clickable: true,
      shortcut: key[i].toString(),
      visible: true,
      components: [
        { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
        { type: "text",position:[5,0,name.length*3.75,50],value:name,color:"#CDE"},
        { type: "text",position:[5,65,12,20],value:"Lv8",color:"#CDE"},
        { type: "box",position:[21,62,8.5,26],stroke:"#CDE",width:1},
        { type: "text",position:[23,65,5,20],value:key[i],color:"#CDE"},
        { type: "text",position:[68,15,def.length*3,20],value:def,color:"#CDE"},
        { type: "text",position:[68,40,atk.length*3,20],value:atk,color:"#CDE"},
        { type: "text",position:[68,65,agl.length*3,20],value:agl,color:"#CDE"},
        { type: "text",position:[42,0,20,100],value:"?",color:"#CDE"}
      ]
    });
  }
  ship.setUIComponent({
    id:"upgrades",
    position:[65,0,10,10],
    visible:true,
    clickable:true,
    shortcut:"K",
    components: [
      { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
      { type: "text",position:[0,20,100,30],value:"Close",color:"#CDE"},
      { type: "box",position:[42,62,17,26],stroke:"#CDE",width:1},
      { type: "text",position:[46,65,10,20],value:"K",color:"#CDE"}
    ]
  });
}
/* testUI = function()
{
  game.ships[0].setUIComponent({
      id: "upgrades",
      position: [25,0,20,10],
      clickable: true,
      shortcut: "Y",
      visible: true,
      components: [
        { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
        { type: "text",position:[5,0,33.75,50],value:"Shadow X-4",color:"#CDE"},
        { type: "text",position:[5,65,12,20],value:"Lv8",color:"#CDE"},
        { type: "box",position:[21,62,8.5,26],stroke:"#CDE",width:1},
        { type: "text",position:[23,65,5,20],value:`9️️`,color:"#CDE"},
        { type: "text",position:[68,15,27,20],value:`DEF MK 25️️`,color:"#CDE"},
        { type: "text",position:[68,40,27,20],value:`ATK MK 35️️`,color:"#CDE"},
        { type: "text",position:[68,65,24,20],value:`AGL MK 7️️`,color:"#CDE"},
        { type: "text",position:[42,0,20,100],value:"?",color:"#CDE"}
      ]
    });
} */
