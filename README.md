# Derek Martin Engineering Portfolio

Static GitHub Pages portfolio. Last content review: September 25, 2026.

## Current content

- B.S. Mechanical Engineering completed September 2026, aerospace focus and physics minor.
- Master’s in Engineering in progress, expected June 2027.
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
