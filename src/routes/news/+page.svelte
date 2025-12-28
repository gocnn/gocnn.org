<script lang="ts">
	import { Header, formatDate } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>News | GoCNN</title>
	<meta
		name="description"
		content="Stay up to date with GoCNN's latest releases, feature announcements, and project updates."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">News</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">What's happening in the GoCNN world?</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<ul class="space-y-8">
		{#each data.posts as post (post.slug)}
			<li class="border-b border-warm-light pb-8 last:border-b-0">
				<a href="/news/{post.slug}" class="group block no-underline">
					<h2
						class="font-title text-2xl font-bold text-warm-dark transition-colors group-hover:text-primary"
					>
						{post.title}
					</h2>
				</a>
				{#if post.subtitle}
					<p class="mt-2 text-lg text-text-muted">{post.subtitle}</p>
				{/if}
				<div class="mt-3 flex items-center gap-4 text-sm text-text-muted">
					<span>{formatDate(post.date)}</span>
					<span>·</span>
					<a
						href={post.authorUrl}
						class="text-primary hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{post.author}
					</a>
				</div>
			</li>
		{/each}
	</ul>

	{#if data.posts.length === 0}
		<p class="text-center text-lg text-text-muted">No news posts yet.</p>
	{/if}
</main>
