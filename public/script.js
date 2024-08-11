// script.js

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const currentSong = document.getElementById("current-song");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const songListItems = document.querySelectorAll("#song-list li");

    songListItems.forEach(item => {
        item.addEventListener("click", function() {
            const song = this.getAttribute("data-song");
            audioPlayer.src = song;
            currentSong.textContent = this.textContent;
            audioPlayer.play();
        });
    });

    playButton.addEventListener("click", function() {
        audioPlayer.play();
    });

    pauseButton.addEventListener("click", function() {
        audioPlayer.pause();
    });
});
