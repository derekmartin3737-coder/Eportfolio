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
    path: "Professional Materials",
    href: "artifacts/resume-cover-letter/index.html",
    status: "Summary available",
    description:
      "Professional application materials supporting Derek Martin's transition into aerospace and mechanical engineering roles.",
    competencies: ["careerSelfDevelopment", "professionalism"],
    linkLabel: "View artifact summary",
  },
  {
    title: "Design Proposal",
    path: "Research & Planning",
    href: "artifacts/design-proposal/index.html",
    status: "Summary available",
    description:
      "Proposal work showing how Derek frames design problems, researches requirements, and communicates technical direction.",
    competencies: ["criticalThinking", "communication"],
    linkLabel: "View artifact summary",
  },
  {
    title: "Self-Learning Assignment",
    path: "Independent Learning",
    href: "artifacts/self-learning-assignment/index.html",
    status: "Summary available",
    description:
      "Independent technical work that highlights curiosity, applied learning, and Derek's ongoing growth with engineering tools and methods.",
    competencies: ["technology", "criticalThinking"],
    linkLabel: "View artifact summary",
  },
  {
    title: "Final Team Report",
    path: "Team Collaboration",
    href: "artifacts/final-team-report/index.html",
    status: "Summary available",
    description:
      "A team deliverable that demonstrates collaborative execution, technical communication, and contribution to shared engineering outcomes.",
    competencies: ["teamwork", "communication"],
    linkLabel: "View artifact summary",
  },
  {
    title: "Team Charter",
    path: "Leadership & Process",
    href: "artifacts/team-charter/index.html",
    status: "Summary available",
    description:
      "A record of how Derek approached roles, expectations, and team standards with an emphasis on leadership and professionalism.",
    competencies: ["leadership", "professionalism", "careerSelfDevelopment", "equityInclusion"],
    linkLabel: "View artifact summary",
  },
  {
    title: "Reflection Essay",
    path: "Reflection & Goals",
    href: "artifacts/reflection-essay/index.html",
    status: "Summary available",
    description:
      "A reflective summary connecting Derek Martin's experiences, NACE competencies, and future engineering goals.",
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
    linkLabel: "View artifact summary",
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
