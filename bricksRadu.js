let bricksRadu = [];

const marginRadu = 10;
const distanceBetweenBricksRadu = 10;

const bricksRowsRadu = 3;
const rowBricksNumberRadu = 7;

const brickWidthRadu = Math.floor(
  (tableWidth -
    marginRadu * 2 -
    (rowBricksNumberRadu - 1) * distanceBetweenBricksRadu) /
    rowBricksNumberRadu
);

function initBriksRadu() {
  let x = marginRadu;
  for (let i = 0; i < bricksRowsRadu * rowBricksNumberRadu; i++) {
    const row = Math.floor(i / rowBricksNumberRadu) + 1;

    x = x + brickWidthRadu + distanceBetweenBricksRadu;
    if (i % rowBricksNumberRadu == 0) x = marginRadu;

    bricksRadu.push({
      hit: false,
      x,
      y: row * 35,
      color: "#0000ff",
      width: brickWidthRadu,
      height: 20,
      row,
    });
  }
}

function createBicksRadu() {
  bricksRadu.forEach((brick) => {
    fill(brick.color);
    rect(brick.x, brick.y, brick.width, brick.height);
  });
}
