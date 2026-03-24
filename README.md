# Supplement Hero

This repository contains the Astro site for Supplement Hero.

The blog now supports approval-gated publishing and a simple hourly scheduler path so approved posts can go live without manual edits.

## Important

This is still editorial content, not medical advice. High-stakes claims should go through sourcing and review before approval.

Before production launch:

- Enable GitHub Pages in the repository and set the source to `GitHub Actions`
- If you are using a custom domain, set `SITE_URL` and `BASE_PATH` in the deployment workflow
- Replace stock imagery and tighten brand copy as needed

## Commands

Run these from the project root:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local Astro dev server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the built site locally |

## Content workflow

- Blog posts live in `src/content/blog/`
- A post is published only when `isApproved: true` and `publishAt` is in the past at build time
- Blog index, RSS, and static post routes all use the same publish filter in `src/lib/blog.ts`
- You can override the effective build time with `BLOG_PUBLISH_NOW=2026-03-24T09:00:00Z pnpm build`

## Hourly publishing

`.github/workflows/hourly-publish.yml` deploys the Astro build to GitHub Pages on pushes to `main`, on manual runs, and every hour so approved scheduled posts can go live without a code change.

This is the intended flow:

1. Add or edit a post in `src/content/blog/`
2. Set `isApproved: true`
3. Set `publishAt` to the target timestamp
4. Let the next hourly GitHub Pages deployment rebuild the site

## GitHub Pages

The Astro config now derives the correct Pages URL during GitHub Actions builds:

- `SITE_URL` defaults to `https://<owner>.github.io`
- `BASE_PATH` defaults to `/<repo-name>` during GitHub Actions builds

For a custom domain or a user site repo, override those environment variables in the workflow so canonical URLs, the sitemap, and asset paths stay correct.
