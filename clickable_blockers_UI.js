/*
All components' objects to block some special native clickable UIs in the client
NOTE: There's no way to revert the shortcuts after it's been assigned,
Use it with your own risks
*/

/* Buy lifes button */
ship.setUIComponent({
  id: "buy_lifes_blocker",
  visible: true,
  clickable: true,
  shortcut: String.fromCharCode(187),
  position: [65,0,10,10],
  components: []
});

/* `Quit to menu` button (in Steam Client) */
ship.setUIComponent({
  id: "steam_exit_blocker",
  position:[0,95,20,5],
  clickable: true,
  visible: true,
  components: []
});

/* RCS Toggle button (only blocks the click) */
ship.setUIComponent({
  id: "rcs_toggle_blocker",
  position: [0,23,20,5],
  clickable: true,
  visible: true,
  shortcut: String.fromCharCode(17),
  components: []
});

/* ESC button */
ship.setUIComponent({
  id: "esc_button_blocker",
  position: [94.5,0,5.5,3],
  clickable: true,
  visible: true,
  shortcut: String.fromCharCode(27),
  components: []
});

/* TAB button */
ship.setUIComponent({
  id: "tab_button_blocker",
  position: [0,0,0,0],
  clickable: true,
  visible: true,
  shortcut: String.fromCharCode(9),
  components: []
});

/* Stats upgrades (from 1 to 8) */
var key = 1; /* Enter your key number here (from 1 to 8) */
ship.setUIComponent({
  id: "stats_upgrades_"+key+"_button_blocker",
  position: [10*i-10,92,10,8],
  clickable: true,
  visible: true,
  shortcut: key.toString(),
  components: []
});

/* Radar button */
ship.setUIComponent({
  id: "radar_button_blocker",
  position: [0,0,0,0],
  clickable: true,
  visible: true,
  shortcut: "R",
  components: []
});
