var canvas = document.getElementById('canvas-game');

canvas.setAttribute('width', '700');
canvas.setAttribute('height', '500');

var context = canvas.getContext('2d');

context.fillStyle = '#434343';


var score = 0;
var timeRemaining = 11;
var playing = false;
var rectData = {};
var rectSize = 150;

function createRectangles(rectSize) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    var rectangleDimension = {width: rectSize, height: rectSize};
    var startingPosition = findRandomPosition(rectangleDimension.width, rectangleDimension.height);
    rectData = {
        x: startingPosition.x,
        y: startingPosition.y,
        width: rectSize,
        height: rectSize
    };
    context.fillRect(startingPosition.x, startingPosition.y, rectangleDimension.width, rectangleDimension.height);
}

function findMousePosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function findRandomPosition(rectWidth, rectHeight) {
    return {
        x: Math.floor(Math.random() * (canvas.width - rectWidth)),
        y: Math.floor(Math.random() * (canvas.height - rectHeight))
    };
}

function clickedInRectangle(mousePos, rectData) {
    if (
        mousePos.x >= rectData.x &&
        mousePos.x <= rectData.x + rectData.width &&
        mousePos.y >= rectData.y &&
        mousePos.y <= rectData.y + rectData.height
    ) {
        return true;
    }
    return false;
}

canvas.addEventListener('click', function(evt) {
    if (!playing) {
        start();
    } else if (playing) {
        var mousePos = findMousePosition(canvas, evt);
        if (clickedInRectangle(mousePos, rectData)) {
            score += 1;
            updateInfo();
            createRectangles(rectSize);
        }
    }
});

function start() {
    score = 0;
    timeRemaining = 11;
    playing = true;
    createRectangles(rectSize);
    var intervalID = setInterval(function () {
        timeRemaining -= 1;
        updateInfo();
        if (timeRemaining === 0) {
            playing = false;
            gameOver();
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            clearInterval(intervalID);
        }
    }, 1000);
}

function updateInfo() {
    var gameInfo = document.getElementById('info');
    gameInfo.innerHTML = "Score: " + score + " / " + "Remaining Time: " + timeRemaining;
}

function gameOver() {
    var gameInfo = document.getElementById('info');
    gameInfo.innerHTML = "GAME OVER!" + "<br>" + "SCORE: " + score;
}

