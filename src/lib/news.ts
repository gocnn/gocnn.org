export interface PostMeta {
	title: string;
	subtitle: string;
	date: string;
	author: string;
	authorUrl: string;
}

export interface PostListItem extends PostMeta {
	slug: string;
}

type MdModule = { metadata: PostMeta; default: ConstructorOfATypedSvelteComponent };

export async function getAllPosts(): Promise<PostListItem[]> {
	const modules = import.meta.glob<MdModule>('/src/content/news/*.md', { eager: true });

	return Object.entries(modules)
		.filter(([, mod]) => mod.metadata)
		.map(([path, mod]) => ({
			slug: path.replace('/src/content/news/', '').replace('.md', ''),
			...mod.metadata
		}))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateStr: string): string {
	return new Date(dateStr).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
