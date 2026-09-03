


const audio = document.getElementById("audio");

const playPause = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

const next = document.getElementById("next");
const previous = document.getElementById("previous");

const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const songCover = document.getElementById("song-cover");

const progress = document.getElementById("song-percentage-played");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

let currentSongIndex = 0;


// -------------------------
// Load Song
// -------------------------

function loadSong(index, autoPlay = false) {

    if (!songs || songs.length === 0) {
        console.log("هیچ آهنگی وجود ندارد");
        return;
    }

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    console.log("Loading:", song.title);

    audio.src = song.audio;

    songName.textContent = song.title;
    songArtist.textContent = song.artist;
    songCover.src = song.cover;

    audio.load();

    if (autoPlay) {
        audio.play().catch(error => {
            console.log("Play error:", error);
        });
    }
}


// -------------------------
// Play / Pause
// -------------------------

playPause.addEventListener("click", function () {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

});


audio.addEventListener("play", function () {

    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");

});


audio.addEventListener("pause", function () {

    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");

});


// -------------------------
// NEXT
// -------------------------

next.addEventListener("click", function () {

    console.log("NEXT CLICKED");

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// -------------------------
// PREVIOUS
// -------------------------

previous.addEventListener("click", function () {

    console.log("PREVIOUS CLICKED");

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex, true);

});


// -------------------------
// Progress
// -------------------------

audio.addEventListener("loadedmetadata", function() {

    progress.max = audio.duration;

    duration.textContent = formatTime(audio.duration);

});


audio.addEventListener("timeupdate", function() {

    progress.value = audio.currentTime;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


progress.addEventListener("input", function() {

    audio.currentTime = progress.value;

});



// -------------------------
// وقتی آهنگ تمام شد
// -------------------------

audio.addEventListener("ended", function () {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// -------------------------
// Time
// -------------------------

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);

    const secondsLeft = Math.floor(seconds % 60);

    return minutes + ":" + secondsLeft
        .toString()
        .padStart(2, "0");
}


// -------------------------
// Start
// -------------------------

console.log("TOTAL SONGS:", songs.length);

loadSong(0, false);