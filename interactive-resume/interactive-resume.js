var canvas;
var counter = 60;
var ani = 0;
var state = 0;
var x, y, w, h, d;

// -- BOOLEANS -- //
var overOptionExp = false;
var overOneMenu = false;
var overOneRArrow = false;
var overTwoMenu = false;
var overTwoLArrow = false;
var overTwoRArrow = false;
var overThreeMenu = false;
var overThreeLArrow = false;
var overOptionSkill = false;
var overSkillsMenu = false;
var overAdobeSkill = false;
var overProgrammingSkill = false;
var overMicrosoftSkill = false;
var overOtherSkill = false;
var overAdobeExit = false;
var overProgrammingExit = false;
var overMicrosoftExit = false;
var overOtherExit = false;

// -- VARIABLES FOR WINDOW WIDTH BELOW 600PX -- //
var mobileAni1;
var mobileAni2;

// -- IMAGES FOR WINDOW WIDTH ABOVE 600PX -- //
var selectionMenu;
var experienceOne;
var experienceTwo;
var experienceThree;
var skillsMenu;
var skillsAdobe;
var skillsProgramming;
var skillsMicrosoft;
var skillsOther;

// -- VARIABLES FOR BUTTON USE FOR WINDOW WIDTH ABOVE 600PX -- //

//Selection Menu - Experience and Skills buttons
var optionExpX; //experience option
var optionSkillX; //skills option
var optionButtonsY, optionButtosD; //Y coords and diameter for buttons
var circleOverExp = false;
var circleOverSkill = false;

//Experience Slide One
var oneMenuX, oneMenuY, oneMenuW, oneMenuH; //X and Y coords and width and height for menu
var oneRArrowX, oneRArrowY, oneRArrowW, oneRArrowH; //X and Y coords and width and height for right arrow
var rectOverOneMenu = false;
var rectOverOneRArrow = false;

//Experience Slide Two
var twoMenuX, twoMenuY, twoMenuW, twoMenuH; //X and Y coords and the width and height for menu
var twoLArrowX, twoLArrowY, twoLArrowW, twoLArrowH; //X and Y coords and the width and height for left arrow
var twoRArrowX, twoRArrowY, twoRArrowW, twoRArrowH; //X and Y coords and the width and height for right arrow
var rectOverTwoMenu = false;
var rectOverTwoLArrow = false;
var rectOverTwoRArrow = false;

//Experience Slide Three
var threeMenuX, threeMenuY, threeMenuW, threeMenuH; //X and Y coords and the width and height for menu
var threeLArrowX, threeLArrowY, threeLArrowW, threeLArrowH; //X and Y coords and the width and height for left arrow
var rectOverThreeMenu = false;
var rectOverThreeLArrow = false;

//Skills Selection Screen
var skillsMenuX, skillsMenuY, skillsMenuW, skillsMenuH; //X and Y coords and the width and height of menu
var skillsMAdobeX, skillsMProgrammingX, skillsMMicrosoftX, skillsMOtherX; //X coords of all skill buttons
var skillButtonsY, skillButtonsD; //Y coords and diameter for the different skills options
var rectOverSkillsMenu = false;
var rectOverSkillsMAdobe = false;
var rectOverSkillsMProgramming = false;
var rectOverSkillsMMicrosoft = false;
var rectOverSkillsMOther = false;

//Adobe Skill
var adobeExitX, adobeExitY, adobeExitW, adobeExitH; //X and Y coords and the width and height for exit
var rectOverAdobeExit = false;

//Programming Skill
var programmingExitX, programmingExitY, programmingExitW, programmingExitH; //X and Y coords and the width and height for exit
var rectOverProgrammingExit = false;

//Microsoft Skill
var microsoftExitX, microsoftExitY, microsoftExitW, microsoftExitH; //X and Y coords and the width and height for exit
var rectOverMicrosoftExit = false;

//Other Skill
var otherExitX, otherExitY, otherExitW, otherExitH; //X and Y coords and the width and height for exit
var rectOverOtherExit = false;

