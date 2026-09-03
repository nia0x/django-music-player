// // =========================
// // DARK MODE
// // =========================

// let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
//     ? 'dark'
//     : 'light';

// if (theme === 'dark') {
//     document.documentElement.classList.add('dark');
// }

// const darkModeToggle = document.getElementById('dark-mode-toggle');

// if (darkModeToggle) {
//     darkModeToggle.addEventListener('click', function () {
//         document.documentElement.classList.toggle('dark');
//     });
// }


// // =========================
// // ELEMENTS
// // =========================

// const audio = document.getElementById('audio');

// const playPause = document.getElementById('play-pause');
// const playIcon = document.getElementById('play-icon');
// const pauseIcon = document.getElementById('pause-icon');

// const progress = document.getElementById('song-percentage-played');
// const currentTime = document.getElementById('current-time');
// const duration = document.getElementById('duration');

// const previous = document.getElementById('previous');
// const next = document.getElementById('next');

// const repeatButton = document.getElementById('repeat');
// const shuffleButton = document.getElementById('shuffle');
// const favoriteButton = document.getElementById('song-saved');

// const songName = document.getElementById('song-name');
// const songArtist = document.getElementById('song-artist');
// const songCover = document.getElementById('song-cover');


// // =========================
// // VARIABLES
// // =========================

// let currentSongIndex = 0;

// let repeat = false;

// let shuffle = false;


// // =========================
// // LOAD SONG
// // =========================

// function loadSong(index, autoPlay = false) {

//     if (songs.length === 0) {
//         console.log("No songs!");
//         return;
//     }

//     currentSongIndex = index;

//     const song = songs[currentSongIndex];

//     console.log("Loading:", song.title);

//     // Audio
//     audio.src = song.audio;

//     // Title
//     songName.textContent = song.title;

//     // Artist
//     songArtist.textContent = song.artist;

//     // Cover
//     songCover.src = song.cover;

//     // Reset
//     progress.value = 0;
//     currentTime.textContent = "0:00";
//     duration.textContent = "0:00";

//     audio.load();

//     if (autoPlay) {

//         audio.play().catch(function (error) {
//             console.error("Play error:", error);
//         });

//     }
// }


// // =========================
// // PLAY / PAUSE
// // =========================

// playPause.addEventListener('click', function () {

//     if (audio.paused) {

//         audio.play().catch(function (error) {
//             console.error(error);
//         });

//     } else {

//         audio.pause();

//     }

// });


// // =========================
// // PLAY
// // =========================

// audio.addEventListener('play', function () {

//     playIcon.classList.add('hidden');

//     pauseIcon.classList.remove('hidden');

// });


// // =========================
// // PAUSE
// // =========================

// audio.addEventListener('pause', function () {

//     playIcon.classList.remove('hidden');

//     pauseIcon.classList.add('hidden');

// });


// // =========================
// // METADATA
// // =========================

// audio.addEventListener('loadedmetadata', function () {

//     progress.max = audio.duration;

//     duration.textContent = formatTime(audio.duration);

// });


// // =========================
// // PROGRESS
// // =========================

// audio.addEventListener('timeupdate', function () {

//     if (!audio.duration) {
//         return;
//     }

//     progress.value = audio.currentTime;

//     currentTime.textContent =
//         formatTime(audio.currentTime);

// });


// // =========================
// // SEEK
// // =========================

// progress.addEventListener('input', function () {

//     audio.currentTime = Number(progress.value);

// });


// // =========================
// // NEXT
// // =========================

// next.addEventListener('click', function () {

//     console.log("NEXT CLICKED");

//     if (songs.length === 0) {
//         return;
//     }

//     if (shuffle) {

//         let randomIndex;

//         do {

//             randomIndex =
//                 Math.floor(Math.random() * songs.length);

//         } while (
//             songs.length > 1 &&
//             randomIndex === currentSongIndex
//         );

//         currentSongIndex = randomIndex;

//     } else {

//         currentSongIndex++;

//         if (currentSongIndex >= songs.length) {
//             currentSongIndex = 0;
//         }

//     }

//     loadSong(currentSongIndex, true);

// });


// // =========================
// // PREVIOUS
// // =========================

// previous.addEventListener('click', function () {

//     console.log("PREVIOUS CLICKED");

//     if (songs.length === 0) {
//         return;
//     }

//     currentSongIndex--;

//     if (currentSongIndex < 0) {
//         currentSongIndex = songs.length - 1;
//     }

