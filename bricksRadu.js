let bricks = []

const bricksRows = 1 
const bricksCols = 1
const rowBricksNumber = 4

function initBriks() {
    for (let i = 0; i < bricksRows * rowBricksNumber; i++) {
        bricks.push({
            hit: false,
            x: i*70,
            y: 15,
            color: "#0000ff",
            width: 50,
            height: 20,
        })
    }
}

function createBicks() {

    bricks.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
 
}
