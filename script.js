console.log('Playing spotify')
// initialize the variable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastername = document.getElementById('mastername');
let masternames = document.getElementById('masternames');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songbanner = document.getElementById('banner');
let timer = document.getElementById('timer');

function myFunction() {
    alert(audioElement.duration);
}
// song array

let songs = [
    { songName: 'Avicii - Wake Me Up (Official audio)', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Babalos - Snow crystal 185 bpm', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'Belik boom - Avada kadabra (Harry potter)', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'Hilight Tribe - Esperanza', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'Hilight Tribe - Gayatri', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'Hippie Sabotage - Devil Eyes', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'Imagine Dragons - Thunder', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'Passenger _ Let Her Go (Official Video)', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
    { songName: 'Red Hot Chili Peppers - Californication ', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
    { songName: 'Red Hot Chili Peppers - Snow (Hey Oh) ', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' },
];

songItem.forEach((element, i) => {
    console.log('risht')
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
//audio element.play

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mastername.innerText = songs[songIndex].songName;
        masternames.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//listen event
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

// progress bar seek change

myprogressbar.addEventListener("change", () => {
    audioElement.currentTime = ((myprogressbar.value * audioElement.duration) / 100)
})

// selecting song from the list to play


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        timer= audioElement.duration;
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        mastername.innerText = songs[songIndex].songName;
        masternames.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songbanner.src = `covers/${songIndex + 1}.jpg`;
        
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastername.innerText = songs[songIndex].songName;
    masternames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    songbanner.src = `covers/${songIndex + 1}.jpg`;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastername.innerText = songs[songIndex].songName;
    masternames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    songbanner.src = `covers/${songIndex + 1}.jpg`;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

