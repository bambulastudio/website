# Bámbula Studio — Static Site

A clean, bilingual (EN/ES) one‑page website you can host for free.

## Files
- `index.html` — the page
- `styles.css` — theme & layout (black/white/mustard)
- `script.js` — language toggle & small UX
- `assets/logo_placeholder.svg` — replace with your logo SVG/PNG
- `assets/favicon.svg` — browser icon

## Edit
- Replace copy inside `index.html` as needed.
- Update prices or text in both English and Spanish blocks (see `data-i18n` keys in `script.js`).
- Replace `action` URL in the contact `<form>` with your own Formspree endpoint (free tier).

## Deploy (GitHub Pages — Free)
1. Create a GitHub repo named `bambula-site` (or any name).
2. Upload all files at the repo root.
3. In repo Settings → Pages → set Source to `Deploy from a branch`, branch = `main`, folder = `/ (root)`.
4. Wait ~1 minute; your site will be live at `https://<your-username>.github.io/<repo-name>/`.
5. Optional: Buy a custom domain (e.g., Namecheap/Google Domains), then connect it to GitHub Pages (add DNS A/AAAA + CNAME).

## Deploy (Cloudflare Pages — Free)
1. Push the repo to GitHub.
2. In Cloudflare Pages → Create a project → Connect to the repo → Framework preset: `None`.
3. Build settings: leave defaults, just deploy. Add your custom domain if desired.

## Notes
- Keep images small and compressed (under 200 KB) for speed.
- Accessibility: good color contrast, focus outlines, alt text on images.
- SEO: page `<title>` and `<meta name="description">` already set; adjust as needed.
