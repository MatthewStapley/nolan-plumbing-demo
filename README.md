# Nolan Plumbing: website mock-up

One-page sales demo built with Astro (static, no backend). The booking form is
a front-end demo only: nothing is stored or sent.

## Preview locally

    npm install
    npm run dev        # http://localhost:4321/nolan-plumbing-demo/

Production build: `npm run build`, then `npm run preview`.

## Update content

All business details, services, the hero image and the four gallery photos live
in `src/data/site.ts`. Put real photos in `public/work/` (WebP, about 1600px on
the long edge) and set each `src`, `alt` and `caption`. A supplied logo goes in
`public/` and is set with `business.logo`. WhatsApp stays hidden until
`business.whatsapp` is set.

## Publish to GitHub Pages

1. Create a GitHub repo and push this folder to its `main` branch.
2. In the repo: Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on
   every push to `main`.

Live demo: https://matthewstapley.github.io/nolan-plumbing-demo/
Site URL and base path are set in `astro.config.mjs`.

The page carries `noindex` so the demo stays out of search results; remove it
from `src/layouts/Base.astro` when the site goes live.
