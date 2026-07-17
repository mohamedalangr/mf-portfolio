# Mohamed Fathy — Portfolio Site

A React + Vite personal branding site: hero, about, services, projects, skills, and contact.

## Run it locally

You need [Node.js](https://nodejs.org) installed (v18+).

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Before you deploy — things to personalize

1. **Email** — in `src/components/Contact.jsx`, replace `hello@mohamedfathy.dev` with your real email (both the `value` and the `mailto:` href).
2. **Project links** — in `src/components/Projects.jsx`, each project's `link` currently points to your GitHub profile root. Update to the specific repo URLs once they're public.
3. **Project thumbnails** — right now each project uses a generated abstract SVG placeholder (network graph, bar chart, signal line, pattern) so the site looks finished with no real images yet. Swap these for real screenshots whenever you have them:
   - Add images to `public/images/`
   - In `Projects.jsx`, replace the `thumb: <ThumbNetwork />` line with `thumb: <img src="/images/empowerhr.png" alt="EmpowerHR" />`
4. **Domain** (optional) — buy a domain (e.g. `mohamedfathy.dev`) and connect it in your hosting provider's dashboard.

## Deploy for free

**Option A — Vercel (recommended, easiest):**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click "New Project," pick the repo.
3. Framework preset: Vite. Click Deploy. Done — you get a live URL in ~1 minute.

**Option B — GitHub Pages:**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Add `base: '/your-repo-name/'` to `vite.config.js`
4. Run `npm run deploy`

## Structure

```
src/
  components/
    Nav.jsx        — sticky nav bar
    Hero.jsx        — hero section + status readout
    NodeGraph.jsx    — animated canvas background (hero signature element)
    About.jsx       — bio + experience timeline
    Services.jsx     — service offering cards
    Projects.jsx     — project case studies
    Skills.jsx       — grouped skill list
    Contact.jsx      — contact links (email, LinkedIn, GitHub)
    Footer.jsx
  App.jsx
  index.css        — all design tokens + styles
```

## Design system

- **Colors:** deep navy (`#0a1a2f`) + teal accent (`#1fada3` / `#2fe0c9`), cream background, off-white cards.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows).
- **Signature element:** the animated node-graph in the hero — a quiet nod to ML/data work, respects `prefers-reduced-motion`.

All colors and fonts are CSS variables at the top of `src/index.css` — change them there to restyle the whole site at once.
