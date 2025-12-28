<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		repo?: string;
		max?: number;
	}

	interface Contributor {
		login: string;
		avatar_url: string;
		html_url: string;
		contributions: number;
	}

	let { repo = 'gleam-lang/gleam', max = 30 }: Props = $props();

	let contributors: Contributor[] = $state([]);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		try {
			const res = await fetch(
				`https://api.github.com/repos/${repo}/contributors?per_page=${max}`
			);
			if (!res.ok) throw new Error('Failed to fetch contributors');
			contributors = await res.json();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Unknown error';
		} finally {
			loading = false;
		}
	});
</script>

<div class="contributors">
	{#if loading}
		<p class="text-center text-text-muted">Loading contributors...</p>
	{:else if error}
		<p class="text-center text-red-500">{error}</p>
	{:else}
		<div class="flex flex-wrap justify-center gap-3">
			{#each contributors as contributor}
				<a
					href={contributor.html_url}
					target="_blank"
					rel="noopener noreferrer"
					title="{contributor.login} ({contributor.contributions} contributions)"
					class="group"
				>
					<img
						src={contributor.avatar_url}
						alt={contributor.login}
						class="size-12 rounded-full border-2 border-transparent group-hover:border-primary transition-colors"
					/>
				</a>
			{/each}
		</div>
	{/if}
</div>
