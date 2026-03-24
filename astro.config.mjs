// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const site =
	process.env.SITE_URL ??
	(repositoryOwner
		? `https://${repositoryOwner}.github.io`
		: 'https://supplement-hero.example.com');
const base =
	process.env.BASE_PATH ??
	(process.env.GITHUB_ACTIONS === 'true' && repositoryName ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap()],
});
