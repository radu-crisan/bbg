function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("green");

  smilyFaceRadu(400, 300);
  smilyFaceSammy();
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

let faceX = 0;
let faceY = 0;
let speedX = 2;
let speedY = 1;


smilyFaceSammy(faceX, faceY);
faceX += speedX;
faceY += speedY;


if (faceX > width || faceX < 0) {
    speedX *= -1;
}
if (faceY > height || faceY < 0) {
    speedY *= -1;
}

  drawBall();


function smilyFaceSammy(x, y) {
  fill(0, 0, 255);
  ellipse(x, y, 50, 50);
  eyes(x, y);
  smile(x, y);
}

function eyes(x, y) {
  strokeWeight(5);
  point(x + 20, y - 10);
  point(x + 28, y - 10);
  strokeWeight(1);
}

function smile(x, y) {
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(x, y + 5, 30, 20, 0, PI);
}

function drawBall() {
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 30, 30);
}
