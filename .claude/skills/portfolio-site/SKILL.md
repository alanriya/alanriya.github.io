---
name: portfolio-site
description: Guide for editing and styling Alan Lee's personal website (React + Tailwind). Use when updating jobs, projects, skills, contact details, images, or the visual design.
---

# Portfolio site guide

Audience: hedge funds, asset managers, tech firms. Tone: sharp, credible, minimal.

## Rules

- Content lives only in `src/data.js`. Components render it; never hardcode job or project text in components.
- Never publish a phone number. Email only, via `mailto:` plus a copy-to-clipboard button (`EmailButtons.js`).
- No map or street-level location. City only ("Singapore").
- Keep copy short: 1-2 sentence project summaries, 2-3 bullets per job, no filler. Do not invent facts or metrics; use only what the user has stated.
- Do not litter code with comments.

## Updating

- New job: copy a block in `experience` to the top (newest first). Fields: `company, team?, role, period, location, bullets[]`.
- New project: add to `projects` with `title, summary, tags[], image, link`. The first project renders as a wide hero card, so put the strongest one first.
- Images: `public/images/projects/<project-slug>.{png,gif}`, referenced as `/images/projects/<slug>.ext`. Name files after the project. Profile photo is `public/images/profile.jpg` (2:3 portrait, shown uncropped).
- Large GIFs (>5 MB) slow the page; compress or convert to a short MP4/WebP when adding new ones.

## Design system

- Dark hero, dark projects band, light experience and skills: strong contrast between sections.
- Colours in `tailwind.config.js`: `ink` (#0b1220), `panel`, `accent` (teal; `accent-light` on dark, `accent` on light).
- Type: Inter for text, JetBrains Mono for labels, dates, tags.
- Sharp corners (no rounded), 1px hairline borders, numbered section labels (`01`, `02`, ...), subtle grid background (`.grid-bg`).
- Primary CTA is "Email me" in the nav, hero and contact section.
- Must look right at 390px wide and 1280px wide.

## Build and check

- Use `npm run build` (react-scripts). `craco build` exits silently without output in this setup.
- Tailwind v3 is used via react-scripts; config uses `content`, not `purge`.
- Preview visually: build to a temp dir (`BUILD_PATH=...`), serve it, and screenshot with headless Edge:
  `msedge --headless --window-size=1280,5000 --virtual-time-budget=10000 --screenshot=out.png http://localhost:PORT`
  Headless Edge has a minimum window width of about 500px, so use 500 for the mobile check.
