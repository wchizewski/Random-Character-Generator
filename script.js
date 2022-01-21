// Random Character Generator by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1050;
cnv.height = 900;
let mousex;
let mousey;
let faceImg = "";

let stickManImg = document.getElementById("stick-man");
let angryFaceImg = document.getElementById("angry-face");
let happyFaceImg = document.getElementById("happy-face");
let therockFaceImg = document.getElementById("therock-face");

document.addEventListener("mousemove", mousemovemanager)
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

requestAnimationFrame(loop);
function loop() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    if (faceImg != "") {
        ctx.drawImage(faceImg, 275, 45);
    }

    ctx.fillStyle = "black"
    ctx.fillText("GET A RANDOM STICK MAN", 240, 700)
    ctx.drawImage(stickManImg, 275, 45);
    ctx.font = "40px Arial";


    requestAnimationFrame(loop);
}

function mousemovemanager(event) {
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
        let faceProbability = Math.random()
        if (faceProbability < 0.33) {
            faceImg = angryFaceImg
        } else if (faceProbability < 0.66) {
            faceImg = happyFaceImg
        } else {
            faceImg = therockFaceImg
        }
    }
}
