function preload(){

}

function setup(){
    canvas = createCanvas(1920, 600);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(0, 128, 128);
    stroke(0, 128, 128);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(1000, 50, 80);
    circle(1000, 430, 80)
    rect(55, 50, 980, 20);
    rect(50, 430, 980, 20);
    rect(50, 40, 20, 400);
    rect(1000, 40, 20, 400);
}
function wdq(){
    save('hrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.png');
}