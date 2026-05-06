# shadowpuppet.net

Static hub site for the apps published by ShadowPuppet, LLC.

Plain HTML/CSS, no build step. Edit `index.html`, push to `master`, GitHub Pages serves it.

## Files

- `index.html` — single-page hub. CSS is inline.
- `assets/icons/` — 256×256 app icons sourced from each app's marketing site.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` — SEO + PWA basics.
- `CNAME` — custom domain.
- `DESIGN.md` — design spec for the current iteration.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```

## Adding an app

1. Drop a 256×256 PNG into `assets/icons/<slug>.png`.
2. Add a card under `<section class="apps">` in `index.html` (copy the pattern of an existing card).
3. Add a hero pill above it (mirror the pattern in `<nav class="pills">`).
4. Add a `MobileApplication` entry to the `ItemList` JSON-LD block.
5. Update `sitemap.xml` `lastmod`.
