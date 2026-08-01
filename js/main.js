/* Blog Bruna Oliveira — interações leves */
(function () {
  "use strict";

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("aberto");
      var aberto = links.classList.contains("aberto");
      toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
      toggle.innerHTML = aberto ? "✕" : "☰";
    });
  }

  // Ano dinâmico no footer
  var ano = document.querySelector("[data-ano]");
  if (ano) ano.textContent = new Date().getFullYear();
})();
