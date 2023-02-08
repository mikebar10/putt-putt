class Hole {
    constructor(number){
        this.number = number;
        var corners;
        var obstacles;
        var start;
        var cupLocation;
    }

    draw(){
        switch(this.number){
            case 1:
                $("<div class=\"hole\" id=\"hole1\"></div>").appendTo("#game");
                var c1 = new Cup(45, 20);
                this.cupLocation = [45,20];
                c1.draw();
                var t1 = new Tee(12, 450, 80, 30);
                t1.draw();
                this.corners=[[3, 3], [3, 503], [103, 503], [103, 3] ];
                this.obstacles=[[[]]];
                this.start = [47,460];
                break;
            case 2:
                $("<div class=\"hole\" id=\"hole2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole2-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole2-3\"><div>").appendTo("#game");
                var c2 = new Cup(325, 30);
                this.cupLocation = [325, 30];
                c2.draw();
                var t2 = new Tee(12, 450, 60, 30);
                t2.draw();
                this.corners=[[3, 3], [3, 503], [83, 503], [83, 73], [383, 73], [383, 3]];
                this.obstacles=[[[250,23], [250, 53]]];
                this.start = [35,460];
                break;
            case 3:
                $("<div class=\"hole\" id=\"hole3-1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole3-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole3-3\"><div>").appendTo("#game");
                var c3 = new Cup(350, 470);
                this.cupLocation = [350, 470];
                c3.draw();
                var t3 = new Tee(12, 450, 60, 30);
                t3.draw();
                this.corners=[[3, 3], [3, 503], [83, 503], [83, 73], [303, 73], [303, 503], [383, 503], [383, 3]];
                this.obstacles=[[[]]];
                this.start = [37,460];
                break;
            case 4:
                $("<div class=\"hole\" id=\"hole1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole4-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole4-3\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole4-4\"><div>").appendTo("#game");
                var c4 = new Cup(45, 20);
                this.cupLocation = [45, 20];
                c4.draw();
                var t4 = new Tee(12, 450, 80, 30);
                t4.draw();
                this.corners=[[3, 3], [3, 503], [103, 503], [103, 3]];
                this.obstacles = [[[3,150], [46, 150]], [[58,250], [100,250]], [[3,350], [46, 350]]]
                this.start = [47,460];
                break;
            case 5:
                $("<div class=\"hole\" id=\"hole1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole5-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole5-3\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole5-4\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole5-5\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole5-6\"><div>").appendTo("#game");
                var c5 = new Cup(45, 20);
                this.cupLocation = [45, 20];
                c5.draw();
                var t5 = new Tee(12, 450, 80, 30);
                t5.draw();
                this.corners=[[3, 3], [3, 503], [103, 503], [103, 3]];
                this.obstacles = [[[3,300], [25, 300]], [[42, 300], [64, 300]], [[81, 300], [100, 300]], 
                [[23,200], [43, 200]], [[63, 200], [83, 200]]];
                this.start = [47,460];
                break;
            case 6:
                $("<div class=\"hole\" id=\"hole6\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole6-1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole6-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole6-3\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole6-4\"><div>").appendTo("#game");
                var c6 = new Cup(32, 20);
                this.cupLocation = [32, 20];
                c6.draw();
                var t6 = new Tee(12, 450, 60, 30);
                t6.draw();
                this.corners=[[3, 3],[3, 203], [-80, 203], [-80, 303], [3, 303], [3, 503], 
                [83, 503], [83, 303], [163, 303], [163, 203], [83, 203], [83, 3]];
                this.obstacles = [[[-10, 230], [32, 271]], [[54, 271], [94, 230]]];
                this.start = [37,460];
                break;
            case 7:
                $("<div class=\"hole\" id=\"hole1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole7-1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole7-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole7-3\"><div>").appendTo("#game");
                var c7 = new Cup(45, 20);
                this.cupLocation = [45, 20];
                c7.draw();
                var t7 = new Tee(12, 450, 80, 30);
                t7.draw();
                this.corners=[[3, 3], [3, 503], [103, 503], [103, 3] ];
                this.obstacles=[[[0, 100], [73, 100]], [[73, 100], [73, 133]], [[40, 230], [40, 200]], 
                [[40, 200], [100, 200]], [[0, 300], [53, 300]], [[53, 300], [53, 320]]];
                this.start = [47,460];
                break;
            case 8:
                $("<div class=\"hole\" id=\"hole8\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole8-1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole8-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole8-3\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole8-4\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole8-5\"><div>").appendTo("#game");
                var c8 = new Cup(245, 360);
                this.cupLocation = [245, 360];
                c8.draw();
                var t8 = new Tee(12, 360, 50, 30);
                t8.draw();
                this.corners=[[3, 3], [3, 403], [73, 403], [73, 173], [223, 173], [223, 403], [293, 403], [293, 3], [223, 3], [223, 93], [73, 93], [73, 3]];
                this.obstacles=[[[250, 135], [264, 152]], [[30, 150], [46, 135]], [[148, 110], [148, 128]]];
                this.start = [33,370];
                break;
            case 9:
                $("<div class=\"hole\" id=\"hole3-1\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole3-2\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole3-3\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-4\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-5\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-6\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-7\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-8\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-9\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-10\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-11\"><div>").appendTo("#game");
                $("<div class=\"hole\" id=\"hole9-13\"><div>").appendTo("#game");
                var c9 = new Cup(350, 470);
                this.cupLocation = [350, 470];
                c9.draw();
                var t9 = new Tee(12, 450, 60, 30);
                t9.draw();

                this.corners=[[3, 3], [3, 503], [83, 503], [83, 343], [303, 343], [303, 503], [383, 503], [383, 3]];
                this.obstacles=[[[83, 303], [303, 303]], [[303, 303], [303, 73]], [[303, 73], [83, 73]], [[83, 73], [83, 303]],
                [[93,303],[93, 313]], [[153,303],[153, 313]], [[213,303],[213, 313]], [[273,303], [273, 313]],
                [[123, 330], [123, 340]], [[183, 330], [183, 340]], [[243, 330], [243, 340]],
                [[145, 19], [225, 19]], [[225, 19], [225, 49]], [[225, 49], [145, 49]]];
                this.start = [37,460];
                break;


        }
            

    }
}


