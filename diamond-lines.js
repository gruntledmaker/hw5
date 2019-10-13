function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var x = width/2
  
  for (var i=0; i<201; i+=10) {
    line(x-1-i, i, x+1+i, i)
  }
  
  for (var j=0; j<201; j+=10) {
    line(x-201+j, 200+j, x+201-j, 200+j)
  }
  
}
