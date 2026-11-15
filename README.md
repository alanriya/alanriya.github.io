# Alan Lee: Personal Website

React 17 + Tailwind CSS portfolio, live at https://alanriya.netlify.app/.

## Software needed

| Software           | Version        | Why                                      |
| ------------------ | -------------- | ---------------------------------------- |
| Node.js (with npm) | 18 or newer    | Runs the build tooling. Tested on 20.17. |
| Git                | any recent     | Clone and push changes.                  |
| Code editor        | e.g. VS Code   | Editing `src/data.js`.                   |
| Chrome or Edge     | current        | Viewing the site.                        |

Netlify (hosting) and GitHub accounts are only needed to publish.

## Start the project

```bash
git clone https://github.com/alanriya/alanriya.github.io.git
cd alanriya.github.io
npm install
npm start
```

`npm start` serves the site at http://localhost:3000 and reloads when you save a file.
Use npm, not yarn: `package-lock.json` is the maintained lockfile.

If `npm start` exits without printing anything, preview the production build instead:

```bash
npm run build
npx serve -s build
```

## Update content

All text lives in `src/data.js`. Components only render it.

| To change                    | Edit in `src/data.js`                             |
| ---------------------------- | ------------------------------------------------- |
| Name, role, headline, CFA badge | `profile`                                      |
| Email, LinkedIn, GitHub      | `profile.email`, `profile.linkedin`, `profile.github` |
| Jobs                         | `experience` (newest first, copy a block)         |
| Degrees                      | `education`                                       |
| Projects                     | `projects` (image, link, short summary, tags)     |
| Skills and credentials       | `skills`                                          |

The first entry in `projects` is shown as a wide card, so put the strongest project first.

Contact is by email only: a `mailto:` link and a copy button. Do not add a phone number or a map.
Keep your resume out of the repo; `*.docx` is git-ignored because it contains a phone number.

## Images

```
public/images/profile.jpg                      2:3 portrait
public/images/projects/<project-slug>.png|gif  one file per project
```

Reference them as `/images/projects/<project-slug>.gif` in `src/data.js`.
Unused files are kept in `archive/unused-assets/` and are not published.

## Build and deploy

```bash
npm run build      # production build in ./build
```

Netlify runs `npm run build` (see `netlify.toml`) whenever the production branch, usually `main`, is updated.
To publish to GitHub Pages instead, run `npm run deploy`.

## Project layout

```
src/data.js            all site content
src/components/        About (hero), Experience, Projects, Skills, Contact, Navbar
tailwind.config.js     colours and fonts
public/images/         profile photo and project screenshots
```
