/**
 * Evento de boton para que cuando se pulse
 * se desplieguen las opciones
 */
const optionToggle = document.getElementById("option-toggle");
const language = document.querySelector(".language-container");
const day_night = document.querySelector(".btn-day-night");

optionToggle.addEventListener("click", () => {
  language.classList.toggle("show");
  day_night.classList.toggle("show");
});