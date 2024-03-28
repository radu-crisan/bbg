function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("green");

  smilyFaceRadu();
  smilyFaceSammy();
}

function smilyFaceRadu() {
  // BODY
  fill("white");
  stroke("black");
  circle(400, 300, 50);

  // EYES
  stroke("brown");
  ellipse(390, 290, 10, 5);
  ellipse(410, 290, 10, 5);
  // EYE PUPILS
  stroke("black");
  fill("black");
  circle(390, 290, 2);
  circle(410, 290, 2);

  // MOUNTH
  stroke("red");
  fill("gray");
  arc(400, 310, 30, 10, 0, Math.PI);

  // CHEEKS
  stroke("pink");
  fill("pink");
  circle(420, 305, 7);
  circle(380, 305, 7);
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
