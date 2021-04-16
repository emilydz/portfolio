var canvas;
let mic;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(100, 100);
  canvas.style('z-index', '-1');

  angleMode(DEGREES);

  mic = new p5.AudioIn();
	mic.start();

  background(255);
}


function draw() {
  translate(600, 300);

  var micLevel = mic.getLevel();
  micLevel = mic.getLevel();
  let y = micLevel;

  let sc = second();

  strokeWeight(1);
  let fadeSound = map(y, 0, .7, 0, 255)
  let secondAngle = map(sc, 0, 60, 0, 360);
  rotate(secondAngle);
  stroke(255, 0, 0, fadeSound);
  line(0, 300, 300, 0);
}

function mouseMoved() {
	getAudioContext().resume();
}
