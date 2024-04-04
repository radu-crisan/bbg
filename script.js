let tableWidth = 800;
let tableHeigth = 600; 

let smRaduX = 400;
let smRaduY = 300;

let smSammyX = 200;
let smSammyY = 300;

let directionRaduX = 1;
let directionSammyX = 1;

function setup() {
  createCanvas(tableWidth, tableHeigth);
}

function draw() {
  background("green");

  smilyFaceRadu(smRaduX, smRaduY);
  smilyFaceSammy(smSammyX, smSammyY); 
  checkLimitsSMRadu();
  checkLimitsSMSammy();

}

function checkLimitsSMRadu() {
    if (smRaduX >= tableWidth) 
    directionRaduX *= -1; 

    smRaduX += directionRaduX; 
}
function checkLimitsSMSammy(){
  if (smSammyX >= tableWidth) 
        directionSammyX *= -1; 

    smSammyX += directionSammyX;
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

function smilyFaceSammy(x, y) {
  // BODY
  fill("white");
  stroke("black");
  circle(x, y, 50);

  // FACE
  fill(0, 0, 255);
  ellipse(x, y, 50, 50);

  // EYES
  stroke("black");
  fill("black");
  circle(x-10, y-10, 2);
  circle(x+10, y-10, 2);

  // SMILE
  stroke("black");
  fill("white");
  arc(x, y+10, 30, 10, 0, Math.PI);

  
}