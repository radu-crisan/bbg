let pdRadu = {
    x: tableWidth/2,
    y: 580,
    color: "#00ff00",
    width: 100,
    height: 10 
}

function createPaddleRadu() {
    fill(pdRadu.color)
    pdRadu.x = mouseX - pdRadu.width/2;
    rect(pdRadu.x, pdRadu.y, pdRadu.width, pdRadu.height)
}