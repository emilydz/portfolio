let numcols = 10;
let numrows = 10;
let xscale, yscale;
let maxdisplace;
let nx, ny, nz;
let [] [] pts;
let [] [] basepts;
var canvas;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(100, 100);
  canvas.style('z-index', '-1'); background(255);
  stroke(0, 60, 200);

  [][] pts = new let[numcols][numrows];
  [][] basepts = new let[numcols][numrows];
  
  xscale = 600/numcols;
  yscale = 600/numrows;

  maxdisplace = (xscale+yscale);

 for(let x = 0; x < numcols; x++){
   for(let y = 0; y < numrows; y++){
     let p = new let(x*xscale + xscale/2, y*yscale + yscale/2);
     pts[x][y] = p;
     basepts[x][y] = new let(p.x, p.y);
   }
 }

  nx = 0;
  ny = 0;
  nz = 0;

}


function draw(){
  background(255);
  if (keyPressed) {
    if (key == 'c') {
     drawGraph();
     disruptyGraph();
    }
  } else {
    drawGraph();
    disruptGraph();

}
}

function drawGraph(){
  for(let x = 0; x < numcols; x++){
    for(let y = 0; y < numrows; y++){
      let p = pts[x][y];
      if(x < numcols - 1){
        line((p.x), (p.y), (pts[x+1][y].x), (pts[x+1][y].y));
      }
      if(y < numrows - 1){
        line((p.x), (p.y), (pts[x][y+1].x), (pts[x][y+1].y));
      }
    }
  }
}


function disruptGraph(){
 for(let x = 0; x < numcols; x++){
    for(let y = 0; y < numrows; y++){
      let p = pts[x][y];
      p.x = basepts[x][y].x + map(noise(nx + y*y, nz), 0, 1, 10, maxdisplace);
      p.y = basepts[x][y].y + map(noise(ny + x*x, nz), 0, 1, 10, maxdisplace);
    }
  }

  nz+=.005;

}

function disruptyGraph(){
 for(let x = 0; x < numcols; x++){
    for(let y = 0; y < numrows; y++){
      let p = pts[x][y];
      p.x = basepts[x][y].x + map(noise(x + y*y, nz), 0, 1, mouseY, mouseX);
      p.y = basepts[x][y].y + map(noise(ny + x*x, nz), 0, 1, mouseY, mouseX);
    }
  }

  nz+=.005;

}
