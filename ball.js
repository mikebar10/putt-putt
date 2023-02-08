import { getCurrentHole, nexthole } from './hole.js';
import {BarMover, barNextHole} from './powa.js';
class Ball {
    constructor(x, y){
        this.radius = 7;
        this.x = x;
        this.y = y;
        this.xVel = 0;
        this.yVel = 0;
        this.ballObj=$("<div style=\"left:"+this.x+"; top:"+this.y+"\" id=\"ball\"></div>")
        this.ballObj.appendTo("#game");
    }

    draw(){
        this.ballObj.css({top: this.y, left: this.x});
        //$("<div style=\"left:"+this.x+"; bottom:"+this.y+"\" id=\"ball\"></div>").appendTo("#game");
    }
}

let ball = null

$("#startGameButton").on("click", function(){
    $(".ball").remove();
    $("#line").remove();
    var hole = getCurrentHole();
    ball = new Ball(hole.start[0], hole.start[1]);
    $("#game").append(`<div id="arrow" style=" top: ${hole.start[1]+7}; left: ${hole.start[0]+5};transform:rotate(${arr_angle-90}deg)"></div>`);
});

function diagBounce(ball, point1, point2,) {
    if (((ball.x < point1[0] || ball.x < point2[0]) && (ball.x > point1[0] || ball.x > point2[0])) && ((ball.y < point1[1] || ball.y < point2[1]) && (ball.y > point1[1] || ball.y > point2[1]))) {
        let rise = 0;
        let run = 0;
        if (point1[0] > point2[0]) {
            rise = point1[1] - point2[1];
            run = point1[0] - point2[0];
        } else {
            rise = point2[1] - point1[1];
            run = point2[0] - point1[0];
        }
        let slope = rise / run;
        let b = 0 - ((slope * point1[0]) - point1[1]);
        let y = (slope * ball.x) + b;
        let y2 = (slope * (ball.x + 14)) + b;
        if ((ball.y < y && ball.y + 14 > y) || (ball.y < y2 && ball.y + 14 > y2)) {
            let dot = (ball.xVel * run) + (ball.yVel * rise);
            let magO = Math.sqrt((rise ** 2) + (run ** 2));
            let magB = Math.sqrt((ball.xVel ** 2) + (ball.yVel ** 2));
            let angle = Math.acos(dot / (magB * magO));
            let returnAngle = -(angle - Math.PI);
            let lineAngle = Math.abs(Math.atan(slope));
            let trueAngle = returnAngle - lineAngle;
            return [magB * Math.cos(trueAngle), magB * Math.sin(trueAngle)]
        }
    }
    return[Infinity,Infinity]
}

