function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("green");  

    smilyFaceRadu();
}

function smilyFaceRadu() {
     // BODY
     fill("white");
     stroke("black")
     circle(400, 300, 50);
     
     // EYES
     stroke("brown");
     ellipse(390, 290, 10, 5);
     ellipse(410, 290, 10, 5);
     // EYE PUPILS
     stroke("black");
     fill("black");
     circle(390, 290, 2);
     circle(410, 290, 2);
 
     // MOUNTH
     stroke("red");
     fill("gray")
     arc(400, 310, 30, 10, 0, Math.PI)
 
     // CHEEKS
     stroke("pink");
     fill("pink");
     circle(420, 305, 7);
     circle(380, 305, 7);
}
