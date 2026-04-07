const competencies = {
  communication: {
    label: "Communication",
    description: "Writing and presenting engineering work with clarity and context.",
  },
  criticalThinking: {
    label: "Critical Thinking",
    description: "Research, analysis, and design decisions supported by evidence.",
  },
  teamwork: {
    label: "Teamwork",
    description: "Working effectively with others toward shared engineering goals.",
  },
  leadership: {
    label: "Leadership",
    description: "Taking responsibility for direction, standards, and accountability.",
  },
  professionalism: {
    label: "Professionalism",
    description: "Showing reliability, polish, and readiness for a workplace setting.",
  },
  careerSelfDevelopment: {
    label: "Career & Self Development",
    description: "Reflecting on growth and preparing intentionally for future roles.",
  },
  equityInclusion: {
    label: "Equity & Inclusion",
    description: "Recognizing how collaboration improves when people are included well.",
  },
  technology: {
    label: "Technology",
    description: "Using technical tools and self-learning to solve meaningful problems.",
  },
};

const artifacts = [
  {
    title: "Resume & Cover Letter",
    path: "artifacts/resume-cover-letter/",
    href: "artifacts/resume-cover-letter/index.html",
    status: "Ready for upload",
    description:
      "A professional introduction to your experience, strengths, and the kind of engineering work you want to pursue.",
    competencies: ["careerSelfDevelopment", "professionalism"],
    linkLabel: "Open placeholder page",
  },
  {
    title: "Design Proposal",
    path: "artifacts/design-proposal/",
    href: "artifacts/design-proposal/index.html",
    status: "Ready for upload",
    description:
      "A clearly framed proposal that shows how you research, scope, and communicate a technical solution.",
    competencies: ["criticalThinking", "communication"],
    linkLabel: "Open placeholder page",
  },
  {
    title: "Self-Learning Assignment",
    path: "artifacts/self-learning-assignment/",
    href: "artifacts/self-learning-assignment/index.html",
    status: "Ready for upload",
    description:
      "Evidence that you can independently learn a technology, apply it, and explain how you approached the work.",
    competencies: ["technology", "criticalThinking"],
    linkLabel: "Open placeholder page",
  },
  {
    title: "Final Team Report",
    path: "artifacts/final-team-report/",
    href: "artifacts/final-team-report/index.html",
    status: "Ready for upload",
    description:
      "A collaborative project summary that highlights technical communication, teamwork, and final outcomes.",
    competencies: ["teamwork", "communication"],
    linkLabel: "Open placeholder page",
  },
  {
    title: "Team Charter",
    path: "artifacts/team-charter/",
    href: "artifacts/team-charter/index.html",
    status: "Ready for upload",
    description:
      "An agreement on roles, expectations, and team norms that demonstrates leadership and professional standards.",
    competencies: ["leadership", "professionalism", "careerSelfDevelopment", "equityInclusion"],
    linkLabel: "Open placeholder page",
  },
  {
    title: "Reflection Essay",
    path: "artifacts/reflection-essay/",
    href: "artifacts/reflection-essay/index.html",
    status: "Ready for upload",
    description:
      "A reflective piece connecting your coursework and team experience to competencies, growth, and future goals.",
    competencies: [
      "communication",
      "criticalThinking",
      "teamwork",
      "leadership",
      "professionalism",
      "careerSelfDevelopment",
      "equityInclusion",
      "technology",
    ],
    linkLabel: "Open placeholder page",
  },
];

const filterBar = document.querySelector("[data-filter-bar]");
const artifactGrid = document.querySelector("[data-artifact-grid]");
const competencyGrid = document.querySelector("[data-competency-grid]");

let activeFilter = "all";

function createFilterButton(key, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter-button${key === activeFilter ? " is-active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", () => {
    activeFilter = key;
    renderFilters();
    renderArtifacts();
  });
  return button;
}

function renderFilters() {
  if (!filterBar) {
    return;
  }

  filterBar.innerHTML = "";
  filterBar.appendChild(createFilterButton("all", "All Competencies"));

  Object.entries(competencies).forEach(([key, value]) => {
    filterBar.appendChild(createFilterButton(key, value.label));
  });
}

function renderArtifacts() {
  if (!artifactGrid) {
    return;
  }

  const visibleArtifacts =
    activeFilter === "all"
      ? artifacts
      : artifacts.filter((artifact) => artifact.competencies.includes(activeFilter));

  artifactGrid.innerHTML = "";

  visibleArtifacts.forEach((artifact) => {
    const card = document.createElement("article");
    card.className = "artifact-card";

    const tags = artifact.competencies
      .map((key) => `<span class="tag">${competencies[key].label}</span>`)
      .join("");

    card.innerHTML = `
      <div class="artifact-meta">
        <span class="path-pill">${artifact.path}</span>
        <span class="status-pill">${artifact.status}</span>
      </div>
      <div>
        <h3>${artifact.title}</h3>
        <p>${artifact.description}</p>
      </div>
      <div class="artifact-tags">${tags}</div>
      <div class="artifact-footer">
        <a class="artifact-link" href="${artifact.href}">${artifact.linkLabel}</a>
      </div>
    `;

    artifactGrid.appendChild(card);
  });
}

function renderCompetencies() {
  if (!competencyGrid) {
    return;
  }

  competencyGrid.innerHTML = "";

  Object.entries(competencies).forEach(([key, competency]) => {
    const supportingArtifacts = artifacts.filter((artifact) => artifact.competencies.includes(key));
    const card = document.createElement("article");
    card.className = "competency-card";

    card.innerHTML = `
      <h3>${competency.label}</h3>
      <span class="competency-count">${supportingArtifacts.length}</span>
      <p>${competency.description}</p>
      <div class="competency-tags">
        ${supportingArtifacts
          .map((artifact) => `<span class="tag">${artifact.title}</span>`)
          .join("")}
      </div>
    `;

    competencyGrid.appendChild(card);
  });
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (!toggle || !navLinks) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function updateYear() {
  document.querySelectorAll(".js-year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

renderFilters();
renderArtifacts();
renderCompetencies();
setupScrollReveal();
setupMobileNav();
updateYear();
