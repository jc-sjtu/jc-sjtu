# Jiacheng Liu — Academic Homepage

A responsive English academic homepage built as a zero-dependency static site and deployed with GitHub Pages.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys every push to `main`. In the repository settings, select **GitHub Actions** under **Settings → Pages → Build and deployment → Source** once.

## Updating content

- **All personal information and publications: `assets/content.js`**
- Page structure: `index.html`
- Interactions: `assets/main.js`
- Visual design: `assets/style.css`

For ordinary updates, you only need to edit `assets/content.js`. It is divided into clearly labelled sections for profile information, biography, research areas, publications, experience, awards, and service. No build step is required—save the file and refresh the browser.
