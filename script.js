var canvas;
let mic;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(100, 100);
  canvas.style('z-index', '-1');

  angleMode(DEGREES);

  //mic = new p5.AudioIn();
	//mic.start();

  background(255);
}


function draw() {
  translate(400, 300);

  //var micLevel = mic.getLevel();
  //micLevel = mic.getLevel();
  //let y = micLevel;

  let sc = second();

  strokeWeight(.2);
  let x = random(0, 15);
  //let fadeSound = map(y, 0, .7, 0, 255)
  let mouseFade =  map(mouseX, 100, 700, 0, 20);
  let secondAngle = map(sc, 0, 60, 0, 360);
  rotate(secondAngle);
  stroke(255, 0, 0, mouseFade);
  line(0, 300, 300, 0);

  console.log(mouseX);
}

//function mouseMoved() {
	//getAudioContext().resume();
//}
