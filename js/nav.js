/**
 * Mobile nav toggle. Vanilla JS — Bootstrap's JS bundle was never loaded on
 * this site, so `data-bs-toggle` never worked; this replaces it directly.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".site-nav__toggle");
  var links = document.getElementById("site-nav-links");
  if (!toggle || !links) return;

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("is-open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
