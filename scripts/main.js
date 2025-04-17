document.getElementById("moreButton").addEventListener("click", function () {
  window.location.href = "info.html";
});
// Добавляем обработчик для элемента в шапке
document.getElementById("headerElement").addEventListener("click", function () {
  window.location.href = "info.html";
});
document.getElementById("developer").addEventListener("click", function () {
  window.location.href = "about.html";
});
document.querySelector(".modern-button").addEventListener("click", function () {
  this.style.transform = "scale(0.95)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 200);
});
document.addEventListener("DOMContentLoaded", function () {
  // Создаем частицы фона
  const container = document.getElementById("particles");
  const colors = ["#7ba0d6", "#241d9a", "#a277e3", "#ff69b4"];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.background = `radial-gradient(circle, ${colors[i % 4]}, ${
      colors[(i + 1) % 4]
    })`;
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.animationDuration = 5 + Math.random() * 10 + "s";
    container.appendChild(particle);
  }
});
