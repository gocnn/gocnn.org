<script lang="ts">
	import { Header } from '$lib';

	const benefits = [
		{
			icon: 'rocket',
			title: 'Accelerate Development',
			desc: 'Help us dedicate more time to building and improving GoCNN projects.'
		},
		{
			icon: 'heart',
			title: 'Support Open Source',
			desc: 'Keep the AI ecosystem for Go free and accessible to everyone.'
		},
		{
			icon: 'star',
			title: 'Shape the Future',
			desc: 'Sponsors get priority input on roadmap and feature decisions.'
		},
		{
			icon: 'users',
			title: 'Grow the Community',
			desc: 'Enable better documentation, tutorials, and community resources.'
		}
	];
</script>

<svelte:head>
	<title>Sponsor | GoCNN</title>
	<meta
		name="description"
		content="Support the development of GoCNN — help us build the AI ecosystem for Go."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">Support GoCNN</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">Help us build the AI ecosystem for Go</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<!-- Hero Section -->
	<section class="mb-16 text-center">
		<p class="mx-auto max-w-2xl text-lg leading-relaxed text-text-muted">
			GoCNN is an open-source effort to bring modern machine learning capabilities to Go. Your
			sponsorship directly supports the development of Candy, GPU backends, and the entire
			ecosystem.
		</p>
	</section>

	<!-- Benefits Grid -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-2xl font-bold text-warm-dark">Why Sponsor?</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each benefits as benefit (benefit.title)}
				<div
					class="rounded-2xl border border-warm-light bg-warm-white p-6 text-center transition-shadow hover:shadow-md"
				>
					<div
						class="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10"
					>
						{#if benefit.icon === 'rocket'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<path
									d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
								/>
								<path
									d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
								/>
								<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
								<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
							</svg>
						{:else if benefit.icon === 'heart'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<path
									d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
								/>
							</svg>
						{:else if benefit.icon === 'star'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<polygon
									points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
								/>
							</svg>
						{:else if benefit.icon === 'users'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-primary"
							>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						{/if}
					</div>
					<h3 class="mb-2 font-bold text-warm-dark">{benefit.title}</h3>
					<p class="text-sm text-text-muted">{benefit.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Sponsor Cards -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-2xl font-bold text-warm-dark">Become a Sponsor</h2>
		<div class="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
			<!-- Individual Sponsor -->
			<div
				class="flex flex-col rounded-2xl border-2 border-primary/20 bg-warm-white p-8 text-center shadow-sm"
			>
				<img
					src="https://github.com/gitctrlx.png"
					alt="gitctrlx"
					class="mx-auto mb-4 size-20 rounded-full border-4 border-primary/20"
				/>
				<div class="mb-4">
					<span class="text-sm font-medium text-primary">Individual</span>
					<h3 class="mt-1 text-xl font-bold text-warm-dark">Sponsor @gitctrlx</h3>
				</div>
				<p class="mb-6 flex-1 text-text-muted">
					Support the core developer behind GoCNN and help sustain ongoing development.
				</p>
				<a
					href="https://github.com/sponsors/gitctrlx"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white no-underline transition-colors hover:bg-primary-dark"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					Sponsor on GitHub
				</a>
			</div>

			<!-- Organization Sponsor (Coming Soon) -->
			<div
				class="flex flex-col rounded-2xl border border-warm-light bg-warm-light/50 p-8 text-center"
			>
				<img
					src="https://github.com/gocnn.png"
					alt="GoCNN"
					class="mx-auto mb-4 size-20 rounded-full border-4 border-warm-light"
				/>
				<div class="mb-4">
					<span class="text-sm font-medium text-text-muted">Organization</span>
					<h3 class="mt-1 text-xl font-bold text-warm-dark">Sponsor GoCNN</h3>
				</div>
				<p class="mb-6 flex-1 text-text-muted">
					Sponsor the GoCNN organization directly to support the entire ecosystem.
				</p>
				<span
					class="inline-flex items-center justify-center gap-2 rounded-full bg-warm-light px-6 py-3 font-medium text-text-muted"
				>
					Coming Soon
				</span>
			</div>
		</div>
	</section>

	<!-- Thank You -->
	<section class="rounded-2xl bg-warm-light p-8 text-center">
		<h2 class="mb-3 text-2xl font-bold text-warm-dark">Thank You</h2>
		<p class="mx-auto max-w-xl text-text-muted">
			Every contribution, no matter the size, helps us move forward. Thank you for believing in
			open-source AI for Go.
		</p>
	</section>
</main>
