/**
 * Certifications + education. This is the single source of truth for the
 * Certifications section — add a new certification by pushing one object
 * onto `certifications`, no markup or JS changes required.
 *
 * Shape: { id, name, issuer (optional), year, status: "active" | "in-progress" }
 */
window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.certifications = [
  { id: "disciplined-agile", name: "Disciplined Agile® Essentials", issuer: "PMI (Disciplined Agile)", year: "2025", status: "active" },
  { id: "pmi-citizen-developer", name: "PMI Citizen Developer™ Practitioner", issuer: "PMI", year: "2025", status: "active" },
  { id: "pmi-cdba", name: "PMI CDBA Introduction", issuer: "PMI", year: "2025", status: "active" },
  { id: "agile-metrics", name: "Agile Metrics for Success", issuer: "", year: "2025", status: "active" },
  { id: "genai-pm", name: "Generative AI for Project Managers", issuer: "", year: "2025", status: "active" },
  { id: "fullstack-kodego", name: "Full-Stack Web Development", issuer: "Kodego", year: "2024", status: "active" },
  { id: "pm-foundations-linkedin", name: "Program & Project Management Foundations", issuer: "LinkedIn Learning", year: "2021", status: "active" },
  { id: "cybersecurity-foundations", name: "Cybersecurity Foundations", issuer: "LinkedIn Learning", year: "2021", status: "active" },
  { id: "ckmp", name: "Certified Knowledge Management Professional", issuer: "", year: "2017", status: "active" }
];

window.PortfolioData.education = [
  { id: "jd", degree: "Juris Doctor", school: "Centro Escolar University, Makati", year: "Expected 2030", status: "in-progress" },
  { id: "bsed", degree: "Bachelor in Secondary Education, Major in Mathematics", school: "Polytechnic University of the Philippines", year: "2009", status: "active" }
];
