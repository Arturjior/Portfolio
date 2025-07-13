const currentPage = window.location.pathname;

/**
 * Funciones para que no lanze errores si algun elemento no
 * esta presente en la pagina.
 */
function safeSetHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function safeSetFirstChildText(id, value) {
  const el = document.getElementById(id);
  if (el?.firstChild) el.firstChild.textContent = value;
}

function applyTranslations(data, lang) {
  // Traducciones específicas por página
  if (currentPage.includes("index.html")) {
    safeSetFirstChildText("greeting", data[lang]["greeting"]);
    safeSetHTML("name", data[lang]["name"]);
    safeSetHTML("occupation", data[lang]["occupation"]);
    safeSetHTML("introduction", data[lang]["introduction"]);
  }

  if (currentPage.includes("about.html")) {
    safeSetHTML("about-text-1", data[lang]["about-text-1"]);
    safeSetHTML("about-text-2", data[lang]["about-text-2"]);
    safeSetHTML("about-text-3", data[lang]["about-text-3"]);
    safeSetHTML("about-education-title", data[lang]["about-education-title"]);
    safeSetHTML("about-education-1", data[lang]["about-education-1"]);
    safeSetHTML("about-education-2", data[lang]["about-education-2"]);
    safeSetHTML("about-interests-title", data[lang]["about-interests-title"]);
    safeSetHTML("about-videogames", data[lang]["about-videogames"]);
    safeSetHTML("about-anime", data[lang]["about-anime"]);
    safeSetHTML("about-app", data[lang]["about-app"]);
    safeSetHTML("about-franchise", data[lang]["about-franchise"]);
    safeSetHTML("about-manga", data[lang]["about-manga"]);
  }

  if (currentPage.includes("work.html")) {
    safeSetHTML("work-introduction", data[lang]["work-introduction"]);
    safeSetHTML("work-rk", data[lang]["work-rk"]);
    safeSetHTML("work-beep", data[lang]["work-beep"]);
    safeSetHTML("portfolio", data[lang]["portfolio"]);
    safeSetHTML("work-portfolio", data[lang]["work-portfolio"]);
  }

  if (currentPage.includes("contact.html")) {
    safeSetHTML("contact-label-name", data[lang]["contact-label-name"]);
    safeSetHTML("contact-label-email", data[lang]["contact-label-email"]);
    safeSetHTML("contact-label-subject", data[lang]["contact-label-subject"]);
    safeSetHTML("contact-label-message", data[lang]["contact-label-message"]);
    safeSetHTML("contact-button", data[lang]["contact-button"]);
  }
}

/**
 * Evento de boton para que cuando se pulse aparezca un
 * menu desplegable con el idioma a seleccionar.
 */
document.getElementById("language-toggle").addEventListener("click", function() {
  const dropdown = document.getElementById("language-options");

  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

/**
 * Evento que cambia el idioma de la pagina web
 * segun el idioma seleccionado en el menu desplegable.
 */
document.querySelectorAll(".language-option").forEach(button => {
  button.addEventListener("click", function() {
    const selectedLang = this.dataset.lang;
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

    localStorage.setItem("language", selectedLang);

    fetch(`${basePath}translation/translations.json`)
      .then(response => response.json())
      .then(data => {
        applyTranslations(data, selectedLang);
      });

    document.getElementById("language-options").style.display = "none";
  });
});

/**
 * Guardar cambios en localStorage para que cuando cambie el
 * idioma se quede guardado en la sesion actual.
 */
document.addEventListener("DOMContentLoaded", function() {
  const savedLanguage = localStorage.getItem("language");
  const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

  if (savedLanguage) {
    fetch(`${basePath}translation/translations.json`)
      .then(response => response.json())
      .then(data => {
        if (data[savedLanguage]) {
          applyTranslations(data, savedLanguage);
        }
      });
  }
});