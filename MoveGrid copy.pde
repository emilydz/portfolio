int numcols = 10;
int numrows = 10;
PVector[][] pts = new PVector[numcols][numrows];
PVector[][] basepts = new PVector[numcols][numrows];
float xscale, yscale;
float maxdisplace;
float nx, ny, nz;

void setup(){
 fullScreen();
 background(255);
 stroke(0, 60, 200);
 xscale = 600/numcols;
 yscale = 600/numrows;
 
 maxdisplace = (xscale+yscale);
 
 for(int x = 0; x < numcols; x++){
   for(int y = 0; y < numrows; y++){
     PVector p = new PVector(x*xscale + xscale/2, y*yscale + yscale/2);
     pts[x][y] = p;
     basepts[x][y] = new PVector(p.x, p.y);
   }
 }
  
  nx = 0;
  ny = 0;
  nz = 0;
  
}


void draw(){
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

void drawGraph(){
  for(int x = 0; x < numcols; x++){
    for(int y = 0; y < numrows; y++){
      PVector p = pts[x][y];
      if(x < numcols - 1){
        line((p.x), (p.y), (pts[x+1][y].x), (pts[x+1][y].y));
      }
      if(y < numrows - 1){
        line((p.x), (p.y), (pts[x][y+1].x), (pts[x][y+1].y));
      }
    }
  }
}


void disruptGraph(){
 for(int x = 0; x < numcols; x++){
    for(int y = 0; y < numrows; y++){
      PVector p = pts[x][y];
      p.x = basepts[x][y].x + map(noise(nx + y*y, nz), 0, 1, 10, maxdisplace);
      p.y = basepts[x][y].y + map(noise(ny + x*x, nz), 0, 1, 10, maxdisplace);
    }
  } 
 
  nz+=.005;
  
}

void disruptyGraph(){
 for(int x = 0; x < numcols; x++){
    for(int y = 0; y < numrows; y++){
      PVector p = pts[x][y];
      p.x = basepts[x][y].x + map(noise(x + y*y, nz), 0, 1, mouseY, mouseX);
      p.y = basepts[x][y].y + map(noise(ny + x*x, nz), 0, 1, mouseY, mouseX);
    }
  } 
 
  nz+=.005;
  
}
