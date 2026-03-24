import { getCollection, type CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

export function getBuildNow() {
	const override = import.meta.env.BLOG_PUBLISH_NOW;

	if (!override) {
		return new Date();
	}

	const parsed = new Date(override);

	if (Number.isNaN(parsed.valueOf())) {
		throw new Error(`Invalid BLOG_PUBLISH_NOW value: ${override}`);
	}

	return parsed;
}

export function getPublishDate(post: BlogPost) {
	return post.data.publishAt ?? post.data.pubDate;
}

export function isPublishedPost(post: BlogPost, now = getBuildNow()) {
	return post.data.isApproved && getPublishDate(post).valueOf() <= now.valueOf();
}

export function sortPostsByPublishDate(posts: BlogPost[]) {
	return posts.sort((a, b) => getPublishDate(b).valueOf() - getPublishDate(a).valueOf());
}

export async function getPublishedPosts(now = getBuildNow()) {
	const posts = await getCollection('blog');
	return sortPostsByPublishDate(posts.filter((post) => isPublishedPost(post, now)));
}

export async function getScheduledPosts(now = getBuildNow()) {
	const posts = await getCollection('blog');
	return sortPostsByPublishDate(
		posts.filter(
			(post) => post.data.isApproved && getPublishDate(post).valueOf() > now.valueOf(),
		),
	);
}
