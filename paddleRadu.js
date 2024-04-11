let pdRadu = {
    y: 580,
    color: "#00ff00",
    width: 80,
    heigth: 10 
}

function createPaddleRadu() {
    fill(pdRadu.color)
    rect(mouseX-pdRadu.width/2, pdRadu.y, pdRadu.width, pdRadu.heigth)
}