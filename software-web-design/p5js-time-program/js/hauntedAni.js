var imgScreen;
var imgWall;
var imgMist1;
var imgMist2;
var imgMist3;
var imgMist4;

var state=0;
var counter=30;

function preload(){
	imgScreen=loadImage("media/screen.jpg");
	imgWall=loadImage("media/wall.jpg");
	imgMist1=loadImage("media/mist1.jpg");
	imgMist2=loadImage("media/mist2.jpg");
	imgMist3=loadImage("media/mist3.jpg");
	imgMist4=loadImage("media/mist4.jpg");
}

function setup(){
	createCanvas(600,398);
}

function draw(){
	counter=counter-1;
	if(counter<0){
		state=state+1;
		if(state>14){
			state=0;
		}
		counter=30;
	}
	switch(state){
		case 0:
			image(imgWall,0,0);
			break;
			
		case 1:
			image(imgWall,0,0);
			break;
			
		case 2:
			image(imgWall,0,0);
			break;
			
		case 3:
			image(imgWall,0,0);
			break;
			
		case 4:
			image(imgScreen,0,0);
			break;
			
		case 5:
			image(imgMist1,0,0);
			break;
			
		case 6:
			image(imgScreen,0,0);
			break;
			
		case 7:
			image(imgMist2,0,0);
			break;
			
		case 8:
			image(imgScreen,0,0);
			break;
			
		case 9:
			image(imgMist3,0,0);
			break;
			
		case 10:
			image(imgScreen,0,0);
			break;
			
		case 11:
			image(imgMist1,0,0);
			break;
			
		case 12:
			image(imgMist1,0,0);
			break;
			
		case 13:
			image(imgScreen,0,0);
			break;
			
		case 14:
			image(imgMist4,0,0);
			break;
	}
}