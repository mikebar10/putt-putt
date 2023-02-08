import { moveBall, ball } from './ball.js';

class Powa {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    $("<div style=\"left:" + this.x + "; top:" + this.y + "\" id=\"Powa\"></div>").appendTo("#game");
  }
}
class line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    $("<div style=\"left:" + this.x + "; top:" + this.y + "\" id=\"line\"></div>").appendTo("#game");
  }
}

/*main.getElementById("#ButtPower").addEventListener("click", function(){
	
  var el = main.querySelector("line");
  var className = "stopped";
  
  el.classList.toggle(className);
  
  if (!el.classList.contains(className)) { return }
  
  var currentCY = parseFloat(getComputedStyle(el).getPropertyValue("cy"));
  
  /*if (currentCX <= 260 ) {
    NiceShot();
  } else if(currentCX>=100) {
    AWWW();
  }
  });*/

var running = 0;
var powaline = 0;
var up = 0;
var shotpowa = 0;
var dahy;
var holes;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#startGameButton").on("click", async function () {
  $("#Powa").remove();
  $("#line").remove();
  running = 0;
  holes = 1;
  dahy = 655;
  var powa = new Powa(50, 175);
  var powaline = new line(53, dahy);//top 190,bottom 655
  powa.draw();
  powaline.draw();
  BarMover();
});

function barNextHole() {
  $("#Powa").remove();
  $("#line").remove();
  running = 0;
  holes = holes + 1;
  dahy = 655;
  var powa = new Powa(50, 175);
  var powaline = new line(53, dahy);//top 190,bottom 655
  powa.draw();
  powaline.draw();
  BarMover();
}





/*function NiceShot() {
var audio1 = new Audio('https://www.youtube.com/watch?v=ALqnYJxodT8');
audio.play();
}
function AWWW(){
var audio2=new Audio('https://www.youtube.com/watch?v=VRECg42otTs');
audio.play();
}*/




var hitstrength = 0;
var angelval = 0;
$(window).keypress(async function (key) {
  if (key.which === 32) {
    running = 1;
    $("#arrow").remove();
    shotpowa = powaline.y;
    if (shotpowa == 423) {
      hitstrength = 3;
    }
    else if (shotpowa < 423) {
      hitstrength = 3 * ((shotpowa - 190) / 232);
    }
    else if (shotpowa > 423) {
      hitstrength = 3 * ((655 - shotpowa) / 232);
    }
    moveBall(hitstrength, angleval);
  }


});

async function BarMover() {
  running = 0;
  while (running == 0) {
    $("#line").remove();
    if (up == 0) {//going up

      if (dahy <= 189) {
        up = 1;
        dahy = 190;
      }
      else {
        dahy -= 3;
      }
    }
    else if (up == 1) {//going down
      if (dahy >= 656) {
        up = 0;
        dahy = 655;
      }
      else {
        dahy += 3;
      }

    }
    powaline = new line(53, dahy);
    powaline.draw();
    await sleep(10);
  }
}

var angleval = 0;
$(window).keydown(async function (key) {
  $("#arrow").remove();
  if (key.which === 37) {//right
    moveArrow();
    if (angleval >= 357) {
      angleval = 0;
    }
    else {
      angleval += 3;
    }
  }
  else if (key.which === 39) {//left
    moveArrow();
    if (angleval <= 0) {
      angleval = 357;
    }
    else {
      angleval -= 3;
    }

  }
});

var moveArrow = () => {
  var arr_angle = (angleval - 180);
  //import ball.y and ball.x
  $("#game").append(`<div id="arrow" style=" top: ${ball.y + 7}; left: ${ball.x + 5};transform:rotate(${-arr_angle}deg)"></div>`);

}

function getCurrentPowa() {
  return hitstrength
}
function getCurrentAngle() {
  return angleval
}
export { getCurrentPowa, BarMover, getCurrentAngle, barNextHole }

