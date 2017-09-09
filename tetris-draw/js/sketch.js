var x=0;
var y=0;

function setup(){
	createCanvas(640,480);
	background(160,160,160);
}

function draw(){
	rect(x,y,20,20);
}

function keyPressed(){
	switch(keyCode){
		case 37: //left arrow
			x-=20;
			break;
			
		case 38: //up arrow
			y-=20;
			break;
			
		case 39: //right arrow
			x+=20;
			break;
			
		case 40: //down arrow
			y+=20;
			break;
			
		case 65: //A key
			stroke(178,183,137);
    		fill(220,229,149);
			break;
			
		case 87: //W key
			stroke(99,103,150);
    		fill(150,155,204);
			break;
			
		case 68: //D key
			stroke(155,109,108);
    		fill(204,139,138);
			break;
			
		case 83: //S key
			stroke(109,124,94);
    		fill(86,216,156);
			break;
			
		case 16: //shift key
			stroke(160,160,160);
    		fill(160,160,160);
    		break;
			
		case 32: //spacebar
			background(160,160,160);
			break;
	}
}