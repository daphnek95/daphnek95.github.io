var canvas;
var counter = 65;
var ani = 0;
var state = 0;

// IMAGE VARIABLES //
var mobileAni1;
var mobileAni2;

var menuSelection;
var experienceOne;
var experienceTwo;
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
var menuSkillsX, menuSkillsY, menuSkillsD;
var adobeSkillsX, adobeSkillsY, adobeSkillsD;
var programmingSkillsX, programmingSkillsY, programmingSkillsD;
var microsoftSkillsX, microsoftSkillsY, microsoftSkillsD;
var otherSkillsX, otherSkillsY, otherSkillsD ;
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
	menuSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/menuSkills.png");
	adobeSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/adobeSkills.png");
	programmingSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/programmingSkills.png");
	microsoftSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/microsoftSkills.png");
	otherSkills = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/otherSkills.png");

	// DEFINING INTEGERS FOR VARIABLES
	experienceOptionX = 587;
	skillsOptionX = 1976;
	optionButtonsY = 674;
	optionButtonsD = 952;

	menuOneX = 92;
	menuOneY = 127;
	menuOneD = 136;

	rArrowOneX = 2458;
	rArrowOneY = 596;
	rArrowOneD = 108;

	menuTwoX = 92;
	menuTwoY = 127;
	menuTwoD = 136;

	lArrowTwoX = 103;
	lArrowTwoY = 596;
	lArrowTwoD = 108;

	menuSkillsX = 91;
	menuSkillsY = 126;
	menuSkillsD = 136;

	adobeSkillsX = 2258;
  adobeSkillsY = 274;
  adobeSkillsD = 103;

	programmingSkillsX = 2258;
  programmingSkillsY = 519;
  programmingSkillsD = 103;

	microsoftSkillsX = 2258;
  microsoftSkillsY = 766;
  microsoftSkillsD = 103;

	otherSkillsX = 2258;
  otherSkillsY = 1011;
  otherSkillsD = 103;

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
			counter = 65;
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
    background(171, 178, 202);
		noStroke();
		fill(0, 0, 0, 0);

    switch(state) {
      case 0: // menu screen
        image(menuSelection, 0, 0);
        ellipse(experienceOptionX, optionButtonsY, optionButtonsD, optionButtonsD);
        ellipse(skillsOptionX, optionButtonsY, optionButtonsD, optionButtonsD);

        var experienceButtonHover = dist(mouseX, mouseY, experienceOptionX, optionButtonsY);
				var skillsButtonHover = dist(mouseX, mouseY, skillsOptionX, optionButtonsY);
				if(experienceButtonHover < optionButtonsY/1.4) {
					cursor(HAND);
				} else if(skillsButtonHover < optionButtonsY/1.4) {
					cursor(HAND);
				} else {
					cursor(ARROW);
				}
        break;

      case 1: // experience slide one
        image(experienceOne, 0, 0);
        ellipse(menuOneX, menuOneY, menuOneD, menuOneD);
        ellipse(rArrowOneX, rArrowOneY, rArrowOneD, rArrowOneD);

        var menuOneHover = dist(mouseX, mouseY, menuOneX, menuOneY);
        var rArrowOneHover = dist(mouseX, mouseY, rArrowOneX, rArrowOneY);
        if(menuOneHover < menuOneY/2) {
          cursor(HAND);
        } else if(rArrowOneHover < rArrowOneY/8) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 2: // experience slide two
        image(experienceTwo, 0, 0);
        ellipse(menuTwoX, menuTwoY, menuTwoD, menuTwoD);
        ellipse(lArrowTwoX, lArrowTwoY, lArrowTwoD, lArrowTwoD);

        var menuTwoHover = dist(mouseX, mouseY, menuTwoX, menuTwoY);
        var lArrowTwoHover = dist(mouseX, mouseY, lArrowTwoX, lArrowTwoY);
        if(menuTwoHover < menuTwoY/2) {
          cursor(HAND);
        } else if(lArrowTwoHover < lArrowTwoY/8) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 3: // menu skills select
        image(menuSkills, 0, 0);
        ellipse(menuSkillsX, menuSkillsY, menuSkillsD, menuSkillsD);
        ellipse(adobeSkillsX, adobeSkillsY, adobeSkillsD, adobeSkillsD);
        ellipse(programmingSkillsX, programmingSkillsY, programmingSkillsD, programmingSkillsD);
        ellipse(microsoftSkillsX, microsoftSkillsY, microsoftSkillsD, microsoftSkillsD);
        ellipse(otherSkillsX, otherSkillsY, otherSkillsD, otherSkillsD);

        var menuSkillsHover = dist(mouseX, mouseY, menuSkillsX, menuSkillsY);
        var adobeSkillsHover = dist(mouseX, mouseY, adobeSkillsX, adobeSkillsY);
        var programmingSkillsHover = dist(mouseX, mouseY, programmingSkillsX, programmingSkillsY);
        var microsoftSkillsHover = dist(mouseX, mouseY, microsoftSkillsX, microsoftSkillsY);
        var otherSkillsHover = dist(mouseX, mouseY, otherSkillsX, otherSkillsY);
        if(menuSkillsHover < menuSkillsY/2) {
          cursor(HAND);
        } else if(adobeSkillsHover < adobeSkillsY/4) {
          cursor(HAND);
        } else if(programmingSkillsHover < programmingSkillsY/8) {
          cursor(HAND);
        } else if(microsoftSkillsHover < microsoftSkillsY/10) {
          cursor(HAND);
        } else if(otherSkillsHover < otherSkillsY/12) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 4: // adobe
        image(adobeSkills, 0, 0);
        ellipse(adobeExitX, adobeExitY, adobeExitD, adobeExitD);

        var adobeExitHover = dist(mouseX, mouseY, adobeExitX, adobeExitY);
        if(adobeExitHover < adobeExitY/2) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 5: // programming
        image(programmingSkills, 0, 0);
        ellipse(programmingExitX, programmingExitY, programmingExitD, programmingExitD);

        var programmingExitHover = dist(mouseX, mouseY, programmingExitX, programmingExitY);
        if(programmingExitHover < programmingExitY/2) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 6: // microsoft
        image(microsoftSkills, 0, 0);
        ellipse(microsoftExitX, microsoftExitY, microsoftExitD, microsoftExitD);

        var microsoftExitHover = dist(mouseX, mouseY, microsoftExitX, microsoftExitY);
        if(microsoftExitHover < microsoftExitY/2) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;

      case 7: // other
        image(otherSkills, 0, 0);
        ellipse(otherExitX, otherExitY, otherExitD, otherExitD);

        var otherExitHover = dist(mouseX, mouseY, otherExitX, otherExitY);
        if(otherExitHover < otherExitY/2) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
    }
  }
}

