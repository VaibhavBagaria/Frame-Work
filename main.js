function preload() {

}
x = 0;
y = 0;
function setup() {
    canvas = createCanvas(1000, 600);
    canvas.position(150, 300);
    Video = createCapture(VIDEO)
    Video.hide()
}
function draw() {
    image(Video, 10, 10, 950, 580)
    fill('red')
    //Up row
    rect(15, 5, 100, 50);
    rect(115, 5, 100, 50);
    rect(215, 5, 100, 50);
    rect(315, 5, 100, 50);
    rect(415, 5, 100, 50);
    rect(515, 5, 100, 50);
    rect(615, 5, 100, 50);
    rect(715, 5, 100, 50);
    rect(815, 5, 100, 50);
    rect(915, 5, 70, 50);

    //Down Row
    rect(15, 545, 100, 50);
    rect(115, 545, 100, 50);
    rect(215, 545, 100, 50);
    rect(315, 545, 100, 50);
    rect(415, 545, 100, 50);
    rect(515, 545, 100, 50);
    rect(615, 545, 100, 50);
    rect(715, 545, 100, 50);
    rect(815, 545, 100, 50);
    rect(915, 545, 70, 50);

    //Right Column
    rect(10, 0, 50, 100);
    rect(10, 100, 50, 100);
    rect(10, 200, 50, 100);
    rect(10, 300, 50, 100);
    rect(10, 400, 50, 100);
    rect(10, 500, 50, 100);

    //Left Column
    rect(940, 0, 50, 100);
    rect(940, 100, 50, 100);
    rect(940, 200, 50, 100);
    rect(940, 300, 50, 100);
    rect(940, 400, 50, 100);
    rect(940, 500, 50, 100);

    fill('yellow')
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    circle(-25, 30, 50);
    circle(50, 30, 50);
    circle(125, 30, 50);
    circle(200, 30, 50);
    circle(275, 30, 50);
    circle(350, 30, 50);
    circle(425, 30, 50);
    circle(500, 30, 50);
    circle(575, 30, 50);
    circle(650, 30, 50);
    circle(725, 30, 50);
    circle(800, 30, 50);
    circle(875, 30, 50);
    circle(950, 30, 50);
}

function Take_Snapshot() {
    save("Frame.jpg")
}
