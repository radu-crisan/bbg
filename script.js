let tableWidth = 800;
let tableHeigth = 600; 

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