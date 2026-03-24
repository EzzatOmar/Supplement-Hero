# Supplement Hero

This repository now contains an Astro blog scaffold for Supplement Hero.

The site is intentionally populated with placeholder pages and placeholder blog posts so the routing, content collection, RSS feed, sitemap, and build pipeline are in place before real editorial content is ready.

## Important

Do not treat the current copy as publishable supplement advice.

Before launch, replace all placeholder content in:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/content/blog/`

You should also update the placeholder site URL in `astro.config.mjs`.

## Commands

Run these from the project root:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local Astro dev server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the built site locally |

## Content notes

- Blog posts live in `src/content/blog/`
- Shared site chrome lives in `src/components/`
- Layouts live in `src/layouts/`
- Static assets live in `public/` and `src/assets/`

Placeholder content should be removed once the team has real supplement research, editorial review, and final brand copy ready.
