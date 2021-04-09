var canvas;
var dim;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(100, 100);
  canvas.style('z-index', '-1');

  /* diameter */
  dim = 500;
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
    drawGradient(300, 300);
}

function drawGradient(x, y) {
  /* radius is half the diameter */
  var radius = dim/8;
  /* pick a random number */
  var h = 1;
  /* loop through circles */
  for (var r = radius; r > 0; --r) {
    fill(200, 0, 20, h);
    ellipse(x, y, r, r);
    h = (h + 1) % 30;
  }
}
