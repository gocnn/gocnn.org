<script lang="ts">
	import type { Snippet } from 'svelte';
	import NavBar from './NavBar.svelte';

	interface Props {
		showLucy?: boolean;
		children: Snippet;
	}

	let { showLucy = false, children }: Props = $props();
</script>

<header class="bg-warm-cream text-warm-dark">
	<NavBar />

	<div class="relative pb-28 pt-16">
		<div class="max-w-(--width-content) mx-auto px-5 py-16">
			{#if showLucy}
				<div class="flex items-center justify-center gap-12">
					<div class="hidden lg:flex flex-1 justify-center">
						<img
							alt="GoCNN logo"
							src="/images/gocnn.svg"
							class="size-80"
						/>
					</div>
					<div class="flex-1 text-left">
						{@render children()}
					</div>
				</div>
			{:else}
				<div class="text-center">
					{@render children()}
				</div>
			{/if}
		</div>

		<img
			alt=""
			src="/images/waves.svg"
			class="absolute bottom-0 left-0 w-full h-24 object-cover pointer-events-none"
		/>
	</div>
</header>
