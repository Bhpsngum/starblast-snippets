var _ = (t,...c) => ((c.length>0)?c[0]:game.step) % t === 0;
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
  switch (true) {
    case _(30): doTask3();
    case _(20): doTask2();
    case _(10): doTask1();
  }
}
