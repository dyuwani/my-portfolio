/**
 * Generic render engine — turns the plain data arrays in js/data/*.js into
 * markup. One renderList()/card() pattern reused by every data-driven section
 * so adding content never requires touching this file.
 */
(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ICONS = {
    "message-square": '<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21l3.5-4"></path>',
    "check-square": '<rect x="3" y="3" width="18" height="18" rx="3"></rect><polyline points="8 12 11 15 16 9"></polyline>',
    target: '<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="4.5"></circle><circle cx="12" cy="12" r="1"></circle>',
    "refresh-cw": '<path d="M4 12a8 8 0 0 1 14-5.3L21 9"></path><polyline points="21 4 21 9 16 9"></polyline><path d="M20 12a8 8 0 0 1-14 5.3L3 15"></path><polyline points="3 20 3 15 8 15"></polyline>',
    "alert-triangle": '<path d="M12 4 3 20h18L12 4z"></path><line x1="12" y1="10" x2="12" y2="14"></line><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"></circle>',
    "file-text": '<path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v4h4"></path><line x1="9.5" y1="12" x2="14.5" y2="12"></line><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"></line>',
    "bar-chart-2": '<line x1="6" y1="20" x2="6" y2="12"></line><line x1="12" y1="20" x2="12" y2="6"></line><line x1="18" y1="20" x2="18" y2="15"></line>',
    users: '<circle cx="9" cy="8" r="3"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><circle cx="17.5" cy="9" r="2.3"></circle><path d="M15.8 14.2c2.6.3 4.7 2.5 4.7 5.3"></path>',
    flag: '<line x1="6" y1="3" x2="6" y2="21"></line><path d="M6 4h12l-3 4 3 4H6"></path>',
    "trending-up": '<polyline points="3 17 9 11 13 15 21 6"></polyline><polyline points="15 6 21 6 21 12"></polyline>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"></circle><line x1="20" y1="20" x2="15.3" y2="15.3"></line>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><line x1="8" y1="3" x2="8" y2="7"></line><line x1="16" y1="3" x2="16" y2="7"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    monitor: '<rect x="2.5" y="4" width="19" height="13" rx="1.5"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    compass: '<circle cx="12" cy="12" r="9"></circle><polygon points="15 9 13 13 9 15 11 11"></polygon>',
    award: '<circle cx="12" cy="8" r="5"></circle><path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5"></path>'
  };

  function icon(name, size) {
    var inner = ICONS[name] || ICONS.target;
    return '<svg width="' + (size || 20) + '" height="' + (size || 20) +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  function renderList(containerId, items, templateFn) {
    var el = document.getElementById(containerId);
    if (!el || !Array.isArray(items) || !items.length) return;
    el.innerHTML = items.map(templateFn).join("");
  }

  function badgeList(items) {
    return items.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
  }

  var data = window.PortfolioData || {};

  // --- Experience ---
  renderList("experience-list", data.experience, function (job) {
    return (
      '<article class="experience-item glass' + (job.current ? " card--featured" : "") + '">' +
      '<div class="experience-item__meta">' +
      '<span class="experience-item__period">' + esc(job.period) + (job.current ? ' <span class="tag">Current</span>' : "") + "</span>" +
      '<h3 class="experience-item__role">' + esc(job.role) + "</h3>" +
      '<span class="experience-item__company">' + esc(job.company) + "</span>" +
      '<div class="project-card__tech">' + badgeList(job.tags || []) + "</div>" +
      "</div>" +
      '<ul class="experience-item__bullets">' +
      (job.bullets || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
      "</ul>" +
      "</article>"
    );
  });

  // --- Projects ---
  renderList("projects-grid", data.projects, function (p) {
    function dl(term, list) {
      return "<dt>" + esc(term) + "</dt><dd>" + list.map(esc).join("; ") + "</dd>";
    }
    return (
      '<article class="card glass project-card">' +
      '<span class="tag">' + esc(p.category) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      "<p>" + esc(p.overview) + "</p>" +
      '<div class="project-card__tech">' + badgeList(p.tech) + "</div>" +
      "<dl>" +
      "<dt>Role</dt><dd>" + esc(p.role) + "</dd>" +
      dl("Challenges", p.challenges) +
      dl("Impact", p.impact) +
      dl("Key Achievements", p.achievements) +
      "</dl>" +
      "</article>"
    );
  });

  // --- Certifications ---
  renderList("certifications-grid", data.certifications, function (c) {
    return (
      '<article class="card glass cert-card">' +
      '<div class="cert-card__top">' +
      '<span class="card-icon">' + icon("award", 20) + "</span>" +
      '<span class="cert-card__year">' + esc(c.year) + "</span>" +
      "</div>" +
      "<h3>" + esc(c.name) + "</h3>" +
      (c.issuer ? '<span class="cert-card__issuer">' + esc(c.issuer) + "</span>" : "") +
      "</article>"
    );
  });

  renderList("education-items", data.education, function (e) {
    return (
      '<div class="education-item glass">' +
      "<div>" +
      '<div class="education-item__name">' + esc(e.degree) + "</div>" +
      '<div class="education-item__school">' + esc(e.school) + "</div>" +
      "</div>" +
      '<span class="tag">' + esc(e.year) + "</span>" +
      "</div>"
    );
  });

  // --- AI use cases + workflow ---
  if (data.aiWorkflows) {
    renderList("ai-use-cases-grid", data.aiWorkflows.useCases, function (u) {
      return (
        '<article class="card glass">' +
        '<span class="card-icon">' + icon(u.icon, 20) + "</span>" +
        "<h3>" + esc(u.title) + "</h3>" +
        "<p>" + esc(u.summary) + "</p>" +
        "</article>"
      );
    });

    renderList("ai-workflow-steps", data.aiWorkflows.workflow, function (s) {
      return (
        '<div class="workflow-step">' +
        '<div class="workflow-step__rail">' +
        '<span class="workflow-step__num">' + esc(s.step) + "</span>" +
        '<span class="workflow-step__line"></span>' +
        "</div>" +
        '<div class="workflow-step__body">' +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.detail) + "</p>" +
        "</div>" +
        "</div>"
      );
    });
  }

  // --- Skills ---
  renderList("skills-list", data.skills, function (group) {
    return (
      '<div class="skills-category">' +
      "<h3>" + esc(group.category) + "</h3>" +
      '<div class="skills-category__badges">' +
      group.items.map(function (item) { return '<span class="badge">' + esc(item) + "</span>"; }).join("") +
      "</div>" +
      "</div>"
    );
  });

  // --- Metrics ---
  renderList("metrics-grid", data.metrics, function (m) {
    return (
      '<div class="metric-tile glass">' +
      '<span class="metric-tile__value gradient-text">' + esc(m.value) + "</span>" +
      '<span class="metric-tile__label">' + esc(m.label) + "</span>" +
      "</div>"
    );
  });
})();
