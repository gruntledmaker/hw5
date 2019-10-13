var i=[]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  for (var i=20; i<=400; i+=10) {
  noFill()
ellipse(200, 200, i)
  }
  
}