function collisionCheck(ball, corners, obstacles) {
    let newXvel = ball.xVel;
    let newYvel = ball.yVel;
    for (let i = 0; i < corners.length; i++) {
        if (i == 0) {
            if (corners[i][0] == corners[corners.length - 1][0]) {
                if (corners[i][1] < corners[corners.length - 1][1]) {
                    if (ball.y > corners[i][1] && ball.y < corners[corners.length - 1][1]) {
                        if (ball.x < corners[i][0] && ball.x + 14 > corners[i][0]) {
                            newXvel = 0 - ball.xVel;
                        }

                    }
                } else {
                    if (ball.y < corners[i][1] && ball.y > corners[corners.length - 1][1]) {
                        if (ball.x < corners[i][0] && ball.x + 14 > corners[i][0]) {
                            newXvel = 0 - ball.xVel;
                        }

                    }
                }
            } else if (corners[i][1] == corners[corners.length - 1][1]) {
                if (corners[i][0] < corners[corners.length - 1][0]) {
                    if (ball.x > corners[i][0] && ball.x < corners[corners.length - 1][0]) {
                        if (ball.y < corners[i][1] && ball.y + 14 > corners[i][1]) {
                            newYvel = 0 - ball.yVel;
                        }

                    }
                } else {
                    if (ball.x < corners[i][0] && ball.x > corners[corners.length - 1][0]) {
                        if (ball.y < corners[i][1] && ball.y + 14 > corners[i][1]) {
                            newYvel = 0 - ball.yVel;
                        }

                    }
                }
            } else {
                let check = diagBounce(ball, corners[i], corners[corners.length - 1]);
                if(check[0] != Infinity){
                    newXvel = check[0];
                    newYvel = check[1];
                }
            }
        } else {
            if (corners[i][0] == corners[i - 1][0]) {
                if (corners[i][1] < corners[i - 1][1]) {
                    if (ball.y > corners[i][1] && ball.y < corners[i - 1][1]) {
                        if (ball.x < corners[i][0] && ball.x + 14 > corners[i][0]) {
                            newXvel = 0 - ball.xVel;
                        }

                    }
                } else {
                    if (ball.y < corners[i][1] && ball.y > corners[i - 1][1]) {
                        if (ball.x < corners[i][0] && ball.x + 14 > corners[i][0]) {
                            newXvel = 0 - ball.xVel;
                        }

                    }
                }
            } else if (corners[i][1] == corners[i - 1][1]) {
                if (corners[i][0] < corners[i - 1][0]) {
                    if (ball.x > corners[i][0] && ball.x < corners[i - 1][0]) {
                        if (ball.y < corners[i][1] && ball.y + 14 > corners[i][1]) {
                            newYvel = 0 - ball.yVel;
                        }

                    }
                } else {
                    if (ball.x < corners[i][0] && ball.x > corners[i - 1][0]) {
                        if (ball.y < corners[i][1] && ball.y + 14 > corners[i][1]) {
                            newYvel = 0 - ball.yVel;
                        }

                    }
                }
            } else {
                let check = diagBounce(ball, corners[i], corners[i-1]);
                if(check[0] != Infinity){
                    newXvel = check[0];
                    newYvel = check[1];
                }
            }
        }
    }
    if (obstacles.length > 0) {
        let obs = obstaclesCheck(ball, obstacles);
        if (obs[0] == Infinity) {
            return [newXvel, newYvel];
        } else {
            return obs;
        }
    } else {
        return [newXvel, newYvel];
    }

}

function obstaclesCheck(ball, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        for (let u = 0; u < obstacles[i].length - 1; u++) {
            if (obstacles[i][u][0] == obstacles[i][u + 1][0]) {
                if ((ball.y < obstacles[i][u][1] || ball.y < obstacles[i][u + 1][1]) && (ball.y > obstacles[i][u][1] || ball.y > obstacles[i][u + 1][1])) {
                    if (ball.x < obstacles[i][u][0] && ball.x + 14 > obstacles[i][u][0])
                        return [0 - ball.xVel, ball.yVel];
                }
            } else if (obstacles[i][u][1] == obstacles[i][u + 1][1]) {
                if ((ball.x < obstacles[i][u][0] || ball.x < obstacles[i][u + 1][0]) && (ball.x > obstacles[i][u][0] || ball.x > obstacles[i][u + 1][0])) {
                    if (ball.y < obstacles[i][u][1] && ball.y + 14 > obstacles[i][u][1])
                        return [ball.xVel, 0 - ball.yVel];
                }
            } else {
                let check = diagBounce(ball,obstacles[i][u],obstacles[i][u+1]);
                if(check[0] != Infinity){
                    return check;
                }
            //     if (((ball.x < obstacles[i][u][0] || ball.x < obstacles[i][u + 1][0]) && (ball.x > obstacles[i][u][0] || ball.x > obstacles[i][u + 1][0])) && ((ball.y < obstacles[i][u][1] || ball.y < obstacles[i][u + 1][1]) && (ball.y > obstacles[i][u][1] || ball.y > obstacles[i][u + 1][1]))) {
            //         if (obstacles[i][u][0] > obstacles[i][u + 1][0]) {
            //             let rise = (obstacles[i][u][1] - obstacles[i][u + 1][1]);
            //             let run = obstacles[i][u][0] - obstacles[i][u + 1][0]
            //             let slope = rise / run;
            //             let b = 0 - ((slope * obstacles[i][u][0]) - obstacles[i][u][1]);
            //             let y = (slope * ball.x) + b;
            //             let y2 = (slope * (ball.x + 14)) + b;
            //             if ((ball.y < y && ball.y + 14 > y) || (ball.y < y2 && ball.y + 14 > y2)) {
            //                 let dot = (ball.xVel * run) + (ball.yVel * rise);
            //                 let magO = Math.sqrt((rise ** 2) + (run ** 2));
            //                 let magB = Math.sqrt((ball.xVel ** 2) + (ball.yVel ** 2));
            //                 let angle = Math.acos(dot / (magB * magO));
            //                 let returnAngle = -(angle - Math.PI);
            //                 let lineAngle = Math.abs(Math.atan(slope));
            //                 let trueAngle = returnAngle - lineAngle;
            //                 return [magB * Math.cos(trueAngle), magB * Math.sin(trueAngle)]
            //             }
            //         } else {
            //             let rise = (obstacles[i][u + 1][1] - obstacles[i][u][1]);
            //             let run = obstacles[i][u + 1][0] - obstacles[i][u][0]
            //             let slope = rise / run;
            //             let b = 0 - ((slope * obstacles[i][u][0]) - obstacles[i][u][1]);
            //             let y2 = (slope * (ball.x + 14)) + b;
            //             if ((ball.y < y && ball.y + 14 > y) || (ball.y < y2 && ball.y + 14 > y2)) {
            //                 let dot = (ball.xVel * run) + (ball.yVel * rise);
            //                 let magO = Math.sqrt((rise ** 2) + (run ** 2));
            //                 let magB = Math.sqrt((ball.xVel ** 2) + (ball.yVel ** 2));
            //                 let angle = Math.acos(dot / (magB * magO));
            //                 let returnAngle = -(angle - Math.PI);
            //                 let lineAngle = Math.abs(Math.atan(slope));
            //                 let trueAngle = returnAngle - lineAngle;
            //                 return [magB * Math.cos(trueAngle), magB * Math.sin(trueAngle)]
            //             }
            //         }
            //     }
            }
        }
    }
    return [Infinity, Infinity];
}

