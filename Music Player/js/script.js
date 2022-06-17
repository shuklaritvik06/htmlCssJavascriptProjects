const audio = new Audio();
const timer = document.getElementById("currentTime");
const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");

const playButton = document.getElementById("play");
const songs = [
  { songCover: "./assets/1.jpg" },
  { songCover: "./assets/2.jpg" },
  { songCover: "./assets/3.jpg" },
  { songCover: "./assets/4.jpg" },
];

songs.forEach((song, index) => {
  const songImage = document.getElementById(`${index}`);
  songImage.setAttribute("src", song.songCover);
  songImage.addEventListener("click", () => {
    audio.src = `./audio/${index + 1}.mp3`;
    audio.play();
    playButton.classList.replace("bi-play-circle", "bi-pause-circle");
  });
});

audio.addEventListener("timeupdate",()=>{
    timer.innerHTML = `${(audio.currentTime/60).toFixed(2)}`;
    progressBar.value = (audio.currentTime/audio.duration)*100;
});

progressBar.addEventListener("change",()=>{
    audio.currentTime = (progressBar.value/100)*audio.duration;
});

volumeBar.addEventListener("change",()=>{
    audio.volume = volumeBar.value/100;
});

playButton.addEventListener("click", () => {
  if (audio.paused || audio.currentTime === 0) {
    audio.play();
    playButton.classList.replace("bi-play-circle", "bi-pause-circle");
  } else {
    audio.pause();
    playButton.classList.replace("bi-pause-circle", "bi-play-circle");
  }
});
