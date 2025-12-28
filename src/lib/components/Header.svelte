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

	<div class="relative pt-12 pb-20 md:pt-16 md:pb-28">
		<div class="mx-auto max-w-(--width-content) px-5 py-12 md:py-16">
			{#if showLucy}
				<div class="flex flex-col items-center justify-start gap-8 lg:flex-row lg:gap-16">
					<div class="hidden shrink-0 lg:block">
						<img alt="GoCNN logo" src="/images/gocnn.svg" class="size-64 xl:size-80" />
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
			class="pointer-events-none absolute bottom-0 left-0 h-20 w-full object-cover md:h-24"
		/>
	</div>
</header>
