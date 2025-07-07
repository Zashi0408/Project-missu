
  const audio = document.getElementById('lagu');
  const btn = document.getElementById('play-btn');
  const bars = document.querySelectorAll('.visualizer span');

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸️ Pause";
      bars.forEach(bar => {
        bar.style.animationPlayState = "running";
      });
    } else {
      audio.pause();
      btn.textContent = "▶️ Play";
      bars.forEach(bar => {
        bar.style.animationPlayState = "paused";
      });
    }
  }

  // Optional: jika lagu selesai, reset animasi
  audio.addEventListener('ended', () => {
    btn.textContent = "▶️ Play";
    bars.forEach(bar => {
      bar.style.animationPlayState = "paused";
    });
  });