let fric = .007


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var arr_angle=-90;
async function moveBall(mag,angle){
        angle=angle-90;
        arr_angle=angle;
        var radians=(angle*Math.PI)/180;
        ball.yVel = -1*(Math.sin(radians)*mag);
        ball.xVel = -1*(Math.cos(radians)*mag);
        //const b = document.querySelector(".ball");
        updateScore();
        while(Math.abs(ball.xVel) > .1 || Math.abs(ball.yVel) > .1){
            //console.log(b.parentElement)
            // if(ball.y <= 0){
            //     ball.yVel = 0 - ball.yVel
            // }
            // if(ball.x <= 0){
            //     ball.xVel = 0 - ball.xVel
            // }
            let hole = getCurrentHole();
            var vels = collisionCheck(ball, getCurrentHole().corners, getCurrentHole().obstacles);
            
            ball.xVel = vels[0];
            ball.yVel = vels[1];
            ball.y = ball.y - ball.yVel;
            ball.x = ball.x + ball.xVel;
            ball.xVel = ball.xVel - ball.xVel*fric
            ball.yVel = ball.yVel - ball.yVel*fric
            ball.draw()
            await sleep(1)
            if((ball.x > hole.cupLocation[0]-5) && ((ball.x + 14) < (hole.cupLocation[0] + 25)) && (ball.y < hole.cupLocation[1]+5) && ((ball.y - 14) > (hole.cupLocation[1] - 25))){
                ball.xVel = 0;
                ball.yVel = 0;
                //move to next hole
                nexthole();
                barNextHole();
                let hole = getCurrentHole();
                $("#game").append(`<div id="arrow" style=" top: ${hole.start[1]+7}; left: ${hole.start[0]+5};transform:rotate(${arr_angle-90}deg)"></div>`);
                ball.x = hole.start[0];
                ball.y = hole.start[1];
                ball.xVel = 0;
                ball.yVel = 0;
                ball.draw();
                $("#line").remove();
            }

        }
        //arrow show up again at  transform-origin: 0% 0%;
        $("#game").append(`<div id="arrow" style=" top: ${ball.y+7}; left: ${ball.x+5};transform:rotate(${-arr_angle+90}deg)"></div>`);
        BarMover();
}

function updateScore(){
    //for individual hole
    let hole = getCurrentHole().number;
    let i = parseInt($(`#h${hole}score`).html());
    $(`#h${hole}score`).text((i+=1) + "");

    //for total score
    let j = parseInt($(`#totalscore`).html());
    $("#totalscore").text((j+=1) + "");
}

//$("#game").append(`<div id="arrow" style=" top: ${ball.y}; left: ${ball.x};transform:rotate(${arr_angle}deg)"></div>`);
export{moveBall,ball}