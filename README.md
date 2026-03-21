# Bámbula Studio Website

This repository is the source of truth for the live site.

## Branches
- `main` = live site published by GitHub Pages
- `dev` = local development branch

## Files
- `index.html` — main page
- `styles.css` — layout and theme
- `script.js` — interactions and bilingual content
- `book.html` — booking page
- `ThankYou.html` — thank-you page
- `assets/` — images and icons

## Local Workflow
Run your local server from this repository while you are on `dev`.

Create the `dev` branch once:

```bash
git checkout main
git pull origin main
git checkout -b dev
```

Daily development:

```bash
git checkout dev
git pull origin dev
# edit files
# run local server
git add .
git commit -m "Describe the change"
git push -u origin dev
```

Publish to live:

```bash
git checkout main
git pull origin main
git merge --ff-only dev
git push origin main
git checkout dev
```

If `git merge --ff-only dev` fails, `main` and `dev` have diverged. Rebase or merge `main` into `dev` first, test again, then publish.

## GitHub Pages
This repo is connected to GitHub Pages and should publish from:
- branch: `main`
- folder: `/ (root)`

Custom domain is set through `CNAME`.

## Maintenance
- `.DS_Store` is ignored via `.gitignore`
- Keep images compressed for page speed
- Update bilingual copy in both HTML and `script.js` where applicable
- Review `git diff` before publishing to `main`
