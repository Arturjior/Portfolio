/**
 * Evento de boton para que cuando se pulse
 * se despliegue el menu
 */
const menuToggle = document.getElementById("menu-toggle");
const topbar = document.querySelector(".topbar");

menuToggle.addEventListener("click", () => {
  topbar.classList.toggle("show");
});