var socket = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

$( document ).ready(function() {
    callWebSocket();
    updateScroll();
});

function callWebSocket() {


    socket.onopen = function () {
    };

    socket.onmessage = function (e) {
        $("#messages").append(e.data + "<br>");
    };
    socket.onerror = function (e) {
        alert("An error occurred while connecting... " + e.data);
    };
    socket.onclose = function () {
        alert("hello.. The connection has been closed");
    };

}

window.setTimeout(function () {
    updateScroll();
}, 1000);

function logo() {
    socket.send("LOGO");
    updateScroll();
}

function sendMessage() {
    var message = document.getElementById("my-message").value;
    socket.send(message);
    updateScroll();
    clearInput();
    $("#messages").append(e.data + "<br>");
    // clearInput();

}

function keyPress(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

function clearInput() {
    $("#my-message").val("");
}

function updateScroll() {
    var objDiv = $("#messages");
    var h = objDiv.get(0).scrollHeight;
    objDiv.animate({scrollTop: h});
}

