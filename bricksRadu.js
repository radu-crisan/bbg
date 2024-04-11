let bricksRadu = []

const bricksRowsRadu = 1 
const bricksColsRadu = 1
const rowBricksNumberRadu = 4

function initBriksRadu() {
    for (let i = 0; i < bricksRowsRadu * rowBricksNumberRadu; i++) {
        bricksRadu.push({
            hit: false,
            x: i*70,
            y: 15,
            color: "#0000ff",
            width: 50,
            height: 20,
        })
    }
}

function createBicksRadu() {

    bricksRadu.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
 
}
