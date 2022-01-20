// Random Character Generator by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1050;
cnv.height = 900;
let mousex;
let mousey

let stickManImg = document.getElementById("stick-man");
ctx.drawImage(stickManImg, 275, 45,);

ctx.font = "40px Arial";
ctx.fillText("GET A RANDOM STICK MAN", 240, 700)

document.addEventListener("mousemove", mousemovemanager)
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

function mousemovemanager (event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x;
    mousey = event.y - cnvRect.y;
    console.log(mousey, mousex)
}

function mouseupmanager() {
    followmouse = "none"
    mouseisclicked = false;
}

function mousedownmanager() {
    mouseisclicked = true;
    if ((mousex >= 243 && mousex <= 776) && (mousey >= 672 && mousey <= 700)) {
        console.log("nice")
    }
}
