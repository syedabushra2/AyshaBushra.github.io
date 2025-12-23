document.getElementById("year").textContent = new Date().getFullYear();
const toggleBtn = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    toggleBtn.textContent = "🎵 Music";
  }
  isPlaying = !isPlaying;
});
