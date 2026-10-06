# KdAndrade.github.io

Personal portfolio — Kauan de Andrade Oliveira

Static portfolio built with vanilla HTML, CSS, and JavaScript. No build tools or dependencies required.

## 📋 Structure

- `index.html` — Main portfolio page
- `css/styles.css` — Styling with dark/light theme support
- `js/` — JavaScript modules for interactivity and i18n
  - `main.js` — Entry point and section rendering
  - `theme.js` — Theme switcher logic
  - `i18n.js` — Internationalization (en-US, pt-BR)
  - `sections/` — Content modules for each section
  - `data/` — Projects list and translations

## 🚀 Published on GitHub Pages

The portfolio is deployed directly from the root of this repository.
- **URL**: https://kdandrade.github.io/
- **Branch**: main
- **Source**: /(root)

## 🎨 Features

- **Dark & Light themes** — Auto-detect system preference, manual override saved
- **Internationalization** — English (en-US) and Brazilian Portuguese (pt-BR)
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — Mobile-first design with smooth scrolling
- **No external dependencies** — Pure HTML, CSS, and vanilla JavaScript

## 🛠️ Local Development

Start a local HTTP server:

```bash
python -m http.server 8080
# or
npx http-server
```

Then open http://localhost:8080

## ✏️ Editing Content

- **Projects**: Edit `js/data/projects.js`
- **Sections**: Modify files in `js/sections/`
- **Styling**: Update `css/styles.css`
- **Translations**: Add entries to `js/data/translations.js`
- **Theme tokens**: Adjust CSS variables in `css/styles.css`

## 📝 License

See LICENSE file.