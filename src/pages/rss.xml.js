import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishDate, getPublishedPosts } from '../lib/blog';

export async function GET(context) {
	const posts = await getPublishedPosts();
	const basePath = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(basePath, context.site),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: getPublishDate(post),
			link: `blog/${post.id}/`,
		})),
	});
}
