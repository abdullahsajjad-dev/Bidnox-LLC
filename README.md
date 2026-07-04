# Bidnox Estimates — Clean Corporate Website

A professional, minimal, premium corporate SaaS-style website for Bidnox Estimates.

## Files
- `index.html`
- `style.css`
- `script.js`
- `content.json`
- `services.json`
- `pricing.json`
- `testimonials.json`
- `assets/bidnox-logo.png`
- `assets/favicon.svg`

## Preview locally
Because the site loads JSON files dynamically, run it with a local server:

```bash
cd bidnox_estimates_final_corporate
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Notes about images and cleanup
- The repository previously included several `remote_*.` files (old copies). These have been removed to keep the repo clean.
- This project expects an `Image/` folder with project photos. If you want the original photography, add your images into an `Image/` folder at the repository root named like `img 0 (1).jpg`, `img 0 (2).jpeg`, etc.
- If an `Image/` file is missing the site will now fall back to `assets/bidnox-logo.png` so the layout remains intact.

If you want, I can:
- Move all used images into `assets/` and update paths so `Image/` is not required.
- Optimize images and update `style.css` to use responsive `srcset`.
