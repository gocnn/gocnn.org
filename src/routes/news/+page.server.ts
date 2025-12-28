import { getAllPosts } from '$lib/news';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getAllPosts();
	return { posts };
};
