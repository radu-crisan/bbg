let tableWidth = 800;
let tableHeigth = 600; 

function setup() {
  createCanvas(tableWidth, tableHeigth);
  initBriks();
}

function draw() {
  background("green");

  checkLimitsSMRadu();
  checkLimitsSMSammy();

  smilyFaceRadu(smRadu.x, smRadu.y);
  smilyFaceSammy(smSammy.x, smSammy.y); 

  createPaddleSammy();
  createPaddleRadu();

  createBicks();
}