function setup() {
  canvas = createCanvas (2560, 1220);
  ellipseMode(CENTER);

  //SETTING UP IMAGES FOR WINDOW WIDTH BELOW 600PX
  mobileAni1 = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/rotate-mobile-1.png");
  mobileAni2 = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/rotate-mobile-2.png");

  //SETTING UP IMAGES FOR WINDOW WIDTH ABOVE 600PX
  selectionMenu = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/selection-menu.png");
  experienceOne = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experience-slide-1.png");
  experienceTwo = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experience-slide-2.png");
  experienceThree = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/experience-slide-3.png");
  skillsMenu = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/skills-select.png");
  skillsAdobe = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/skills-adobe.png");
  skillsProgramming = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/skills-programming.png");
  skillsMicrosoft = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/skills-microsoft.png");
  skillsOther = loadImage("https://raw.githubusercontent.com/daphnek95/interactive-images/master/skills-other.png");

  //Defining integers
  optionExpX = 584;
  optionSkillX = 1975;
  optionButtonsY = 689;
  optionButtonsD = 961;

  oneMenuX = 2335;
  oneMenuY = 26;
  oneMenuW = 180;
  oneMenuH = 68;

  oneRArrowX = 2368;
  oneRArrowY = 546;
  oneRArrowW = 102;
  oneRArrowH = 110;

  twoMenuX = 2320;
  twoMenuY = 20;
  twoMenuW = 116;
  twoMenuH = 65;

  twoLArrowX = 74;
  twoLArrowY = 550;
  twoLArrowW = 116;
  twoLArrowH = 116;

  twoRArrowX = 2360;
  twoRArrowY = 550;
  twoRArrowW = 112;
  twoRArrowH = 116;

  threeMenuX = 2314;
  threeMenuY = 20;
  threeMenuW = 190;
  threeMenuH = 64;

  threeLArrowX = 70;
  threeLArrowY = 560;
  threeLArrowW = 100;
  threeLArrowH = 95;

  skillsMenuX = 2339;
  skillsMenuY = 19;
  skillsMenuW = 201;
  skillsMenuH = 70;
  skillsMAdobeX = 310;
  skillsMProgrammingX = 949;
  skillsMMicrosoftX = 1600;
  skillsMOtherX = 2249;
  skillButtonsY = 635;
  skillButtonsD = 570;

  adobeExitX = 2415;
  adobeExitY = 25;
  adobeExitW = 120;
  adobeExitH = 125;

  programmingExitX = 2380;
  programmingExitY = 20;
  programmingExitW = 110;
  programmingExitH = 130;

  microsoftExitX = 2400;
  microsoftExitY = 35;
  microsoftExitW = 110;
  microsoftExitH = 125;

  otherExitX = 2415;
  otherExitY = 30;
  otherExitW = 115;
  otherExitH = 125;

  //Moving canvas inside sketch div
  canvas.parent('interactive-resume-holder');
}

function draw() {
  if (windowWidth < 600) {
    counter = counter - 1;
    if(counter < 0) {
      ani = ani + 1;
      if(ani > 1) {
        ani = 0;
      }
      counter = 60;
      background(171,178,202);
    }
    switch(ani){
      case 0: //animation frame one
        image(mobileAni1,0,0);
        break;

      case 1: //animation frame two
        image(mobileAni2,0,0);
        break;
    }
  } else {
    update(mouseX, mouseY);
    background(171,178,202);
    noStroke();
    fill(0,0,0,0);
    switch(state) {
      case 0: //select between experience or skills
        image(selectionMenu,0,0);
        ellipse(optionExpX, optionButtonsY, optionButtonsD, optionButtonsD);
        ellipse(optionSkillX, optionButtonsY, optionButtonsD, optionButtonsD);
        if(circleOverExp){
          cursor(HAND);
        } else if(circleOverSkill) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 1: //if selected experience option - experience slide one
        image(experienceOne,0,0);
        rect(oneMenuX, oneMenuY, oneMenuW, oneMenuH);
        rect(oneRArrowX, oneRArrowY, oneRArrowW, oneRArrowH);
        if(rectOverOneMenu) {
          cursor(HAND);
        } else if(rectOverOneRArrow) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 2: //if selected right arrow from case 1 - experience slide two
        image(experienceTwo,0,0);
        rect(twoMenuX, twoMenuY, twoMenuW, twoMenuH);
        rect(twoLArrowX, twoLArrowY, twoLArrowW, twoLArrowH);
        rect(twoRArrowX, twoRArrowY, twoRArrowW, twoRArrowH);
        if(rectOverTwoMenu) {
          cursor(HAND);
        } else if(rectOverTwoLArrow) {
          cursor(HAND);
        } else if(rectOverTwoRArrow) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 3: //if selected right arrow from case 2 - experience slide three
        image(experienceThree,0,0);
        rect(threeMenuX, threeMenuY, threeMenuW, threeMenuH);
        rect(threeLArrowX, threeLArrowY, threeLArrowW, threeLArrowH);
        if(rectOverThreeMenu) {
          cursor(HAND);
        } else if(rectOverThreeLArrow) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 4: //if selected skills option from case 0 - skills selection menu
        image(skillsMenu,0,0);
        rect(skillsMenuX, skillsMenuY, skillsMenuW, skillsMenuH);
        ellipse(skillsMAdobeX, skillButtonsY, skillButtonsD, skillButtonsD);
        ellipse(skillsMProgrammingX, skillButtonsY, skillButtonsD, skillButtonsD);
        ellipse(skillsMMicrosoftX, skillButtonsY, skillButtonsD, skillButtonsD);
        ellipse(skillsMOtherX, skillButtonsY, skillButtonsD, skillButtonsD);
        if(rectOverSkillsMenu) {
          cursor(HAND);
        } else if(circleOverSkillsMAdobe) {
          cursor(HAND);
        } else if(circleOverSkillsMProgramming) {
          cursor(HAND);
        } else if(circleOverSkillsMMicrosoft) {
          cursor(HAND);
        } else if(circleOverSkillsMOther) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 5: //if selected Adobe from case 4
        image(skillsAdobe,0,0);
        rect(adobeExitX, adobeExitY, adobeExityW, adobeExitH);
        if(rectOverAdobeExit) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 6: //if selected Programming from case 4
        image(skillsProgramming,0,0);
        rect(programmingExitX, programmingExitY, programmingExitW, programmingExitH);
        if(rectOverProgrammingExit) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 7: //if selected Microsoft from case 4
        image(skillsMicrosoft,0,0);
        rect(microsoftExitX, microsoftExitY, microsoftExitW, microsoftExitH);
        if(rectOverMicrosoftExit) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
      case 8: //if selected Other from case 4
        image(skillsOther,0,0);
        rect(otherExitX, otherExitY, otherExitW, otherExitH);
        if(rectOverOtherExit) {
          cursor(HAND);
        } else {
          cursor(ARROW);
        }
        break;
    }
  }
}

