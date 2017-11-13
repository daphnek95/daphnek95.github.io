var canvas;
var counter = 75;
var ani = 0;
var state = 0;

// IMAGE VARIABLES //
var mobileAni1;
var mobileAni2;

var menuSelection;
var experienceOne;
var experienceTwo;
var experienceThree;
var menuSkills;
var adobeSkills;
var programmingSkills;
var microsoftSkills;
var otherSkills;

// VARIABLES FOR BUTTONS ABOVE 600PX //
// all buttons are ELLIPSES - NO RECT()
var experienceOptionX, skillsOptionX, optionButtonsY, optionButtonsD;
var menuOneX, menuOneY, menuOneD;
var rArrowOneX, rArrowOneY, rArrowOneD;
var menuTwoX, menuTwoY, menuTwoD;
var lArrowTwoX, lArrowTwoY, lArrowTwoD;
var rArrowTwoX, rArrowTwoY, rArrowTwoD;
var menuThreeX, threeMenuY, threeMenuD;
var lArrowThreeX, lArrowThreeY, lArrowThreeD;
var menuSkillsX, menuSkillsY, menuSkillsD;
var adobeSkillsX, programmingSkillsX, microsoftSkillsX, otherSkillsX, skillsButtonsY, skillsButtonsD;
var adobeExitX, adobeExitY, adobeExitD;
var programmingExitX, programmingExitY, programmingExitD;
var microsoftExitX, microsoftExitY, microsoftExitD;
var otherExitX, otherExitY, otherExitD;

function setup() {
	canvas = createCanvas(2560,1220);
	ellipseMode(CENTER);

	// LINK IMAGES TO THEIR VARIABLES
	mobileAni1 = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/rotate-mobile-1.png");
	mobileAni2 = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/rotate-mobile-2.png");

	menuSelection = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/menuSelection.png");
	experienceOne = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experienceOne.png");
	experienceTwo = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experienceTwo.png");
	experienceThree = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experienceThree.png");
	menuSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/menuSkills.png");
	adobeSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/adobeSkills.png");
	programmingSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/programmingSkills.png");
	microsoftSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/microsoftSkills.png");
	otherSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/otherSkills.png");

	// DEFINING INTEGERS FOR VARIABLES
	experienceOptionX = 587;
	skillsOptionX = 1976;
	optionButtonsY = 670;
	optionButtonsD = 952;

	menuOneX = 145;
	menuOneY = 128;
	menuOneD = 163;

	rArrowOneX = 2409;
	rArrowOneY = 597;
	rArrowOneD = 138;

	menuTwoX = 145;
	menuTwoY = 125;
	menuTwoD = 153;

	lArrowTwoX = 145;
	lArrowTwoY = 596;
	lArrowTwoD = 153;

	rArrowTwoX = 2414;
	rArrowTwoY = 596;
	rArrowTwoD = 153;

	menuThreeX = 146;
	menuThreeY = 128;
	menuThreeD = 156;

	lArrowThreeX = 154;
	lArrowThreeY = 598;
	lArrowThreeD = 141;

	menuSkillsX = 145;
	menuSkillsY = 127;
	menuSkillsD = 160;

	adobeSkillsX = 312;
	programmingSkillsX = 950;
	microsoftSkillsX = 1600;
	otherSkillsX = 2248;
	skillsButtonsY = 684;
	skillsButtonsD = 558;

	adobeExitX = 146;
	adobeExitY = 127;
	adobeExitD = 150;

	programmingExitX = 146;
	programmingExitY = 127;
	programmingExitD = 150;

	microsoftExitX = 146;
	microsoftExitY = 127;
	microsoftExitD = 150;

	otherExitX = 146;
	otherExitY = 127;
	otherExitD = 150;

	// MOVE CANVAS INSIDE SKETCH DIV
	canvas.parent('interactive-resume-holder');
}

