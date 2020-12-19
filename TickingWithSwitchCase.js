var d = (t,...c) => ((c.length>0)?c[0]:game.step) % t;
function doTask1() {
  echo("Now it's ten!");
}
function doTask2() {
  echo("Go twice! It's 20 now!");
}
function doTask3() {
  echo("Awesome triple! Thirty approached! :D");
}
this.tick = function (game) {
  switch (0) {
    case d(30): doTask3();
    case d(20): doTask2();
    case d(10): doTask1();
  }
}