//     loadSong(currentSongIndex, true);

// });


// // =========================
// // REPEAT
// // =========================

// repeatButton.addEventListener('click', function () {

//     repeat = !repeat;

//     repeatButton.classList.toggle('active', repeat);

// });


// // =========================
// // SHUFFLE
// // =========================

// shuffleButton.addEventListener('click', function () {

//     shuffle = !shuffle;

//     shuffleButton.classList.toggle('active', shuffle);

// });


// // =========================
// // SONG ENDED
// // =========================

// audio.addEventListener('ended', function () {

//     // Repeat
//     if (repeat) {

//         audio.currentTime = 0;

//         audio.play();

//         return;
//     }

//     // Shuffle
//     if (shuffle && songs.length > 1) {

//         let randomIndex;

//         do {

//             randomIndex =
//                 Math.floor(Math.random() * songs.length);

//         } while (randomIndex === currentSongIndex);

//         currentSongIndex = randomIndex;

//         loadSong(currentSongIndex, true);

//         return;
//     }

//     // Next
//     currentSongIndex++;

//     if (currentSongIndex >= songs.length) {
//         currentSongIndex = 0;
//     }

//     loadSong(currentSongIndex, true);

// });


// // =========================
// // FAVORITE
// // =========================

// favoriteButton.addEventListener('click', function () {

//     favoriteButton.classList.toggle('saved');

// });


// // =========================
// // KEYBOARD
// // =========================

// document.addEventListener('keydown', function (event) {

//     const tag = document.activeElement.tagName;

//     if (
//         tag === 'INPUT' ||
//         tag === 'TEXTAREA' ||
//         tag === 'SELECT'
//     ) {
//         return;
//     }


//     // Space
//     if (event.code === 'Space') {

//         event.preventDefault();

//         if (audio.paused) {

//             audio.play();

//         } else {

//             audio.pause();

//         }

//     }


//     // Right = Next
//     if (event.code === 'ArrowRight') {

//         next.click();

//     }


//     // Left = Previous
//     if (event.code === 'ArrowLeft') {

//         previous.click();

//     }

// });


// // =========================
// // FORMAT TIME
// // =========================

// function formatTime(seconds) {

//     if (isNaN(seconds) || !isFinite(seconds)) {
//         return "0:00";
//     }

//     const minutes = Math.floor(seconds / 60);

//     const secondsLeft = Math.floor(seconds % 60);

//     return (
//         minutes +
//         ":" +
//         secondsLeft.toString().padStart(2, "0")
//     );

// }


// // =========================
// // FIRST SONG
// // =========================

// if (typeof songs !== "undefined" && songs.length > 0) {

//     loadSong(0, false);

//     console.log("Total songs:", songs.length);

// } else {

//     console.log("NO SONGS FROM DJANGO!");

// }









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


// =========================
// LOAD SONG
// =========================

function loadSong(index, autoPlay = false) {

    if (!songs || songs.length === 0) {
        console.log("No songs!");
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
        audio.play().catch(function(error) {
            console.log("PLAY ERROR:", error);
        });
    }
}


// =========================
// PLAY / PAUSE
// =========================

playPause.addEventListener("click", function() {

    if (audio.paused) {

        audio.play().catch(function(error) {
            console.log("PLAY ERROR:", error);
        });

    } else {

        audio.pause();

    }

});


// =========================
// PLAY ICON
// =========================

audio.addEventListener("play", function() {

    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");

});


// =========================
// PAUSE ICON
// =========================

audio.addEventListener("pause", function() {

    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");

});


// =========================
// NEXT
// =========================

next.addEventListener("click", function() {

    console.log("NEXT");

    if (songs.length < 2) {
        console.log("حداقل دو آهنگ لازم داری");
        return;
    }

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// PREVIOUS
// =========================

previous.addEventListener("click", function() {

    console.log("PREVIOUS");

    if (songs.length < 2) {
        console.log("حداقل دو آهنگ لازم داری");
        return;
    }

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// PROGRESS
// =========================

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


// =========================
// AUTO NEXT
// =========================

audio.addEventListener("ended", function() {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// TIME
// =========================

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);

    const secondsLeft = Math.floor(seconds % 60);

    return minutes + ":" +
        secondsLeft.toString().padStart(2, "0");
}


// =========================
// FIRST SONG
// =========================

console.log("TOTAL SONGS:", songs.length);

loadSong(0, false);