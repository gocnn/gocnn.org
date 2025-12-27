<script lang="ts">
	import './layout.css';
	import { Footer } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/gocnn.svg" />
</svelte:head>

<div class="page-wrapper">
	<div class="page-content">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	.page-wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;
	}

	.page-content {
		display: flex;
		flex-direction: column;
	}
</style>
