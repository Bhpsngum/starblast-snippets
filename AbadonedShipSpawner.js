this.options = {
  max_players: 120
}
lOlO0.prototype.modStarted = function (t){
  id = t.id;
  return this.modding.game.options=t.options,this.modding.modStarted(t.id+"@"+this.address);
}
lOlO0.prototype.shipDisconnected = function(t) {
    var e=this.modding.game.findShip(t.id);
    if (e != null) {
      diedPlayers.push(e);
      return e.lI101 = !0
    }
}
var region,port,id;
var diedPlayers = [];
var createBall = {
  id: "create",
  visible: true,
  clickable: true,
  shortcut: "C",
  position: [10,40,30,10],
  components: [
    {type:"box",position:[0,0,100,100],fill:"#456",stroke:"#cde",width:2},
    {type:"text",position:[0,0,100,100],value: "Spawn abadoned ship (C)",color:"#cde"}
  ]
}
var destroyBall = {
  id: "destroy",
  visible: true,
  clickable: true,
  shortcut: "D",
  position: [10,60,30,10],
  components: [
    {type:"box",position:[0,0,100,100],fill:"#456",stroke:"#cde",width:2},
    {type:"text",position:[0,0,100,100],value: "Destroy abadoned ship (D)",color:"#cde"}
  ]
}
this.tick = function(game) {
  if (!game.step) {
    let e = game.modding.I1I0I.address.split(":");
    region = e[0].replace(/\./g,"-");
    port = e[1];
  }
  if (diedPlayers.length) {
    KillBalls(diedPlayers[0]);
    diedPlayers.shift();
  }
  for (let ship of game.ships) {
    if (!ship.custom.init) {
      ship.custom.init = true;
      ship.setUIComponent(createBall);
      ship.setUIComponent(destroyBall);
      ship.custom.balls = [];
    }
  }
}
Ball = function(ship) {
  var ball = new WebSocket("wss://"+region+".starblast.io:"+port+"/");
  ball.onopen = function(){
    this.send('{"name":"join","data":{"mode":"survival","spectate":false,"spectate_ship":1,"player_name":"'+ship.name+" "+ship.custom.balls.length+'","hue":288,"preferred":'+id+',"bonus":false,"ecp_key":null,"steamid":null,"ecp_custom":{"badge":"star","finish":"alloy","laser":"1"},"create":false,"client_ship_id":"425271352936625943","client_tr":1}}');
    this.send('{"name":"enter","data":{"spectate":false}}');
    this.send('{"name":"respawn"}');
  }
  ship.custom.balls.push(ball);
}
KillBalls = function (ship) {
  if (ship != null)
  {
    if (ship.custom)
    {
      for (let i=0;i<(ship.custom.balls||[]).length;i++) ship.custom.balls[i].close();
      ship.custom.balls = [];
    }
  }
}
KillBallsbyId = function(id) {
  KillBalls(game.findShip(id));
}
KillAllBalls = function() {
  for (let i=0;i<game.ships.length;i++) KillBalls(game.ships[i]);
}
this.event = function (event, game) {
  let balls = event.ship.custom.balls;
  switch (event.name) {
    case "ui_component_clicked":
      switch (event.id) {
        case "destroy":
          if (balls.length) {
            balls[balls.length-1].close();
            balls.splice(balls.length-1,1);
          }
          break;
        case "create":
          Ball(event.ship);
          break;
      }
      break;
  }
}
