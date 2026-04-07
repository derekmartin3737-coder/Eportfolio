# Derek Martin Engineering Portfolio

A static engineering portfolio site for Derek Martin, built to work well on GitHub Pages.

## What is included

- A personalized homepage in `index.html`
- Site styling in `styles.css`
- Data-driven artifact and competency rendering in `script.js`
- Organized artifact folders in `artifacts/`

## Current artifact structure

- `artifacts/resume-cover-letter/`
- `artifacts/design-proposal/`
- `artifacts/self-learning-assignment/`
- `artifacts/final-team-report/`
- `artifacts/team-charter/`
- `artifacts/reflection-essay/`

Each folder includes an `index.html` summary page. Final documents can be linked into each section as they are uploaded.

## Local preview

Because this is a static site, no install or build step is required.

1. Open `index.html` directly in a browser.
2. Edit `index.html`, `styles.css`, or `script.js` as needed.
3. Refresh the browser to see changes.

## How to add your real files

1. Put the real PDF or document into the matching folder under `artifacts/`.
2. Use a descriptive filename such as `derek-martin-resume.pdf` or `capstone-design-proposal-final.pdf`.
3. If you want a homepage card to open the uploaded file directly, update that card's `href` value in `script.js`.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository settings.
3. Enable GitHub Pages and deploy from the main branch root folder.

Because the site uses only static files, no build step is required.
