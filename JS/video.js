var video = document.getElementById("video");

video.volume = .5;

function changeVideoVolume(event) {
    video.volume = event.target.value;
}