function draw() {
	if(windowWidth < 600) {
		counter = counter - 1;
		if(counter < 0) {
			ani = ani + 1;
			if(ani > 1) {
				ani = 0;
			}
			counter = 75;
			background(171, 178, 202);
		}

		switch(ani) {
			case 0: // phase one of animation
				image(mobileAni1, 0, 0);
				break;

			case 1: // phase two of animation
				image(mobileAni2, 0, 0);
				break;
		}
	} else {
		// update(mouseX, mouseY);
		background(171, 178, 202);
		// noStroke();
		fill(0, 0, 0, 0);

		switch(state) {
			case 0: // choose between experience or skills
				image(menuSelection, 0, 0);
				ellipse(experienceOptionX, optionButtonsY, optionButtonsD, optionButtonsD);
				ellipse(skillsOptionX, optionButtonsY, optionButtonsD, optionButtonsD);

				var experienceButtonHover = dist(mouseX, mouseY, experienceOptionX, optionButtonsY);
				var skillsButtonHover = dist(mouseX, mouseY, skillsOptionX, optionButtonsY);
				if(experienceButtonHover < optionButtonsY/1.4) { // may need to change what oBY is divided by
					cursor(HAND);
				} else if(skillsButtonHover < optionButtonsY/1.4) { // may need to change what oBY is divided by
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 1: // if chose experience from case 0 - experience slide one
				image(experienceOne, 0, 0);
				ellipse(menuOneX, menuOneY, menuOneD, menuOneD);
				ellipse(rArrowOneX, rArrowOneY, rArrowOneD, rArrowOneD);

				var menuOneHover = dist(mouseX, mouseY, menuOneX, menuOneY);
				var rArrowOneHover = dist(mouseX, mouseY, rArrowOneX, rArrowOneY);
				if(menuOneHover < menuOneY/1.4) {
					cursor(HAND);
				} else if(rArrowOneHover < rArrowOneY/7) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 2: // experience slide two
				image(experienceTwo, 0, 0);
				ellipse(menuTwoX, menuTwoY, menuTwoD, menuTwoD);
				ellipse(lArrowTwoX, lArrowTwoY, lArrowTwoD, lArrowTwoD);
				ellipse(rArrowTwoX, rArrowTwoY, rArrowTwoD, rArrowTwoD);

				var menuTwoHover = dist(mouseX, mouseY, menuTwoX, menuTwoY);
				var lArrowTwoHover = dist(mouseX, mouseY, lArrowTwoX, lArrowTwoY);
				var rArrowTwoHover = dist(mouseX, mouseY, rArrowTwoX, rArrowTwoY);
				if(menuTwoHover < menuTwoY/2) {
					cursor(HAND);
				} else if(lArrowTwoHover < lArrowTwoY/7) {
					cursor(HAND);
				} else if(rArrowTwoHover < rArrowTwoY/7) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 3: // experience slide three
				image(experienceThree, 0, 0);
				ellipse(menuThreeX, menuThreeY, menuThreeD, menuThreeD);
				ellipse(lArrowThreeX, lArrowThreeY, lArrowThreeD, lArrowThreeD);

				var menuThreeHover = dist(mouseX, mouseY, menuThreeX, menuThreeY);
				var lArrowThreeHover = dist(mouseX, mouseY, lArrowThreeX, lArrowThreeY);
				if(menuThreeHover < menuThreeY/1.4) {
					cursor(HAND);
				} else if(lArrowThreeHover < lArrowThreeY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 4: // if chose skills from case 0 - skills selection menu
				image(menuSkills, 0, 0);
				ellipse(menuSkillsX, menuSkillsY, menuSkillsD, menuSkillsD);
				ellipse(adobeSkillsX, skillsButtonsY, skillsButtonsD, skillsButtonsD);
				ellipse(programmingSkillsX, skillsButtonsY, skillsButtonsD, skillsButtonsD);
				ellipse(microsoftSkillsX, skillsButtonsY, skillsButtonsD, skillsButtonsD);
				ellipse(otherSkillsX, skillsButtonsY, skillsButtonsD, skillsButtonsD);

				var menuSkillsHover = dist(mouseX, mouseY, menuSkillsX, menuSkillsY);
				var adobeSkillsHover = dist(mouseX, mouseY, adobeSkillsX, skillsButtonsY);
				var programmingSkillsHover = dist(mouseX, mouseY, programmingSkillsX, skillsButtonsY);
				var microsoftSkillsHover = dist(mouseX, mouseY, microsoftSkillsX, skillsButtonsY);
				var otherSkillsHover = dist(mouseX, mouseY, otherSkillsX, skillsButtonsY);
				if(menuSkillsHover < menuSkillsY/1.4) {
					cursor(HAND);
				} else if(adobeSkillsHover < skillsButtonsY/1.4) {
					cursor(HAND);
				} else if(programmingSkillsHover < skillsButtonsY/1.4) {
					cursor(HAND);
				} else if(microsoftSkillsHover < skillsButtonsY/1.4) {
					cursor(HAND);
				} else if(otherSkillsHover < skillsButtonsY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 5: // if chose adobe from case 4 - adobe skills
				image(adobeSkills, 0, 0);
				ellipse(adobeExitX, adobeExitY, adobeExitD, adobeExitD);

				var adobeExitHover = dist(mouseX, mouseY, adobeExitX, adobeExitY);
				if(adobeExitHover < adobeExitY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 6: // if chose programming from case 4 - programming skills
				image(programmingSkills, 0, 0);
				ellipse(programmingExitX, programmingExitY, programmingExitD, programmingExitD);

				var programmingExitHover = dist(mouseX, mouseY, programmingExitX, programmingExitY);
				if(programmingExitHover < programmingExitY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 7: // if chose microsoft from case 4 - microsoft skills
				image(microsoftSkills, 0, 0);
				ellipse(microsoftExitX, microsoftExitY, microsoftExitD, microsoftExitD);

				var microsoftExitHover = dist(mouseX, mouseY, microsoftExitX, microsoftExitY);
				if(microsoftExitHover < microsoftExitY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;

			case 8: // if chose other from case 4 - other skills
				image(otherSkills, 0, 0);
				ellipse(otherExitX, otherExitY, otherExitD, otherExitD);

				var otherExitHover = dist(mouseX, mouseY, otherExitX, otherExitY);
				if(otherExitHover < otherExitY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
				break;
		}
	}
}

function mouseClicked() {
	var experienceOptionClick = dist(mouseX, mouseY, experienceOptionX, optionButtonsY);
	if(experienceOptionClick < optionButtonsY/1.4 && state == 0) {
		state = 1;
	}

	var skillsOptionClick = dist(mouseX, mouseY, skillsOptionX, optionButtonsY);
	if(skillsOptionClick < optionButtonsY/1.4 && state == 0) {
		state = 4;
	}

	var menuOneClick = dist(mouseX, mouseY, menuOneX, menuOneY);
	if(menuOneClick < menuOneY/1.4 && state == 1) {
		state = 0;
	}

	var rArrowOneClick = dist(mouseX, mouseY, rArrowOneX, rArrowOneY);
	if(rArrowOneClick < rArrowOneY/7 && state == 1) {
		state = 2;
	}

	var menuTwoClick = dist(mouseX, mouseY, menuTwoX, menuTwoY);
	if(menuTwoClick < menuTwoY/2 && state == 2) {
		state = 0;
	}

	var lArrowTwoClick = dist(mouseX, mouseY, lArrowTwoX, lArrowTwoY);
	if(lArrowTwoClick < lArrowTwoY/7 && state == 2) {
		state = 1;
	}

	var rArrowTwoClick = dist(mouseX, mouseY, rArrowTwoX, rArrowTwoY);
	if(rArrowTwoClick < rArrowTwoY/7 && state == 2) {
		state = 3;
	}

	var menuThreeClick = dist(mouseX, mouseY, menuThreeX, menuThreeY);
	if(menuThreeClick < menuThreeY/1.4 && state == 3) {
		state = 0;
	}

	var lArrowThreeClick = dist(mouseX, mouseY, lArrowThreeX, lArrowThreeY);
	if(lArrowThreeClick < lArrowThreeY/1.4 && state == 3) {
		state = 2;
	}

	var menuSkillsClick = dist(mouseX, mouseY, menuSkillsX, menuSkillsY);
	if(menuSkillsClick < menuSkillsY/1.4 && state == 4) {
		state = 0;
	}

	var adobeSkillsClick = dist(mouseX, mouseY, adobeSkillsX, skillsButtonsY);
	if(adobeSkillsClick < skillsButtonsY/1.4 && state == 4) {
		state = 5;
	}

	var programmingSkillsClick = dist(mouseX, mouseY, programmingSkillsX, skillsButtonsY);
	if(programmingSkillsClick < skillsButtonsY/1.4 && state == 4) {
		state = 6;
	}

	var microsoftSkillsClick = dist(mouseX, mouseY, microsoftSkillsX, skillsButtonsY);
	if(microsoftSkillsClick < skillsButtonsY/1.4 && state == 4) {
		state = 7;
	}

	var otherSkillsClick = dist(mouseX, mouseY, otherSkillsX, skillsButtonsY);
	if(otherSkillsClick < skillsButtonsY/1.4 && state == 4) {
		state = 8;
	}

	var adobeExitClick = dist(mouseX, mouseY, adobeExitX, adobeExitY);
	if(adobeExitClick < adobeExitY/1.4 && state == 5) {
		state = 4;
	}

	var programmingExitClick = dist(mouseX, mouseY, programmingExitX, programmingExitY);
	if(programmingExitClick < programmingExitY/1.4 && state == 6) {
		state = 4;
	}

	var microsoftExitClick = dist(mouseX, mouseY, microsoftExitX, microsoftExitY);
	if(microsoftExitClick < microsoftExitY/1.4 && state == 7) {
		state = 4;
	}

	var otherExitClick = dist(mouseX, mouseY, otherExitX, otherExitY);
	if(otherExitClick < otherExitY/1.4 && state == 8) {
		state = 4;
	}
}

function windowResized() {
	canvas = resizeCanvas(2560, 1220);
}
