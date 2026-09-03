// let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// if( theme == 'dark' ){
//     document.documentElement.classList.add('dark')
// }

// document.getElementById('dark-mode-toggle').addEventListener('click', function(){
//    document.documentElement.classList.toggle('dark')
// });



// document.getElementById('song-saved').addEventListener('click', function(){
// 	document.getElementById('song-saved').classList.toggle('saved');
// });


// Amplitude.init({
//     "bindings": {
//         37: 'prev',
//         39: 'next',
//         32: 'play_pause'
//     },
//     "callbacks": {
//         timeupdate: function(){
//             let percentage = Amplitude.getSongPlayedPercentage();

//             if( isNaN( percentage ) ){
//                 percentage = 0;
//             }

//             /**
//              * Massive Help from: https://nikitahl.com/style-range-input-css
//              */
//             let slider = document.getElementById('song-percentage-played');
//             slider.style.backgroundSize = percentage + '% 100%';
//         }
//     },
//     "songs": [
// 		{
// 			"name": "First Snow",
// 			"artist": "Emancipator",
// 			"album": "Soon It Will Be Cold Enough",
// 			"url": "https://amplitude-cdn.serversideup.net/songs/FirstSnow-Emancipator.mp3",
// 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
// 		},
// 		{
// 			"name": "Intro / Sweet Glory",
// 			"artist": "Jimkata",
// 			"album": "Die Digital",
// 			"url": "https://amplitude-cdn.serversideup.net/songs/IntroSweetGlory-Jimkata.mp3",
// 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/die-digital.jpg"
// 		},
// 		{
// 			"name": "Offcut #6",
// 			"artist": "Little People",
// 			"album": "We Are But Hunks of Wood Remixes",
// 			"url": "https://amplitude-cdn.serversideup.net/songs/Offcut6-LittlePeople.mp3",
// 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/we-are-but-hunks-of-wood.jpg"
// 		},
// 		{
// 			"name": "Dusk To Dawn",
// 			"artist": "Emancipator",
// 			"album": "Dusk To Dawn",
// 			"url": "https://amplitude-cdn.serversideup.net/songs/DuskToDawn-Emancipator.mp3",
// 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/from-dusk-to-dawn.jpg"
// 		},
// 		{
// 			"name": "Anthem",
// 			"artist": "Emancipator",
// 			"album": "Soon It Will Be Cold Enough",
// 			"url": "https://amplitude-cdn.serversideup.net/songs/Anthem-Emancipator.mp3",
// 			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
// 		}
//     ]
// });

// window.onkeydown = function(e) {
//     return !(e.keyCode == 32);
// };




// const songName = document.getElementById("song-name");

// const audioSource = audio.querySelector("source").src;
// const fileName = audioSource.split("/").pop();
// const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

// songName.textContent = nameWithoutExtension;








// =========================
// DARK MODE
// =========================

// =========================
// DARK MODE
// =========================

let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

if (theme === 'dark') {
    document.documentElement.classList.add('dark');
}

const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
    });
}


// =========================
// AUDIO
// =========================

const audio = document.getElementById('audio');

const playPause = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

const progress = document.getElementById('song-percentage-played');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

const previous = document.getElementById('previous');
const next = document.getElementById('next');

const repeatButton = document.getElementById('repeat');
const shuffleButton = document.getElementById('shuffle');
const favoriteButton = document.getElementById('song-saved');

const songName = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const songCover = document.getElementById('song-cover');


// =========================
// SONG LIST
// =========================

// songs باید از music.html بیاید
let currentSongIndex = 0;
let repeat = false;
let shuffle = false;


// =========================
// LOAD SONG
// =========================

function loadSong(index, autoPlay = false) {

    if (!songs || songs.length === 0) {
        console.log('No songs found.');
        return;
    }

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    // Audio
    audio.src = song.audio;
    audio.load();

    // Song information
    if (songName) {
        songName.textContent = song.title;
    }

    if (songArtist) {
        songArtist.textContent = song.artist;
    }

    if (songCover) {
        songCover.src = song.cover;
    }

    // Reset progress
    progress.value = 0;
    currentTime.textContent = '0:00';
    duration.textContent = '0:00';

    if (autoPlay) {
        audio.play().catch(function (error) {
            console.error('Audio could not be played:', error);
        });
    }
}


