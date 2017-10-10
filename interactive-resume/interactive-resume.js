var canvas;
var bgIMG;

function setup() {
  canvas = createCanvas (2560, 1220);
  bgIMG = loadImage("interactive-resume/images/castle.jpg");

  //Moving canvas inside sketch div
  canvas.parent('interactive-resume-holder');
}

function draw() {
  if (windowWidth < 600) {
    background(255);
  } else {
  background(0);
  image(bgIMG,0,0);
  }
}

function windowResized() {
  canvas = resizeCanvas(2560, 1220);
}
