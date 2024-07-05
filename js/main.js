let img;
let raindrops = [];
let canvasWidth = 1000;
let canvasHeight = 500;
let xPos = 0;
let yPos = 0;


function preload(){
    img = loadImage('./images/forest.jpg')
}

function setup(){
createCanvas(canvasWidth,canvasHeight)

for (let i = 0; i < 200; i++){
    xPos = random(0, canvasWidth);
    yPos = random(0, -1 * canvasHeight);
    raindrops.push({yPos: yPos, xPos: xPos})
}
}

function draw(){
    background(img)
}