function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);


  for (var j = 0; j < 370; j += 20) {
    for (var i = 0; i < 370; i += 20) {
      ellipse(20 + i, 20 + j, 15)
    }
  }
}
