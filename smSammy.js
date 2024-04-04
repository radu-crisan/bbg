let smSammyX = 200;
let smSammyY = 300;

let directionSammyX = 1;

function checkLimitsSMSammy(){
    if (smSammyX >= tableWidth) 
          directionSammyX *= -1; 
  
      smSammyX += directionSammyX;
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