// =========================
// PLAY / PAUSE
// =========================

playPause.addEventListener('click', function () {

    if (audio.paused) {

        audio.play()
            .catch(function (error) {
                console.error('Audio could not be played:', error);
            });

    } else {

        audio.pause();

    }

});


// =========================
// WHEN AUDIO STARTS
// =========================

audio.addEventListener('play', function () {

    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');

});


// =========================
// WHEN AUDIO PAUSES
// =========================

audio.addEventListener('pause', function () {

    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');

});


// =========================
// AUDIO INFORMATION
// =========================

audio.addEventListener('loadedmetadata', function () {

    if (!isNaN(audio.duration)) {

        progress.max = audio.duration;

        duration.textContent = formatTime(audio.duration);

    }

});


// =========================
// PROGRESS
// =========================

audio.addEventListener('timeupdate', function () {

    if (!audio.duration) {
        return;
    }

    progress.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.style.backgroundSize =
        percentage + '% 100%';

});


// =========================
// SEEK
// =========================

progress.addEventListener('input', function () {

    audio.currentTime = Number(progress.value);

});


// =========================
// PREVIOUS SONG
// =========================

previous.addEventListener('click', function () {

    if (!songs || songs.length === 0) {
        return;
    }

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// NEXT SONG
// =========================

next.addEventListener('click', function () {

    if (!songs || songs.length === 0) {
        return;
    }

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// REPEAT
// =========================

repeatButton.addEventListener('click', function () {

    repeat = !repeat;

    repeatButton.classList.toggle('active', repeat);

});


// =========================
// SHUFFLE
// =========================

shuffleButton.addEventListener('click', function () {

    shuffle = !shuffle;

    shuffleButton.classList.toggle('active', shuffle);

});


// =========================
// WHEN SONG ENDS
// =========================

audio.addEventListener('ended', function () {

    // Repeat current song
    if (repeat) {

        audio.currentTime = 0;

        audio.play().catch(function (error) {
            console.error(error);
        });

        return;
    }


    // Shuffle
    if (shuffle && songs.length > 1) {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(Math.random() * songs.length);

        } while (randomIndex === currentSongIndex);

        loadSong(randomIndex, true);

        return;
    }


    // Next song
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);

});


// =========================
// FAVORITE
// =========================

favoriteButton.addEventListener('click', function () {

    favoriteButton.classList.toggle('saved');

});


// =========================
// KEYBOARD
// SPACE = PLAY / PAUSE
// LEFT = PREVIOUS
// RIGHT = NEXT
// =========================

document.addEventListener('keydown', function (event) {

    const tag = document.activeElement.tagName;

    if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT'
    ) {
        return;
    }


    // Space
    if (event.code === 'Space') {

        event.preventDefault();

        if (audio.paused) {

            audio.play().catch(function (error) {
                console.error(error);
            });

        } else {

            audio.pause();

        }

    }


    // Left arrow
    if (event.code === 'ArrowLeft') {

        previous.click();

    }


    // Right arrow
    if (event.code === 'ArrowRight') {

        next.click();

    }

});


// =========================
// FORMAT TIME
// =========================

function formatTime(seconds) {

    if (isNaN(seconds) || !isFinite(seconds)) {
        return '0:00';
    }

    const minutes = Math.floor(seconds / 60);

    const secondsLeft = Math.floor(seconds % 60);

    return (
        minutes +
        ':' +
        secondsLeft.toString().padStart(2, '0')
    );

}


// =========================
// FIRST SONG
// =========================

if (typeof songs !== 'undefined' && songs.length > 0) {

    loadSong(0, false);

} else {

    console.log('No songs available from Django.');

}