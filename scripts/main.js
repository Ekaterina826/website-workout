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
