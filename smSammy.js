let smSammy = {
    x: 200,
    y: 300,
    directionX: 1,
};
function checkLimitsSMSammy(){
    if (smSammy.x >= tableWidth) 
          smSammy.directionX *= -1; 
  
      smSammy.x += smSammy.directionX;
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