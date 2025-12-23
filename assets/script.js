// Music toggle
const toggleBtn = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

let isPlaying = false;

toggleBtn?.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      await music.play();
      toggleBtn.textContent = "⏸ Pause";
    } else {
      music.pause();
      toggleBtn.textContent = "🎵 Music";
    }
    isPlaying = !isPlaying;
  } catch (e) {
    alert("Your browser blocked audio. Click the button again.");
  }
});

// Back to top
const toTop = document.getElementById("toTop");
toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
