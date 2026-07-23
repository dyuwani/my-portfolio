/**
 * "How I Use AI as a Project Manager" — use-case cards + the 4-step workflow.
 * `icon` keys map to the shared icon set in js/render.js.
 */
window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.aiWorkflows = {
  useCases: [
    { id: "meeting-summaries", title: "Meeting Summaries", icon: "message-square", summary: "Turn raw call transcripts and notes into structured summaries with decisions and owners captured." },
    { id: "action-items", title: "Action Item Extraction", icon: "check-square", summary: "Pull concrete, assignable action items out of meeting notes and threads in seconds, not minutes." },
    { id: "project-planning", title: "Project Planning", icon: "target", summary: "Draft first-pass project plans and work breakdown structures to accelerate kickoff." },
    { id: "sprint-planning", title: "Sprint Planning", icon: "refresh-cw", summary: "Shape backlog items into sprint-ready stories and flag scope or dependency risks early." },
    { id: "risk-register", title: "Risk Register Creation", icon: "alert-triangle", summary: "Generate a first-draft risk register from project context, ready for team validation." },
    { id: "project-documentation", title: "Project Documentation", icon: "file-text", summary: "Produce consistent project documentation — from runbooks to lessons learned — faster." },
    { id: "executive-reports", title: "Executive Status Reports", icon: "bar-chart-2", summary: "Convert raw status updates into concise, Minto-structured executive reporting." },
    { id: "stakeholder-comms", title: "Stakeholder Communications", icon: "users", summary: "Tailor the same update into the right tone and detail level for each stakeholder audience." },
    { id: "project-charters", title: "Project Charters", icon: "flag", summary: "Draft project charters that clearly frame scope, objectives, and success criteria." },
    { id: "roadmaps", title: "Roadmaps", icon: "trending-up", summary: "Translate priorities and dependencies into a clear, presentable roadmap view." },
    { id: "requirement-analysis", title: "Requirement Analysis", icon: "search", summary: "Analyze raw requirements input for gaps, conflicts, and missing acceptance criteria." },
    { id: "timeline-planning", title: "Timeline Planning", icon: "calendar", summary: "Model realistic timelines and milestones from scope and resource constraints." },
    { id: "presentation-creation", title: "Presentation Creation", icon: "monitor", summary: "Build first-draft decks and talking points, freeing time for polish and rehearsal." },
    { id: "decision-support", title: "Decision Support", icon: "compass", summary: "Structure options, trade-offs, and recommendations to speed up executive decisions." }
  ],
  workflow: [
    { step: 1, title: "Planning", detail: "Define scope, risks, and stakeholders before any drafting begins." },
    { step: 2, title: "AI Draft", detail: "Generate a fast first-pass artifact — report, plan, charter, or deck." },
    { step: 3, title: "Review & Validation", detail: "Apply PM judgment: fact-check, align to context, ensure compliance." },
    { step: 4, title: "Final Delivery", detail: "Ship a polished, accountable output stakeholders can act on." }
  ]
};