function mouseClicked() {
  var experienceButtonClick = dist(mouseX, mouseY, experienceOptionX, optionButtonsY);
  if(experienceButtonClick < optionButtonsY/1.4 && state == 0) {
    state = 1;
  }

  var skillsButtonClick = dist(mouseX, mouseY, skillsOptionX, optionButtonsY);
  if(skillsButtonClick < optionButtonsY/1.4 && state == 0) {
    state = 3
  }

  var menuOneClick = dist(mouseX, mouseY, menuOneX, menuOneY);
  if(menuOneClick < menuOneY/2 && state == 1) {
    state = 0;
  }

  var rArrowOneClick = dist(mouseX, mouseY, rArrowOneX, rArrowOneY);
  if(rArrowOneClick < rArrowOneY/8 && state == 1) {
    state = 2;
  }

  var menuTwoClick = dist(mouseX, mouseY, menuTwoX, menuTwoY);
  if(menuTwoClick < menuTwoY/2 && state == 2) {
    state = 0;
  }

  var lArrowTwoClick = dist(mouseX, mouseY, lArrowTwoX, lArrowTwoY);
  if(lArrowTwoClick < lArrowTwoY/8 && state == 2) {
    state = 1;
  }

  var menuSkillsClick = dist(mouseX, mouseY, menuSkillsX, menuSkillsY);
  if(menuSkillsClick < menuSkillsY/2 && state == 3) {
    state = 0;
  }

  var adobeSkillsClick = dist(mouseX, mouseY, adobeSkillsX, adobeSkillsY);
  if(adobeSkillsClick < adobeSkillsY/4 && state == 3) {
    state = 4;
  }

  var programmingSkillsClick = dist(mouseX, mouseY, programmingSkillsX, programmingSkillsY);
  if(programmingSkillsClick < programmingSkillsY/8 && state == 3) {
    state = 5;
  }

  var microsoftSkillsClick = dist(mouseX, mouseY, microsoftSkillsX, microsoftSkillsY);
  if(microsoftSkillsClick < microsoftSkillsY/10 && state == 3) {
    state = 6;
  }

  var otherSkillsClick = dist(mouseX, mouseY, otherSkillsX, otherSkillsY);
  if(otherSkillsClick < otherSkillsY/12 && state == 3) {
    state = 7;
  }

  var adobeExitClick = dist(mouseX, mouseY, adobeExitX, adobeExitY);
  if(adobeExitClick < adobeExitY/2 && state == 4) {
    state = 3;
  }

  var programmingExitClick = dist(mouseX, mouseY, programmingExitX, programmingExitY);
  if(programmingExitClick < programmingExitY/2 && state == 5) {
    state = 3;
  }

  var microsoftExitClick = dist(mouseX, mouseY, microsoftExitX, microsoftExitY);
  if(microsoftExitClick < microsoftExitY/2 && state == 6) {
    state = 3;
  }

  var otherExitClick = dist(mouseX, mouseY, otherExitX, otherExitY);
  if(otherExitClick < otherExitY/2 && state == 7) {
    state = 3;
  }
}

function windowResized() {
	canvas = resizeCanvas(2560, 1220);
}
