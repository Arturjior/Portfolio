/**
 * Evento de boton para que cuando se pulse se cambie el
 * tema de modo claro a modo oscuro y viceversa.
 */
document.getElementById("theme-toggle").addEventListener("click", function() {
  const body = document.body;
  const icon = document.getElementById("icon");
  const language_icon = document.getElementById("language-icon");
  const button = document.getElementById("theme-toggle");
  const language_button = document.getElementById("language-toggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
    button.style.backgroundColor = "#1a1a1a";
    language_button.style.backgroundColor = "#1a1a1a";
    icon.style.color = "white";
    language_icon.style.color = "white";
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
    button.style.backgroundColor = "white";
    language_button.style.backgroundColor = "white";
    icon.style.color = "black";
    language_icon.style.color = "black";
  }
});

/**
 * Guardar cambios en localStorage para que cuando cambie el
 * tema a modo oscuro o modo claro, y para que el cambio
 * de idioma se quede guardado en la sesion actual.
 */
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const icon = document.getElementById("icon");
  const language_icon = document.getElementById("language-icon");
  const button = document.getElementById("theme-toggle");
  const language_button = document.getElementById("language-toggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme == "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
    button.style.backgroundColor = "#1a1a1a";
    language_button.style.backgroundColor = "#1a1a1a";
    icon.style.color = "white";
    language_icon.style.color = "white";
  }
});