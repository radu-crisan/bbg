let smRadu = {
  x: 400,
  y: 300,
  ray: 15,
  directionX: 1,
  directionY: 1,
  speedX: 1,
  speedY: 1,
};

function checkLimitsSMRadu() {
  // verificare pe dreapta + stanga
  if (smRadu.x >= tableWidth - smRadu.ray || smRadu.x <= 0 + smRadu.ray) { 
    smRadu.directionX *= -1;
  }
  smRadu.x += smRadu.directionX * smRadu.speedX;

  // verificarea pe jos + sus
  if (smRadu.y >= tableHeigth - smRadu.ray || smRadu.y <= 0 + smRadu.ray) {
    smRadu.directionY *= -1;
  }
  smRadu.y += smRadu.directionY * smRadu.speedY;
}

function smilyFaceRadu(x, y) {
  // BODY
  fill("white");
  stroke("black");
  circle(x, y, smRadu.ray * 2);

  // EYES
  stroke("brown");
  ellipse(x - (smRadu.ray * 2) / 5, y - (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 10);
  ellipse(x + (smRadu.ray * 2) / 5, y - (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 10);
  // EYE PUPILS
  stroke("black");
  fill("black");
  circle(x - (smRadu.ray * 2) / 5, y - (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 25);
  circle(x + (smRadu.ray * 2) / 5, y - (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 25);

  // MOUNTH
  stroke("red");
  fill("gray");
  arc(x, y + (smRadu.ray * 2) / 5, (smRadu.ray * 2) / 1.6, (smRadu.ray * 2) / 5, 0, Math.PI);

  // CHEEKS
  stroke("pink");
  fill("pink");
  circle(x + (smRadu.ray * 2) / 2.5, y + (smRadu.ray * 2) / 10, (smRadu.ray * 2) / 7.14);
  circle(x - (smRadu.ray * 2) / 2.5, y + (smRadu.ray * 2) / 10, (smRadu.ray * 2) / 7.14);
}