function update() {
  //Selection menu
  if(overOptionExp && state == 0) {
    circleOverExp = true;
    circleOverSkill = false;
  } else if(overOptionSkill && state == 0) {
    circleOverSkill = true;
    circleOverExp = false;
  } else {
    circleOverExp = circleOverSkill = false;
  }

  //Experience Slide One
  if(overOneMenu && state == 1) {
    rectOverOneMenu = true;
    rectOverOneRArrow = false;
  } else if(overOneRArrow && state == 1) {
    rectOverRArrow = true;
    rectOverOneMenu = false;
  } else {
    rectOverOneMenu = rectOverRArrow = false;
  }

  //Experience Slide Two
  if(overTwoMenu && state == 2) {
    rectOverTwoMenu = true;
    rectOverTwoLArrow = rectOverTwoRArrow = false;
  } else if(overTwoLArrow && state == 2) {
    rectOverTwoLArrow = true;
    rectOverTwoMenu = rectOverTwoRArrow = false;
  } else if(overTwoRArrow && state == 2) {
    rectOverTwoRArrow = true;
    rectOverTwoMenu = rectOverTwoLArrow = false;
  } else {
    rectOverTwoMenu = rectOverTwoLArrow = rectOverTwoRArrow = false;
  }

  //Experience Slide Three
  if(overThreeMenu && state == 3) {
    rectOverThreeMenu = true;
    rectOverThreeLArrow = false;
  } else if(overThreeLArrow && state == 3) {
    rectOverThreeLArrow = true;
    rectOverThreeMenu = false;
  } else {
    rectOverThreeMenu = rectOverThreeLArrow = false;
  }

  //Skills Selection Menu
  if(overSkillsMenu && state == 4) {
    rectOverSkillsMenu = true;
    circleOverSkillsMAdobe = circleOverSkillsMProgramming = circleOverSkillsMMicrosoft = circleOverSkillsMOther = false;
  } else if(overAdobeSkill && state == 4) {
    circleOverSkillsMAdobe = true;
    rectOverSkillsMenu = circleOverSkillsMProgramming = circleOverSkillsMMicrosoft = circleOverSkillsMOther = false;
  } else if(overProgrammingSkill && state == 4) {
    circleOverSkillsMProgramming = true;
    rectOverSkillsMenu = circleOverSkillsMAdobe = circleOverSkillsMMicrosoft = circleOverSkillsMOther = false;
  } else if(overMicrosoftSkill && state == 4) {
    circleOverSkillsMMicrosoft = true;
    rectOverSkillsMenu = circleOverSkillsMAdobe = circleOverSkillsMProgramming = circleOverSkillsMOther = false;
  } else if(overOtherSkill && state == 4) {
    circleOverSkillsMOther = true;
    rectOverSkillsMenu = circleOverSkillsMAdobe = circleOverSkillsMProgramming = circleOverSkillsMMicrosoft = false;
  } else {
    rectOverSkillsMenu = circleOverSkillsMAdobe = circleOverSkillsMProgramming = circleOverSkillsMMicrosoft = circleOverSkillsMOther = false;
  }

  //Adobe Skills
  if(overAdobeExit && state == 5) {
    rectOverAdobeExit = true;
  } else {
    rectOverAdobeExit = false;
  }

  //Programming Skills
  if(overProgrammingExit && state == 6) {
    rectOverProgrammingExit = true;
  } else {
    rectOverProgrammingExit = false;
  }

  //Microsoft Skills
  if(overMicrosoftExit && state == 7) {
    rectOverMicrosoftExit = true;
  } else {
    rectOverMicrosoftExit = false;
  }

  //Other Skills
  if(overOtherExit && state == 8) {
    rectOverOtherExit = true;
  } else {
    rectOverOtherExit = false;
  }
}

