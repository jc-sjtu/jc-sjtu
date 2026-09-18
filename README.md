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

- Page copy and structure: `index.html`
- Publication data and interactions: `assets/main.js`
- Visual design: `assets/style.css`
