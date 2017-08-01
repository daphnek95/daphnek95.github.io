class d3{
  PImage icon;
  float x;
  float y;
  float w=45;
  
  d3(){
    x=random(width-50);
    y=0;
    icon=loadImage("door.png");
  }
  
  void display(){
    image(icon,x,y);
  }
  
  void action(){
    if(dist(playerx,playery,x,y)<w){
      state=23;
      playerx=540;
      playery=640;
    }
    if(x>width){
      x=0;
    }
  }
}