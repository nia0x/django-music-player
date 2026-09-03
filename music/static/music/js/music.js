// // let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// // if( theme == 'dark' ){
// //     document.documentElement.classList.add('dark')
// // }

// // document.getElementById('dark-mode-toggle').addEventListener('click', function(){
// //    document.documentElement.classList.toggle('dark')
// // });



// // document.getElementById('song-saved').addEventListener('click', function(){
// // 	document.getElementById('song-saved').classList.toggle('saved');
// // });


// // Amplitude.init({
// //     "bindings": {
// //         37: 'prev',
// //         39: 'next',
// //         32: 'play_pause'
// //     },
// //     "callbacks": {
// //         timeupdate: function(){
// //             let percentage = Amplitude.getSongPlayedPercentage();

// //             if( isNaN( percentage ) ){
// //                 percentage = 0;
// //             }

// //             /**
// //              * Massive Help from: https://nikitahl.com/style-range-input-css
// //              */
// //             let slider = document.getElementById('song-percentage-played');
// //             slider.style.backgroundSize = percentage + '% 100%';
// //         }
// //     },
// //     "songs": [
// // 		{
// // 			"name": "First Snow",
// // 			"artist": "Emancipator",
// // 			"album": "Soon It Will Be Cold Enough",
// // 			"url": "https://amplitude-cdn.serversideup.net/songs/FirstSnow-Emancipator.mp3",
// // 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
// // 		},
// // 		{
// // 			"name": "Intro / Sweet Glory",
// // 			"artist": "Jimkata",
// // 			"album": "Die Digital",
// // 			"url": "https://amplitude-cdn.serversideup.net/songs/IntroSweetGlory-Jimkata.mp3",
// // 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/die-digital.jpg"
// // 		},
// // 		{
// // 			"name": "Offcut #6",
// // 			"artist": "Little People",
// // 			"album": "We Are But Hunks of Wood Remixes",
// // 			"url": "https://amplitude-cdn.serversideup.net/songs/Offcut6-LittlePeople.mp3",
// // 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/we-are-but-hunks-of-wood.jpg"
// // 		},
// // 		{
// // 			"name": "Dusk To Dawn",
// // 			"artist": "Emancipator",
// // 			"album": "Dusk To Dawn",
// // 			"url": "https://amplitude-cdn.serversideup.net/songs/DuskToDawn-Emancipator.mp3",
// // 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/from-dusk-to-dawn.jpg"
// // 		},
// // 		{
// // 			"name": "Anthem",
// // 			"artist": "Emancipator",
// // 			"album": "Soon It Will Be Cold Enough",
// // 			"url": "https://amplitude-cdn.serversideup.net/songs/Anthem-Emancipator.mp3",
// // 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
// // 		}
// //     ]
// // });

// // window.onkeydown = function(e) {
// //     return !(e.keyCode == 32);
// // };




// // const songName = document.getElementById("song-name");

// // const audioSource = audio.querySelector("source").src;
// // const fileName = audioSource.split("/").pop();
// // const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

// // songName.textContent = nameWithoutExtension;








// // =========================
// // DARK MODE
// // =========================

// let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
//     ? 'dark'
//     : 'light';

// if (theme === 'dark') {
//     document.documentElement.classList.add('dark');
// }

// document.getElementById('dark-mode-toggle').addEventListener('click', function () {
//     document.documentElement.classList.toggle('dark');
// });


// // =========================
// // AUDIO
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


// // =========================
// // PLAY / PAUSE
// // =========================

// playPause.addEventListener('click', function () {

//     if (audio.paused) {

//         audio.play()
//             .catch(function (error) {
//                 console.error('Audio could not be played:', error);
//             });

//     } else {

//         audio.pause();

//     }

// });


// // =========================
// // WHEN AUDIO STARTS
// // =========================

// audio.addEventListener('play', function () {

//     playIcon.classList.add('hidden');
//     pauseIcon.classList.remove('hidden');

// });


// // =========================
// // WHEN AUDIO PAUSES
// // =========================

// audio.addEventListener('pause', function () {

//     playIcon.classList.remove('hidden');
//     pauseIcon.classList.add('hidden');

// });


// // =========================
// // AUDIO INFORMATION
// // =========================

// audio.addEventListener('loadedmetadata', function () {

//     progress.max = audio.duration;

//     duration.textContent = formatTime(audio.duration);

// });


// // =========================
// // PROGRESS
// // =========================

// audio.addEventListener('timeupdate', function () {

//     progress.value = audio.currentTime;

//     currentTime.textContent = formatTime(audio.currentTime);

//     if (audio.duration) {

//         const percentage =
//             (audio.currentTime / audio.duration) * 100;

//         progress.style.backgroundSize =
//             percentage + '% 100%';

//     }

// });


// // =========================
// // SEEK
// // =========================

// progress.addEventListener('input', function () {

//     audio.currentTime = progress.value;

// });


// // =========================
// // PREVIOUS
// // =========================

// previous.addEventListener('click', function () {

//     audio.currentTime = 0;

// });


// // =========================
// // NEXT
// // =========================

// next.addEventListener('click', function () {

//     audio.currentTime = 0;

//     audio.play()
//         .catch(function (error) {
//             console.error(error);
//         });

// });


// // =========================
// // REPEAT
// // =========================

// let repeat = false;

// repeatButton.addEventListener('click', function () {

//     repeat = !repeat;

//     repeatButton.classList.toggle('active', repeat);

// });


// // =========================
// // WHEN SONG ENDS
// // =========================

// audio.addEventListener('ended', function () {

//     if (repeat) {

//         audio.currentTime = 0;

//         audio.play();

//     } else {

//         playIcon.classList.remove('hidden');
//         pauseIcon.classList.add('hidden');

//         progress.value = 0;

//         currentTime.textContent = '0:00';

//     }

// });


// // =========================
// // SHUFFLE
// // =========================

// let shuffle = false;

// shuffleButton.addEventListener('click', function () {

//     shuffle = !shuffle;

//     shuffleButton.classList.toggle('active', shuffle);

// });


// // =========================
// // FAVORITE
// // =========================

// favoriteButton.addEventListener('click', function () {

//     favoriteButton.classList.toggle('saved');

// });


// // =========================
// // KEYBOARD
// // SPACE = PLAY / PAUSE
// // =========================

// document.addEventListener('keydown', function (event) {

//     if (event.code === 'Space') {

//         const tag = document.activeElement.tagName;

//         if (tag !== 'INPUT' && tag !== 'TEXTAREA') {

//             event.preventDefault();

//             if (audio.paused) {
//                 audio.play();
//             } else {
//                 audio.pause();
//             }

//         }

//     }

// });


// // =========================
// // FORMAT TIME
// // =========================

// function formatTime(seconds) {

//     if (isNaN(seconds)) {
//         return '0:00';
//     }

//     const minutes = Math.floor(seconds / 60);

//     const secondsLeft = Math.floor(seconds % 60);

//     return (
//         minutes +
//         ':' +
//         secondsLeft.toString().padStart(2, '0')
//     );

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

audio.addEventListener("loadedmetadata", function () {

    progress.max = audio.duration;

    duration.textContent = formatTime(audio.duration);

});


audio.addEventListener("timeupdate", function () {

    progress.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);

});


progress.addEventListener("input", function () {

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