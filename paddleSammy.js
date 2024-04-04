let pdSammy ={
    x: 100,
    y: 500,
    color: "black",
    width: 50,
    height: 5,
}

function createPaddleSammy(){

    fill(pdSammy.color)
    rect(mouseX, pdSammy.y, pdSammy.width, pdSammy.height);
}