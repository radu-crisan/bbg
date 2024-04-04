let smSammy = {
    x: 200,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    speedX:  2,
    speedY: 3,
    
};
function checkLimitsSMSammy(){
    if (smSammy.x >= tableWidth - smSammy.ray ||  smSammy.x <= 0 + smSammy.ray) 
          smSammy.directionX *= -1; 
  
      smSammy.x += smSammy.directionX * smSammy.speedX;

      if (smSammy.y >= tableHeigth - smSammy.ray || smSammy.y <=0 + smSammy.ray) 
      smSammy.directionY *= -1; 

        smSammy.y += smSammy.directionY * smSammy.speedY;
  }

function smilyFaceSammy(x, y) {
    // BODY
    fill("white");
    stroke("black");
    circle(x, y, smSammy.ray * 2);
  
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