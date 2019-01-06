const canvasWidth = 640;
const canvasHeight = 640;
const lineDelta = 4;
const drawCount = 1;
let randomChance = 0.5;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');
}

let positionIndex = 0;

function draw() {
    if (!isDrawingFinished()) {
        for (let i = 0; i < drawCount; i++) {
            let position = calculatePosition();
            drawChar(position);
            moveToNextPosition();
        }
    }
}

function isDrawingFinished() {
    return positionIndex > canvasWidth * (canvasHeight / lineDelta);
}

function calculatePosition() {
    let x = positionIndex % canvasWidth;
    let y = Math.floor(positionIndex / canvasHeight) * lineDelta;

    return new Point(x, y);
}

function drawChar(position) {
    let from = Object.assign({}, position);
    let to = Object.assign({}, position);

    clearChar(position);

    if (shouldDrawLeftOrientedLine()) {
        to.x += lineDelta;
        to.y += lineDelta;
    } else {
        from.y += lineDelta;
        to.x += lineDelta;
    }
    drawLine(from, to);
}

function clearChar(position) {
    fill(255);
    stroke(255);
    rect(position.x + 1, position.y + 1, lineDelta - 1, lineDelta - 1);
}

function moveToNextPosition() {
    positionIndex += lineDelta;
}

function shouldDrawLeftOrientedLine() {
    return Math.random() > randomChance;
}

function drawLine(from, to) {
    fill(0);
    stroke(0);
    line(from.x, from.y, to.x, to.y);
}
