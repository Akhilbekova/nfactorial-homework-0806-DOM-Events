const background = document.getElementById("video-background")
let playVideoBtn = document.getElementById("btn-change-background")
const playPauseTrackBtn = document.getElementById("playpause-track")
const audio = document.getElementById("audio")

function playVideo(){
    if(background.paused){
        background.play();
        playVideoBtn.style.backgroundColor = 'black'
    }else{
        background.pause()
        playVideoBtn.style.backgroundColor = 'transparent'
    }
}

function playPauseTrack(){
    if(audio.paused){
        audio.play();
        playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    }else{
        audio.pause();
        playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

    }
}


function progressValue() {
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;

    currentTime.textContent = formatTime(track.currentTime);
    durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);