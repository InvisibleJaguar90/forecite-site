# Forecite site

Static marketing site for [forecite.agency](https://forecite.agency).

## Stack

- **Vite 5** + **React 18** (production build, no Babel-in-browser)
- **React Router v6** with `BrowserRouter` (real URLs)
- **Cloudflare Pages** for hosting (GitHub-connected, auto-deploy on push)

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serves dist/ at http://localhost:4173
```

## Cloudflare Pages settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (project root) |
| Node version | 20 (default works) |

`public/_redirects` ships an SPA fallback so deep links (`/services`, `/audit`, etc.) survive refresh.

## Project layout

```
public/             ← static assets copied verbatim into dist/
  _redirects        ← Cloudflare Pages SPA fallback
  favicon.{ico,svg} apple-touch-icon.png icon-{192,512}.png og-image.png
  site.webmanifest
  assets/           ← grain.svg, wordmarks, icons

src/
  main.jsx          ← Router setup
  App.jsx           ← layout shell (TopBar + Outlet + Footer)
  components/
    TopBar.jsx Footer.jsx Atoms.jsx Meta.jsx ScrollToTop.jsx
  pages/
    Home.jsx Services.jsx AuditShowcase.jsx About.jsx FAQ.jsx Contact.jsx NotFound.jsx
  styles/
    colors_and_type.css   ← brand tokens + base type
    global.css            ← resets, focus styles, details/summary
```

## Session log

See `forecite/strategy/website-rebuild-handover.md` in the GEO & SEO workspace for the multi-session rebuild plan and per-session log.
