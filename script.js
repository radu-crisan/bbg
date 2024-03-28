function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("green");

  smilyFaceRadu(400, 300);
//   smilyFaceSammy();
}

function smilyFaceRadu(x, y) {
  // BODY
  fill("white");
  stroke("black");
  circle(x, y, 50);

  // EYES
  stroke("brown");
  ellipse(x-10, y-10, 10, 5);
  ellipse(x+10, y-10, 10, 5);
  // EYE PUPILS
  stroke("black");
  fill("black");
  circle(x-10, y-10, 2);
  circle(x+10, y-10, 2);

  // MOUNTH
  stroke("red");
  fill("gray");
  arc(x, y+10, 30, 10, 0, Math.PI);

  // CHEEKS
  stroke("pink");
  fill("pink");
  circle(x+20, y+5, 7);
  circle(x-20, y+5, 7);
}

function smilyFaceSammy() {
  background(220);
  fill(0, 0, 255);
  ellipse(width / 2, height / 2, 50, 50);
  eyes();
  smile();

  function eyes() {
    strokeWeight(5);
    point(390, 290);
    point(408, 290);
    strokeWeight(1);
  }

  function smile() {
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(width / 2, height / 2 + 5, 30, 20, 0, PI);
  }
}
