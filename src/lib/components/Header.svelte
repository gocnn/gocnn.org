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

	<div class="relative pb-20 pt-12 md:pb-28 md:pt-16">
		<div class="max-w-(--width-content) mx-auto px-5 py-12 md:py-16">
			{#if showLucy}
				<div class="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-16">
					<div class="hidden lg:block shrink-0">
						<img
							alt="GoCNN logo"
							src="/images/gocnn.svg"
							class="size-64 xl:size-80"
						/>
					</div>
					<div class="text-center lg:text-left">
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
			class="absolute bottom-0 left-0 w-full h-20 md:h-24 object-cover pointer-events-none"
		/>
	</div>
</header>
