let smRadu = {
  x: 400,
  y: 300,
  directionX: 1,
  directionY: 1,
  speedX: 10,
  speedY: 10,
};

function checkLimitsSMRadu() {
  // verificare pe dreapta + stanga
  if (smRadu.x >= tableWidth || smRadu.x <= 0) smRadu.directionX *= -1;
  smRadu.x += smRadu.directionX * smRadu.speedX;

  // verificarea pe jos + sus
  if (smRadu.y >= tableHeigth || smRadu.y <= 0) smRadu.directionY *= -1;
  smRadu.y += smRadu.directionY * smRadu.speedY;
}

function smilyFaceRadu(x, y) {
  // BODY
  fill("white");
  stroke("black");
  circle(x, y, 50);

  // EYES
  stroke("brown");
  ellipse(x - 10, y - 10, 10, 5);
  ellipse(x + 10, y - 10, 10, 5);
  // EYE PUPILS
  stroke("black");
  fill("black");
  circle(x - 10, y - 10, 2);
  circle(x + 10, y - 10, 2);

  // MOUNTH
  stroke("red");
  fill("gray");
  arc(x, y + 10, 30, 10, 0, Math.PI);

  // CHEEKS
  stroke("pink");
  fill("pink");
  circle(x + 20, y + 5, 7);
  circle(x - 20, y + 5, 7);
}
