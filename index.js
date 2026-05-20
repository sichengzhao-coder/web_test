function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("canvas-container");
    background(0);
}

function draw() {
    fill(random(255), random(255), random(255));
    noStroke();

    circle(mouseX, mouseY, 20);
}

function changeColor(){
    background(random(255), random(255), random(255));
}
