var max_ships_per_group = 4; // maximum ships can be chosen in one round. MIN 1 MAX 4
var tiers_allowed = []; // blank means all, fill between 1 and 7 for tier restriction

// ship names list, must contain ALL PROPER SHIPS you want to be selected
// sorted from smallest tier (1) to highest (7)
var ships_list = [
  ["Fly"],  //Tier 1
  ["Delta-Fighter","Trident"],
  ["Pulse-Fighter","Side-Fighter","Shadow-X-1","Y-Defender"],
  ["Vanguard","Mercury","X-Warrior","Side-Interceptor","Pioneer","Crusader"],
  ["U-Sniper","FuryStar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender"],
  ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender"],
  ["Odyssey","Shadow X-3","Bastion","Aries"]  // Tier 7
];
var ship_groups = [];
var lookup = function(n,a) {
  if (n == 1) return a.map(i=>[i]);
  else {
    let x = [];
    for (let j=0;j<=a.length-n;j++) x.push(...lookup(n-1,a.slice(j+1,a.length)).map(i=> [a[j],i].flat()));
    return x;
  }
}
var generate = function(n,d) {
  let t=[];
  d = Array.isArray(d)?d:[];
  d = (d.length===0)?Array(ships_list.length).fill(0).map((j,i)=>i+1):d.map(i=>Math.trunc(Number(i))).filter(i=>!isNaN(i) && i>0 && i<=ships_list.length);
  for (let j of d) ships_list[j-1].length >= n && t.push(...lookup(n,ships_list[j-1]));
  return t;
}
for (let i=1;i<=Math.floor(Math.max(Math.min(4,max_ships_per_group)||2,1));i++) ship_groups.push(...generate(i,tiers_allowed));
this.options = {
  root_mode: "deathmatch",
  ship_groups: ship_groups
}
