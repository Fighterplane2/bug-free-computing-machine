let img;
let pointArray = [];
let canvasWidth = 1000;
let canvasHeight = 500;
let xPos = 0;
let yPos = 0;
let dropNumber = 400;

function preload(){
    img = loadImage('./images/forest.jpg');

}

function setup(){
createCanvas(canvasWidth,canvasHeight);
for (let i = 0; i < dropNumber; i++){
    xPos = random(0, canvasWidth);
    yPos = random(0, -1 * canvasHeight);
    pointArray.push({yPos: yPos, xPos: xPos});

    }

}

function draw(){
    background(img);
    rainDrops();

}

function rainDrops(){
    for (let point in pointArray){
        fill(125, 208, 244);
        noStroke();

        ellipse(pointArray[point].xPos, pointArray[point].yPos, 7, 15);
        pointArray[point].yPos += 9.796;

        if(pointArray[point].yPos >= canvasHeight){
            pointArray[point].yPos = 0;
            pointArray[point].xPos = random(0, canvasWidth);
        }

    }

}