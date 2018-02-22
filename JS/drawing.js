
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    guideCanvas = document.getElementById("guide-canvas"),
    guideCtx = guideCanvas.getContext("2d"),
    drawing = false,
    lastX = 0,
    lastY = 0,
    curX = 0,
    curY = 0,
    startX = 0,
    startY = 0,
    lineThickness = 1;

canvas.width = canvas.height = 500;

guideCanvas.width = guideCanvas.height = 500;

guideCanvas.onmousedown = function(e) {
    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;
    drawing = true;

};

guideCanvas.onmouseup = function(e){
    drawing = false;

    ctx.strokeStyle = "#293";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(lastX, lastY);
    ctx.stroke();

    guideCtx.clearRect(0, 0, 600, 600);
};

guideCanvas.onmouseclick = function(e) {

    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;

    drawing = true;
};


guideCanvas.onmousemove = function(e) {
    if(drawing){
        lastX = e.pageX - this.offsetLeft;
        lastY = e.pageY - this.offsetTop;
        guideCtx.clearRect(0,0,600,600);
        guideCtx.beginPath();
        guideCtx.moveTo(startX ,startY );
        guideCtx.lineTo(lastX, lastY);
        guideCtx.stroke();
    }
}