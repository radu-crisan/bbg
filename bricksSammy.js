let bricksSammy = [];

const marginSammy = 10;
const distanceBetweenBricksSammy = 10;

const bricksRowsSammy = 3;
const rowBricksNumberSammy = 7;

const brickWidthSammy = Math.floor(
  (tableWidth -
    marginSammy * 2 -
    (rowBricksNumberSammy - 1) * distanceBetweenBricksSammy) /
    rowBricksNumberSammy
);

function initBricksSammy() {
  let x = marginSammy;
  for (let i = 0; i < bricksRowsSammy * rowBricksNumberSammy; i++) {
    const row = Math.floor(i / rowBricksNumberSammy) + 1;

    x = x + brickWidthSammy + distanceBetweenBricksSammy;
    if (i % rowBricksNumberSammy == 0) x = marginSammy;

    bricksSammy.push({
      hit: false,
      x,
      y: row * 35,
      color: "yellow",
      width: brickWidthSammy,
      height: 20,
      row,
    });
  }
}

function createBricksSammy() {
    bricksSammy.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height);
    });
}


