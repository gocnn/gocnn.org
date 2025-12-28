<script lang="ts">
	import { page } from '$app/state';
	import { NavBar } from '$lib';
</script>

<svelte:head>
	<title>{page.status} | GoCNN</title>
</svelte:head>

<div class="error-page">
	<NavBar />

	<div class="error-content">
		<span class="error-code">{page.status}</span>
		<h1 class="error-title">
			{#if page.status === 404}
				Page Not Found
			{:else}
				Something Went Wrong
			{/if}
		</h1>
		<p class="error-message">
			{#if page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{page.error?.message || 'An unexpected error occurred.'}
			{/if}
		</p>
		<a href="/" class="error-link">Back to Home</a>
	</div>
</div>

<style>
	.error-page {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 100vh;
		background-color: var(--color-warm-white);
	}

	.error-content {
		display: grid;
		place-items: center;
		place-content: center;
		gap: 0;
		padding: 2rem;
		text-align: center;
	}

	.error-code {
		font-family: var(--font-family-title);
		font-size: clamp(6rem, 20vw, 10rem);
		font-weight: 700;
		line-height: 1;
		color: var(--color-primary);
		opacity: 0.15;
	}

	.error-title {
		margin-top: 0;
		font-family: var(--font-family-title);
		font-size: clamp(1.5rem, 5vw, 2rem);
		font-weight: 700;
		color: var(--color-warm-dark);
	}

	.error-message {
		margin-top: 1rem;
		max-width: 480px;
		font-size: 1.125rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.error-link {
		margin-top: 2rem;
		padding: 0.875rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		color: #fff;
		background-color: var(--color-primary);
		border-radius: 9999px;
		text-decoration: none;
		transition:
			background-color 0.2s,
			transform 0.2s;
	}

	.error-link:hover {
		background-color: var(--color-primary-dark);
		transform: translateY(-1px);
	}

	.error-link:active {
		transform: translateY(0);
	}
</style>
