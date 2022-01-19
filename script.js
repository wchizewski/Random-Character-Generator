// Random Character Generator by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1050;
cnv.height = 900;

let stickManImg = document.getElementById("stick-man");
ctx.drawImage(stickManImg, 350, 100);