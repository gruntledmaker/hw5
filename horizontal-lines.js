function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  background(220);
  for (var i=10; i<=400; i+=10) {
    line(0, i, 400, i)
  }
}
