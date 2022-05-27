function preload(){

}

function setup(){
    canvas = createCanvas(640, 450);
    canvas.position(450, 250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video, 45, 45, 550, 360);
    stroke(400, 0, 0);
    fill(250, 0, 0)
    circle(20, 20, 30);
    circle(620, 20, 30);

    circle(20, 430, 30);
    circle(620, 430, 30);

    stroke(0, 400, 0);
    fill(0, 0, 100)
    rect(40, 10, 560, 20 );
    rect(40, 420, 560, 20 );

    stroke(0, 400, 0);
    fill(0, 0, 100)
    rect(610, 40, 20, 370);
    rect(10, 40, 20, 370 );  
}

function capture_image(){
    save('photoframe_image');
}