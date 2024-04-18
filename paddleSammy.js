let pdSammy ={
    x: tableWidth/2,
    y: 500,
    color: "black",
    width: 100,
    height: 10,
}

function createPaddleSammy(){

    fill(pdSammy.color)
    pdSammy.x=mouseX - pdSammy.width / 2;
    rect(pdSammy.x, pdSammy.y, pdSammy.width, pdSammy.height);
}