<script lang="ts">
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

	let { repo = 'gocnn/candy', max = 30 }: Props = $props();

	let contributors: Contributor[] = $state([]);
	let loading = $state(true);
	let error = $state<string | null>(null);

	$effect(() => {
		const controller = new AbortController();

		fetch(`https://api.github.com/repos/${repo}/contributors?per_page=${max}`, {
			signal: controller.signal
		})
			.then((res) => {
				if (!res.ok) throw new Error('Failed to fetch contributors');
				return res.json();
			})
			.then((data) => {
				contributors = data;
			})
			.catch((e) => {
				if (e.name !== 'AbortError') {
					error = e instanceof Error ? e.message : 'Unknown error';
				}
			})
			.finally(() => {
				loading = false;
			});

		return () => controller.abort();
	});
</script>

<div class="contributors">
	{#if loading}
		<p class="text-center text-text-muted">Loading contributors...</p>
	{:else if error}
		<p class="text-center text-red-500">{error}</p>
	{:else}
		<div class="flex flex-wrap justify-center gap-3">
			{#each contributors as contributor (contributor.login)}
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
						class="size-12 rounded-full border-2 border-transparent transition-colors group-hover:border-primary"
					/>
				</a>
			{/each}
		</div>
	{/if}
</div>
