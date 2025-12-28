<script lang="ts">
	import { Header, formatDate } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | GoCNN</title>
	<meta name="description" content={data.meta.subtitle} />
</svelte:head>

<Header>
	<h1 class="font-title text-3xl font-bold md:text-4xl lg:text-5xl">{data.meta.title}</h1>
	{#if data.meta.subtitle}
		<p class="mt-4 text-xl opacity-80 md:text-2xl">{data.meta.subtitle}</p>
	{/if}
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<div class="mx-auto max-w-3xl">
		<div
			class="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-warm-light pb-4"
		>
			<a href="/news" class="text-primary hover:underline">← Back to News</a>
			<div class="flex items-center gap-4 text-sm text-text-muted">
				<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
				<span>·</span>
				<a
					href={data.meta.authorUrl}
					class="text-primary hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					{data.meta.author}
				</a>
			</div>
		</div>

		<article class="prose">
			{@render data.content()}
		</article>
	</div>
</main>

<style>
	.prose :global(h2) {
		font-family: var(--font-family-title);
		font-size: 1.75rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--color-warm-dark);
	}

	.prose :global(h3) {
		font-family: var(--font-family-title);
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-warm-dark);
	}

	.prose :global(p) {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.prose :global(li) {
		margin-bottom: 0.5rem;
	}

	.prose :global(a) {
		color: var(--color-primary);
		text-decoration: none;
	}

	.prose :global(a:hover) {
		text-decoration: underline;
	}

	.prose :global(code) {
		background-color: var(--color-warm-light);
		padding: 0.125rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	.prose :global(pre) {
		background-color: var(--color-warm-light);
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	.prose :global(pre code) {
		background: none;
		padding: 0;
	}

	.prose :global(strong) {
		font-weight: 600;
		color: var(--color-warm-dark);
	}

	.prose :global(blockquote) {
		border-left: 4px solid var(--color-primary);
		padding-left: 1rem;
		margin-left: 0;
		color: var(--color-text-muted);
		font-style: italic;
	}
</style>
