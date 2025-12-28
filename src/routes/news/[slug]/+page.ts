import { getAllPosts } from '$lib/news';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts();
	return posts.map((p) => ({ slug: p.slug }));
};

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/news/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		throw error(404, 'Post not found');
	}
};
