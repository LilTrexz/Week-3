let beurt = "x"
let hokje1 = "";
let hokje2 = "";
let hokje3 = "";
let hokje4 = "";
let hokje5 = "";
let hokje6 = "";
let hokje7 = "";
let hokje8 = "";
let hokje9 = "";
let colorX = 'white';
let colorO = 'white';
let winX = false;
let winO = false;
let tie = false;

function setup() {
  createCanvas(900, 900);
}

function mouseClicked() {
  //kleur kiezen

  //links
if (winX == false && winO == false && tie == false) {
  if (mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
    if (colorO != 'red') {
      colorX = 'red'
    }
  }
  if (mouseX > 55 && mouseX < 100 && mouseY > 10 && mouseY < 50) {
    if (colorO != 'purple') {
      colorX = 'purple'
    }
  }
  if (mouseX > 105 && mouseX < 150 && mouseY > 10 && mouseY < 50) {
    if (colorO != 'blue') {
      colorX = 'blue'
    }
  }
  if (mouseX > 155 && mouseX < 190 && mouseY > 10 && mouseY < 50) {
    if (colorO != 'yellow') {
      colorX = 'yellow'
    }
  }

  if (mouseX > 850 && mouseX < 890 && mouseY > 10 && mouseY < 50) {
    fill("#700000");
    square(845, 10, 45);
  }
  if (mouseX > 800 && mouseX < 845 && mouseY > 10 && mouseY < 50) {
    fill("#500054");
    square(795, 10, 45);
  }
  if (mouseX > 750 && mouseX < 795 && mouseY > 10 && mouseY < 50) {
    fill("#02025c");
    square(745, 10, 45);
  }
  if (mouseX > 700 && mouseX < 745 && mouseY > 10 && mouseY < 50) {
    fill("#c2c400");
    square(695, 10, 45);
  }

  //rechts
  if (mouseX > 850 && mouseX < 890 && mouseY > 10 && mouseY < 50) {
    if (colorX != 'red') {
      colorO = 'red'
    }
  }
  if (mouseX > 800 && mouseX < 845 && mouseY > 10 && mouseY < 50) {
    if (colorX != 'purple') {
      colorO = 'purple'
    }
  }
  if (mouseX > 750 && mouseX < 795 && mouseY > 10 && mouseY < 50) {
    if (colorX != 'blue') {
      colorO = 'blue'
    }
  }
  if (mouseX > 700 && mouseX < 745 && mouseY > 10 && mouseY < 50) {
    if (colorX != 'yellow') {
      colorO = 'yellow'
    }
  }
}

  //reset knop
  if (mouseX > 250 && mouseX < 650 && mouseY > 750 && mouseY < 850) {
    reset();
  }

  //klik x en o
if (winX == false && winO == false && tie == false) {
  if (mouseX > 265 && mouseX < 380 && mouseY > 265 && mouseY < 380) {

    if (hokje1 == "") {
      hokje1 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 393 && mouseX < 508 && mouseY > 265 && mouseY < 380) {

    if (hokje2 == "") {
      hokje2 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 521 && mouseX < 636 && mouseY > 265 && mouseY < 380) {

    if (hokje3 == "") {
      hokje3 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 265 && mouseX < 380 && mouseY > 393 && mouseY < 508) {

    if (hokje4 == "") {
      hokje4 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 393 && mouseX < 508 && mouseY > 393 && mouseY < 508) {

    if (hokje5 == "") {
      hokje5 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 521 && mouseX < 636 && mouseY > 393 && mouseY < 508) {

    if (hokje6 == "") {
      hokje6 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 265 && mouseX < 380 && mouseY > 521 && mouseY < 636) {

    if (hokje7 == "") {
      hokje7 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 393 && mouseX < 508 && mouseY > 521 && mouseY < 636) {

    if (hokje8 == "") {
      hokje8 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
  if (mouseX > 521 && mouseX < 636 && mouseY > 521 && mouseY < 636) {

    if (hokje9 == "") {
      hokje9 = beurt;
      if (beurt == "x") {
        beurt = "o";
      }
      else {
        beurt = "x";
      }
    }
  }
}
}

function draw() {
  background("lightBlue");

  //vlaggen pop-up
  if (winX == false && winO == false && tie == false) {
    if (beurt == "x") {
      noStroke();
      fill(colorX);
      quad(100, 100, 250, 120, 210, 200, 60, 180);

      strokeWeight(20);
      stroke("grey");
      line(-50, 400, 100, 100, 15);
    }
    if (beurt == "o") {
      noStroke();
      fill(colorO);
      quad(650, 120, 800, 100, 840, 180, 690, 200);

      strokeWeight(20);
      stroke("grey");
      line(950, 400, 800, 100, 15);
    }
  }
  //kleur kiezen

  //links
if (winX == false && winO == false && tie == false) {
  strokeWeight(3);
  stroke('black');
  fill("red");
  square(10, 10, 45);

  fill("purple");
  square(60, 10, 45);

  fill("blue");
  square(110, 10, 45);

  fill("yellow");
  square(160, 10, 45);

  //rechts
  fill("red");
  square(845, 10, 45);

  fill("purple");
  square(795, 10, 45);

  fill("blue");
  square(745, 10, 45);

  fill("yellow");
  square(695, 10, 45);
}

  //reset knop
  if (winX == true || winO == true || tie == true) {
    fill('#6b550d');
    noStroke();
    rect(250, 750, 400, 100, 15);

    fill("white");
    text('Reset', 345, 825);
  }

  //het bord
  noStroke();
  textFont('Arial');
  fill('#f5ebce');
  square(250, 250, 400, 40);

  //3x3 vakjes
  fill('#C7BFA7');
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 3; x++) {
      if (y % 2) {
        rect(265 + x * 128, 200 + y * 64, 115, 115, 15);
      }
    }
  }

  //hover modus kleuren kiezen

  //links
  if (mouseX > 10 && mouseX < 55 && mouseY > 10 && mouseY < 50) {
    fill("#700000");
    square(10, 10, 45);
  }
  if (mouseX > 60 && mouseX < 105 && mouseY > 10 && mouseY < 50) {
    fill("#500054");
    square(60, 10, 45);
  }
  if (mouseX > 110 && mouseX < 155 && mouseY > 10 && mouseY < 50) {
    fill("#02025c");
    square(110, 10, 45);
  }
  if (mouseX > 160 && mouseX < 195 && mouseY > 10 && mouseY < 50) {
    fill("#c2c400");
    square(160, 10, 45);
  }

  //rechts
  if (mouseX > 850 && mouseX < 890 && mouseY > 10 && mouseY < 50) {
    fill("#700000");
    square(845, 10, 45);
  }
  if (mouseX > 800 && mouseX < 845 && mouseY > 10 && mouseY < 50) {
    fill("#500054");
    square(795, 10, 45);
  }
  if (mouseX > 750 && mouseX < 795 && mouseY > 10 && mouseY < 50) {
    fill("#02025c");
    square(745, 10, 45);
  }
  if (mouseX > 700 && mouseX < 745 && mouseY > 10 && mouseY < 50) {
    fill("#c2c400");
    square(695, 10, 45);
  }

  //hover modus reset knop
  if (winX == true || winO == true || tie == true) {
    if (mouseX > 250 && mouseX < 650 && mouseY > 750 && mouseY < 850) {
      fill('#4d3c09');
      rect(250, 750, 400, 100, 15);

      fill('#bfbfbf');
      textFont('Cooper Black');
      textSize(80);
      text('Reset', 345, 825);
    }
  }

  //hover modus spel
  textFont('Arial');
  if (winX == false && winO == false && tie == false) {
    if (mouseX > 265 && mouseX < 380 && mouseY > 265 && mouseY < 380 && hokje1 == "") {
      fill('#A19A87');
      rect(265, 265, 115, 115, 15);
    }


    if (mouseX > 393 && mouseX < 508 && mouseY > 265 && mouseY < 380 && hokje2 == "") {
      fill('#A19A87');
      rect(393, 265, 115, 115, 15);
    }

    if (mouseX > 521 && mouseX < 636 && mouseY > 265 && mouseY < 380 && hokje3 == "") {
      fill('#A19A87');
      rect(521, 265, 115, 115, 15);
    }

    if (mouseX > 265 && mouseX < 380 && mouseY > 393 && mouseY < 508 && hokje4 == "") {
      fill('#A19A87');
      rect(265, 393, 115, 115, 15);
    }

    if (mouseX > 393 && mouseX < 508 && mouseY > 393 && mouseY < 508 && hokje5 == "") {
      fill('#A19A87');
      rect(393, 393, 115, 115, 15);
    }

    if (mouseX > 521 && mouseX < 636 && mouseY > 393 && mouseY < 508 && hokje6 == "") {
      fill('#A19A87');
      rect(521, 393, 115, 115, 15);
    }

    if (mouseX > 265 && mouseX < 380 && mouseY > 521 && mouseY < 636 && hokje7 == "") {
      fill('#A19A87');
      rect(265, 521, 115, 115, 15);
    }

    if (mouseX > 393 && mouseX < 508 && mouseY > 521 && mouseY < 636 && hokje8 == "") {
      fill('#A19A87');
      rect(393, 521, 115, 115, 15);
    }

    if (mouseX > 521 && mouseX < 636 && mouseY > 521 && mouseY < 636 && hokje9 == "") {
      fill('#A19A87');
      rect(521, 521, 115, 115, 15);
    }
  }

  //rode kruisjes
  textSize(130)
  fill(colorX)
  stroke("black")
  strokeWeight(10)
  if (hokje1 == "x") {
    text('x', 290, 355)
  }
  if (hokje2 == "x") {
    text('x', 418, 355)
  }
  if (hokje3 == "x") {
    text('x', 546, 355)
  }
  if (hokje4 == "x") {
    text('x', 290, 483)
  }
  if (hokje5 == "x") {
    text('x', 418, 483)
  }
  if (hokje6 == "x") {
    text('x', 546, 483)
  }
  if (hokje7 == "x") {
    text('x', 290, 611)
  }
  if (hokje8 == "x") {
    text('x', 418, 611)
  }
  if (hokje9 == "x") {
    text('x', 546, 611)
  }

  //blauwe rondjes
  textSize(130)
  fill(colorO)
  stroke("black")
  strokeWeight(10)
  if (hokje1 == "o") {
    text('o', 287, 355)
  }
  if (hokje2 == "o") {
    text('o', 415, 355)
  }
  if (hokje3 == "o") {
    text('o', 543, 355)
  }
  if (hokje4 == "o") {
    text('o', 287, 483)
  }
  if (hokje5 == "o") {
    text('o', 415, 483)
  }
  if (hokje6 == "o") {
    text('o', 543, 483)
  }
  if (hokje7 == "o") {
    text('o', 290, 611)
  }
  if (hokje8 == "o") {
    text('o', 415, 611)
  }
  if (hokje9 == "o") {
    text('o', 546, 611)
  }

  //winner/loser/tie text
  if (hokje1 == "x" && hokje2 == "x" && hokje3 == "x") {
    winX = true;
  }
  if (hokje1 == "o" && hokje2 == "o" && hokje3 == "o") {
    winO = true;
  }

  if (hokje4 == "x" && hokje5 == "x" && hokje6 == "x") {
    winX = true;
  }
  if (hokje4 == "o" && hokje5 == "o" && hokje6 == "o") {
    winO = true;
  }

  if (hokje7 == "x" && hokje8 == "x" && hokje9 == "x") {
    winX = true;
  }
  if (hokje7 == "o" && hokje8 == "o" && hokje9 == "o") {
    winO = true;
  }

  if (hokje1 == "x" && hokje4 == "x" && hokje7 == "x") {
    winX = true;
  }
  if (hokje1 == "o" && hokje4 == "o" && hokje7 == "o") {
    winO = true;
  }

  if (hokje2 == "x" && hokje5 == "x" && hokje8 == "x") {
    winX = true;
  }
  if (hokje2 == "o" && hokje5 == "o" && hokje8 == "o") {
    winO = true;
  }

  if (hokje3 == "x" && hokje6 == "x" && hokje9 == "x") {
    winX = true;
  }
  if (hokje3 == "o" && hokje6 == "o" && hokje9 == "o") {
    winO = true;
  }

  if (hokje1 == "x" && hokje5 == "x" && hokje9 == "x") {
    winX = true;
  }
  if (hokje1 == "o" && hokje5 == "o" && hokje9 == "o") {
    winO = true;
  }

  if (hokje3 == "x" && hokje5 == "x" && hokje7 == "x") {
    winX = true;
  }
  if (hokje3 == "o" && hokje5 == "o" && hokje7 == "o") {
    winO = true;
  }

  //winner X text
  textFont('Cooper Black');
  textSize(80);
  if (winX == true) {
    strokeWeight(2);
    fill('#f5ebce');
    rect(200, 50, 500, 100)

    noStroke();
    fill('black');
    text('Winner: X', 250, 125);
  }

  //winner O text
  if (winO == true) {
    strokeWeight(2);
    fill('#f5ebce');
    rect(200, 50, 500, 100)

    noStroke();
    fill('black');
    text('Winner: O', 250, 125);
  }

  if (hokje1 != "" && hokje2 != "" && hokje3 != "" && hokje4 != "" && hokje5 != "" && hokje6 != "" && hokje7 != "" && hokje8 != "" && hokje9 != "" && winX != true && winO != true) {
    tie = true
    strokeWeight(2);
    fill('#f5ebce');
    rect(200, 50, 500, 100)

    noStroke();
    fill('black');
    text('Tie', 380, 125);
  }
}

function reset() {
  beurt = "x"
  hokje1 = "";
  hokje2 = "";
  hokje3 = "";
  hokje4 = "";
  hokje5 = "";
  hokje6 = "";
  hokje7 = "";
  hokje8 = "";
  hokje9 = "";
  colorX = 'white';
  colorO = 'white';
  winX = false;
  winO = false;
  tie = false;
}