# ShadowPuppet.net Hub — Design

Status: approved 2026-05-05. Ready for implementation plan.

## Context

Replace the current single-page "retired freelance" site with a hub showcasing the 6 ShadowPuppet, LLC apps (BarnHub, BookLoom, MortalLoom, EscapeMint, ADultingHD, Idea Loom). Demolish the deprecated Grunt + Bower + Jade + Stylus + Bespoke.js + CoffeeScript stack down to plain static HTML/CSS, matching every other marketing site in the family. The hub deliberately offers **no contact information** — Adam doesn't want freelance/agency solicitation.

## Visual direction — Shadow Theater Dark

- Canvas: `#0d0a14` (near-black indigo)
- Radial light pools: violet `rgba(120, 80, 180, 0.22)` top-left, deep blue `rgba(60, 100, 180, 0.18)` bottom-right
- Hero H1: violet→blue gradient text (`linear-gradient(135deg, #c4a0e8, #80a8e0)` clipped to text)
- Body text: soft lavender `#e8e3f0`
- Accent (links / CTAs): plum violet `#c4a0e8`
- Muted text: `#9088a8`
- Cards: `rgba(255,255,255,0.04)` fill, `rgba(255,255,255,0.08)` border, 12px radius, hover lifts to `rgba(255,255,255,0.07)` + border `rgba(196,160,232,0.3)`
- Typography: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Brand wordmark: uppercase, `letter-spacing: 0.05em`, weight 800
- **Dark only** — no light mode. Theatre has no daytime.
- Honor `prefers-reduced-motion` to disable hover transitions.

## Page structure (single-scroll)

1. **Hero**
   - `SHADOWPUPPET` wordmark
   - H1: "Quiet apps for loud times."
   - Subtitle: "Six privacy-first apps for iPhone, iPad & Mac. No accounts. No tracking. Just tools."
   - Below subtitle: 6 small icon pills (one per app) acting as anchor links to the grid

2. **Apps grid** (`<section id="apps">`)
   - 2-column on desktop (≥720px), 1-column on mobile
   - Each card: icon (38–48px), name (bold), tagline (one line), "Learn more →" affordance
   - Whole card is the anchor link to the marketing site

3. **About** (`<section id="about">`)
   - Heading: "About"
   - Body (verbatim):
     > Hi, I'm Adam Eivy. I make these apps because I want tools that respect my time, my attention, and my data — and the ones I wanted didn't exist. Privacy-first means no servers, no accounts, no analytics. Your data lives on your device, not mine.
   - One short follow-up paragraph (verbatim):
     > ShadowPuppet, LLC is the name on the App Store listing. It's a one-person operation.

4. **Footer**
   - One line: `© 2026 ShadowPuppet, LLC. All rights reserved.`
   - No nav, no contact, no socials.

## App cards (verbatim copy)

| App | Tagline | Marketing URL | App Store ID |
|---|---|---|---|
| BarnHub | Privacy-first barn & horse management. | https://barnhub.online | 6760518680 |
| BookLoom | Private book club planner with voting, meetings & shared ratings. | https://bookloom.shadowpuppet.net | 6765790616 |
| MortalLoom | Life planning paired with deep longevity tracking. | https://mortalloom.shadowpuppet.net | 6760883701 |
| EscapeMint | Rules-based DCA & portfolio tracking. | https://escapemint.shadowpuppet.net | 6760598547 |
| ADultingHD | Gamified household tasks. Level up real life. | https://adultinghd.shadowpuppet.net | 6761036805 |
| Idea Loom | Daily creative brainstorming. 10 ideas, every day. | https://idealoom.shadowpuppet.net | 6749868977 |

Card order: by App Store ID descending (newest first) → BookLoom, ADultingHD, MortalLoom, BarnHub, EscapeMint, Idea Loom.

## SEO infrastructure (matching family pattern)

- `index.html`: `<title>`, meta description, meta keywords, OG, Twitter, canonical, theme-color
- JSON-LD block 1: `Organization` schema for ShadowPuppet, LLC
- JSON-LD block 2: `ItemList` of 6 `MobileApplication` entries (each with name, description, App Store ID, downloadUrl, image, applicationCategory)
- `robots.txt` — allow all, point at sitemap
- `sitemap.xml` — single `<url>` for `/` (priority 1.0)
- `manifest.webmanifest` — name, theme/background colors, icons, no `related_applications` (no single app)
- `favicon.png` + `apple-touch-icon.png` — kept from current site

## CSS approach

Inline `<style>` in `index.html`. Single page, ~300 lines of CSS, no install banner. Per CLAUDE.md note about HTML/CSS cache split, keeping CSS inline avoids a cache split between HTML and external CSS.

## File layout after demolition

```
shadowpuppet.net/
├── CNAME                     ← NEW (current repo has none; domain is custom)
├── index.html                ← NEW (single-page hub, inline CSS, JSON-LD)
├── robots.txt                ← NEW
├── sitemap.xml               ← NEW
├── manifest.webmanifest      ← NEW
├── assets/
│   └── icons/                ← NEW: 6 app icons, copied from each marketing site
│       ├── barnhub.png
│       ├── bookloom.png
│       ├── mortalloom.png
│       ├── escapemint.png
│       ├── adultinghd.png
│       └── idealoom.png
├── favicon.png               ← KEPT
├── apple-touch-icon.png      ← KEPT
├── LICENSE                   ← KEPT
└── README.md                 ← REWRITTEN (one-paragraph: "Static hub site for ShadowPuppet, LLC apps. Edit index.html, push, GitHub Pages serves.")
```

## Demolition list

Delete entirely:

- `Gruntfile.js`
- `package.json`
- `bower.json`
- `src/` (Jade templates, Stylus, CoffeeScript, Bespoke.js, all current copy/imagery)
- `public/` (Grunt build output, if present)
- `node_modules/` (if present)

The current page content (Disney mention, "no I won't build your site," GIFs of Cleese, Mickey, etc.) is intentionally fully discarded.

## Implementation approach

Demolish-and-rebuild. The current `src/` tree has nothing reusable — different content, different stack, different aesthetic. Cleanest path: `rm -rf` the old, write the new.

Ordering:
1. Add CNAME (domain is custom, current repo missing it)
2. Write new `index.html`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
3. Copy 6 app icons from sister marketing-site repos into `assets/icons/`
4. Delete old build stack files and `src/` / `public/`
5. Rewrite README
6. Local verify, commit, push

## Verification

1. `python3 -m http.server` from repo root, load `http://localhost:8000/`
2. Click every app card — confirm each lands on the right marketing site
3. Click every hero icon-pill — confirm anchor scroll to apps section
4. Run Google Rich Results Test against the rendered HTML — Organization and ItemList must validate
5. Lighthouse a11y check: contrast on dark canvas (lavender body text on `#0d0a14` — verify ≥ 4.5:1), all links have visible focus, semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
6. Open in Safari, Chrome, Firefox — confirm radial gradients render, hero gradient text renders (Safari + Firefox need `-webkit-background-clip` + `background-clip` both)
7. `prefers-reduced-motion: reduce` test — hover transitions must be suppressed

## Out of scope

- Custom logo mark (typeset wordmark only)
- Blog / notes section
- App Store badge buttons on the hub (each marketing site has its own)
- Analytics (privacy-first family principle, matches current site)
- IndexNow integration (single page, low value; revisit if we add /vs/ pages later)
- Contact / email / social links — explicitly excluded by user request to discourage freelance solicitation
- Light mode

## Open questions

None. Design is approved.
