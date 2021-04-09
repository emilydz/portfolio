var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(100, 100);
  canvas.style('z-index', '-1');
  noStroke();
  ellipseMode(RADIUS);
  //frameRate(24);
}

function draw() {
    drawGradient(300, 300, 240);
}

function drawGradient(x, y, f) {
    let radius = 200;
    let h = random(0, 20);
    let r = map(mouseX, 0, width, 40, 300);
    //for (let r = radius; r > 50; r = r - 1) {
    fill(f, 90, 90, h - 90);
    ellipse(x, y, r, r);
    h = (h + 1);
  //}
}