function mousePressed() {
  if(circleOverExp && state == 0) {
    state = 1;
  }

  if(rectOverOneMenu && state == 1) {
    state = 0;
  }

  if(rectOverOneRArrow && state == 1) {
    state = 2;
  }

  if(rectOverTwoMenu && state == 2) {
    state = 0;
  }

  if(rectOverTwoLArrow && state == 2) {
    state = 1;
  }

  if(rectOverTwoRArrow && state == 2) {
    state = 3;
  }

  if(rectOverThreeMenu && state == 3) {
    state = 0;
  }

  if(rectOverThreeLArrow && state == 3) {
    state = 2;
  }

  if(circleOverSkill && state == 0) {
    state = 4;
  }

  if(rectOverSkillsMenu && state == 4) {
    state = 0;
  }

  if(circleOverSkillsMAdobe && state == 4) {
    state = 5;
  }

  if(circleOverSkillsMProgramming && state == 4) {
    state = 6;
  }

  if(circleOverSkillsMMicrosoft && state == 4) {
    state = 7;
  }

  if(circleOverSkillsMOther && state == 4) {
    state = 8;
  }

  if(rectOverAdobeExit && state == 5) {
    state = 4;
  }

  if(rectOverProgrammingExit && state == 6) {
    state = 4;
  }

  if(rectOverMicrosoftExit && state == 7) {
    state = 4;
  }

  if(rectOverOtherExit && state == 8) {
    state = 4;
  }
}

//DEFINE VARS FROM VOID UPDATE()
function overOptionExp(optionExpX, optionButtonsY, optionButtonsD) {
  var disX = optionExpX - mouseX;
  var disY = optionButtonsY - mouseY;
  if(sqrt(sq(disX) + sq(disY)) < optionButtonsD/2) {
    return true;
  } else {
    return false;
  }
}

function overOneMenu(oneMenuX, oneMenuY, oneMenuW, oneMenuH) {
  if(mouseX >= oneMenuX && mouseX <= oneMenuX + oneMenuW && mouseY >= oneMenuY && mouseY <= oneMenuY + oneMenuH) {
    return true;
  } else {
    return false;
  }
}

function overOneRArrow(oneRArrowX, oneRArrowY, oneRArrowW, oneRArrowH) {
  if(mouseX >= oneRArrowX && mouseX <= oneRArrowX + oneRArrowW && mouseY >= oneRArrowY && mouseY <= oneRArrowY + oneRArrowH) {
    return true;
  } else {
    return false;
  }
}

function overTwoMenu(twoMenuX, twoMenuY, twoMenuW, twoMenuH) {
  if(mouseX >= twoMenuX && mouseX <= twoMenuX + twoMenuW && mouseY >= twoMenuY && mouseY <= twoMenuY + twoMenuH) {
    return true;
  } else {
    return false;
  }
}

function overTwoLArrow(twoLArrowX, twoLArrowY, twoLArrowW, twoLArrowH) {
  if(mouseX >= twoLArrowX && mouseX <= twoLArrowX + twoLArrowW && mouseY >= twoLArrowY && mouseY <= twoLArrowY + twoLArrowH) {
    return true;
  } else {
    return false;
  }
}

function windowResized() {
  canvas = resizeCanvas(2560, 1220);
}
