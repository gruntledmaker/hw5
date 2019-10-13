function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
  
  for (var i=0; i<801; i+=3.8) {
    line(i, 0, i, 2*i)
  }
}
