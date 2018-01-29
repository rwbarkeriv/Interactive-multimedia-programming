var video = document.getElementById("video");

video.volume = .5;

function changeVolume(event) {
    video.volume = event.target.value;
}