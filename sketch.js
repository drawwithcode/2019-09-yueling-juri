var rBall;
var gBall;
var pBall


function preload() {
  rBall = loadImage("./assets/red_ball.png");
  gBall = loadImage("./assets/green_ball.png");
  pBall = loadImage("./assets/purple_ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {

  var rBallPx = 0.5 * windowWidth + map(rotationY, 0, 30, 0, width);
  var rBallPy = 0.45 * windowHeight + map(rotationX, 0, 30, 0, height);
  var gBallPx = 0.45 * windowWidth + map(rotationY, 0, 45, 0, width);
  var gBallPy = 0.4 * windowHeight + map(rotationX, 0, 45, 0, height);
  var pBallPx = 0.5 * windowWidth + map(rotationY, 0, 20, 0, width);
  var pBallPy = 0.42 * windowHeight + map(rotationX, 0, 20, 0, height);

  background("white");


image(gBall, gBallPx, gBallPy, 0.08 * gBall.width, 0.08 * gBall.height);
image(rBall,rBallPx,rBallPy,0.03*rBall.width,0.03*rBall.height);
image(pBall, pBallPx, pBallPy, 0.015 * pBall.width, 0.015 * pBall.height);

var myText = "Don't lose them!";
var my23333 = "YOU LOST THEM!"

textFont("Merriweather");
textStyle("ITALIC");
textAlign("CENTER");
textSize(25);
fill("#BFBFBF");
text(myText, width * 0.30, 40);

//fill("black");
//ellipse(0, 0, 10);
//ellipse(0, 620, 10);
//ellipse(415, 620, 10);




}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
