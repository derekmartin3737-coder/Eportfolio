# Derek Martin Engineering Portfolio

Static GitHub Pages portfolio. Last content review: October 6, 2026.

## Current content

- B.S. Mechanical Engineering completed September 2026, aerospace focus and physics minor.
- Master of Engineering (M.Eng.), Mechanical Engineering in progress, expected June 2027.
- Selected engineering, Python, capstone and field experience.
- Current approved resume: `artifacts/resume-cover-letter/DerekMartin_Resume.pdf`.
- Original capstone documents and Evensol cover letter are historical artifacts.
- `derek-martin-final-eportfolio.pdf` is the original course submission, not the current resume.

## Preview

Run `python -m http.server 8766 --bind 127.0.0.1` and visit http://127.0.0.1:8766/.
No build or dependency installation is required. GitHub Pages publishes the main branch root.

## Maintaining the site

Update the homepage and resume together when education or experience changes. Keep completed dates distinct from expected dates. Preserve original course documents as historical records; do not present their older resume or degree descriptions as current.

The homepage artifact list and competency filters are in `script.js`; summary pages live in `artifacts/`. Keep the no-JavaScript artifact links in `index.html` aligned with those pages. Do not publish private application-profile details, authentication email, date of birth, demographic answers, or application-tracker data.

Before publishing, check relative links, keyboard navigation, competency filters, mobile navigation, and the resume download. `node --check script.js` checks JavaScript syntax.

Project case studies live in `projects/`; the capstone case study remains at `artifacts/final-team-report/` so existing links continue working. Numeric project performance is only stated when supported by project records. EMT certification is dated rather than asserted to be currently active.

## October 2026 verification

Validated all ten HTML pages and 98 local link/asset references. Chromium checks passed at 390 px and 1440 px on every page, with additional homepage checks at 320 px and 768 px. Checked mobile navigation, Escape-to-close, competency filters, no-JavaScript document access, and JavaScript errors. The current resume PDF was rendered from the approved October DOCX and visually checked as one page. External LinkedIn availability was not verified. This is a static site with no production build step.
