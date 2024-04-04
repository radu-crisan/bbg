let pdRadu = {
    y: 200,
    color: "#00ff00",
    width: 70,
    heigth: 10 
}

function createPaddleRadu() {
    fill(pdRadu.color)
    rect(mouseX, pdRadu.y, pdRadu.width, pdRadu.heigth)
}