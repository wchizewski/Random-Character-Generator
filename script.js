// Random Character Generator by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1050;
cnv.height = 900;
let mousex;
let mousey;
let faceImg = "";
let hatImg = "";
let outfitImg = "";

let stickManImg = document.getElementById("stick-man");
let angryFaceImg = document.getElementById("angry-face");
let happyFaceImg = document.getElementById("happy-face");
let therockFaceImg = document.getElementById("therock-face");
let sadFaceImg = document.getElementById("sad-face");
let topHatImg = document.getElementById("top-hat");
let propellerHatImg = document.getElementById("propeller-hat");
let plantHatImg = document.getElementById("plant-hat");
let shirtpantsOutfitImg = document.getElementById("shirtpants-outfit");
let dripOutfitImg = document.getElementById("drip-outfit");
// let amogusOutfitImg = document.getElementById("amogus-outfit");


document.addEventListener("mousemove", mousemovemanager)
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

requestAnimationFrame(loop);
function loop() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height)


    ctx.drawImage(stickManImg, 275, 45);

    if (faceImg != "") {
        ctx.drawImage(faceImg, 275, 45);
        if (faceImg === sadFaceImg){
            ctx.drawImage(sadFaceImg, 500, 100)
        }
    }

    if (outfitImg != "") {
        ctx.drawImage(outfitImg, 275, 45);
    }

    if (hatImg != "") {
        ctx.drawImage(hatImg, 275, 45);
        if (hatImg === topHatImg){
            ctx.drawImage(topHatImg, 275, 100)
        }
    }

    

    ctx.fillStyle = "black"
    ctx.fillText("GET A RANDOM STICK MAN", 240, 700)

    ctx.font = "40px Arial";


    requestAnimationFrame(loop);
}

function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x;
    mousey = event.y - cnvRect.y;
    console.log(mousex, mousey)
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
        if (faceProbability < 0.25) {
            faceImg = angryFaceImg
        } else if (faceProbability < 0.50) {
            faceImg = happyFaceImg
        } else if (faceProbability < 0.75) {
            faceImg = therockFaceImg
        } else {
            faceImg = sadFaceImg
        }

        let hatProbability = Math.random()
        if (hatProbability < 0.33333) {
            hatImg = topHatImg
        } else if (hatProbability < 0.66666) {
            hatImg = propellerHatImg
        } else {
            hatImg = plantHatImg
        }

        let outfitProbability = Math.random()
        if (outfitProbability < 0.75) {
            outfitImg = shirtpantsOutfitImg
        } else {
            outfitImg = dripOutfitImg
        }
        // } else {
        //     outfitImg = amogusOutfitImg
        // }
}
}
