audio = new Audio(["http://stream.basso.fi:8000/stream"]);

audio.volume = .5;

function changeAudioVolume(event) {
    audio.volume = event.target.value;
}