class Cup{
    constructor(x, y){
        this.x = x; 
        this.y = y;
        this.radius = 10;
    }
    draw(){
        $("<div style=\"left:"+this.x+"; top:"+this.y+";\" id=\"cup\"></div>").appendTo("#game");
    }
}

class Tee{
    constructor(x, y, width, height){
        this.x = x; 
        this.y = y;
        this.width=width;
        this.height=height;
    }
    draw(){
        $(`<div style="left: ${this.x}; top: ${this.y}; width: ${this.width}; height:${this.height};" id="tee"></div>`).appendTo("#game");
    }
}

var hole_count=1;
var hole = null

$("#startGameButton").on("click", ()=>{
    hole = new Hole(hole_count);
    $("#startGameButton").remove();
    $("#howToPlayButton").remove();
    $("#instructions").remove();
    $("#hengolfpic").remove();
    $("#nextHoleButton").show();
    $("#scorecard").show();
    hole.draw();
});

function nexthole(){
    console.log;
    $(".hole").remove();
    $("#cup").remove();
    $("#tee").remove();
    $(".check").remove();
    $("#line").remove();
    $("#Powa").remove();
    hole_count+=1;
    if (hole_count<=9){
        hole = new Hole(hole_count);
        hole.draw();
    }else{
        alert("Game Over\nFinal Score: " + $("#totalscore").text());
        $("#ball").remove();
        $("line").remove();
        $("#nextHoleButton").remove();
        $("#youdeethumbsup").toggle();
    }
}

var instruct_tag = document.getElementById("instructions");
var htp_button = document.getElementById("howToPlayButton").addEventListener("click", function(){
    instruct_tag.classList.toggle("instructions")
});

function getCurrentHole(){
    return hole
}
export {getCurrentHole, nexthole}
