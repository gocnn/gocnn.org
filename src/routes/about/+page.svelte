<script lang="ts">
	import { Header } from '$lib';

	const principles = [
		{
			title: 'Simplicity First',
			desc: 'Clean APIs that feel natural to Go developers. No magic, no hidden complexity.'
		},
		{
			title: 'Performance Matters',
			desc: 'Native GPU acceleration with CUDA, Metal, and optimized CPU backends.'
		},
		{
			title: 'Open Source',
			desc: 'Built in the open, for the community. BSD-3-Clause licensed and welcoming contributions.'
		},
		{
			title: 'Production Ready',
			desc: "Designed for real-world deployment with Go's reliability and efficiency."
		}
	];

	const milestones = [
		{ year: '2025-09', event: 'GoCNN organization founded' },
		{ year: '2025-09', event: 'Candy ML framework development begins' },
		{ year: '2025-10', event: 'GPU backends (CUDA, Metal) released' },
		{ year: '2026-01', event: 'Community growth and ecosystem expansion' }
	];
</script>

<svelte:head>
	<title>About | GoCNN</title>
	<meta
		name="description"
		content="Learn about GoCNN — an open-source organization building the AI ecosystem for Go."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">About GoCNN</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">Building the AI ecosystem for Go</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<!-- Mission Section -->
	<section class="mb-16">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-2xl font-bold text-warm-dark">Our Mission</h2>
			<p class="text-lg leading-relaxed text-text-muted">
				GoCNN is an open-source organization dedicated to bringing modern machine learning
				capabilities to the Go programming language. We believe Go's simplicity, performance, and
				excellent concurrency model make it an ideal choice for building production AI systems.
			</p>
		</div>
	</section>

	<!-- Principles Grid -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-2xl font-bold text-warm-dark">Our Principles</h2>
		<div class="grid gap-6 md:grid-cols-2">
			{#each principles as principle (principle.title)}
				<div
					class="rounded-2xl border border-warm-light bg-warm-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 class="mb-2 text-lg font-bold text-warm-dark">{principle.title}</h3>
					<p class="text-text-muted">{principle.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- What We Build -->
	<section class="mb-16 rounded-2xl bg-warm-light p-8">
		<h2 class="mb-6 text-center text-2xl font-bold text-warm-dark">What We Build</h2>
		<div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-primary"
					>
						<path d="M12 2v4" />
						<path d="m6.8 14-3.5 2" />
						<path d="m20.7 16-3.5-2" />
						<path d="M6.8 10 3.3 8" />
						<path d="m20.7 8-3.5 2" />
						<path d="m9 22 3-8 3 8" />
						<path d="M8 22h8" />
						<path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.4" />
						<path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4" />
					</svg>
				</div>
				<h3 class="mb-2 font-bold text-warm-dark">ML Frameworks</h3>
				<p class="text-sm text-text-muted">
					Candy — minimalist tensor operations and neural networks for Go
				</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-primary"
					>
						<rect width="16" height="16" x="4" y="4" rx="2" />
						<rect width="6" height="6" x="9" y="9" rx="1" />
						<path d="M15 2v2" />
						<path d="M15 20v2" />
						<path d="M2 15h2" />
						<path d="M2 9h2" />
						<path d="M20 15h2" />
						<path d="M20 9h2" />
						<path d="M9 2v2" />
						<path d="M9 20v2" />
					</svg>
				</div>
				<h3 class="mb-2 font-bold text-warm-dark">GPU Backends</h3>
				<p class="text-sm text-text-muted">
					CUDA, Metal, and BLAS bindings for hardware acceleration
				</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-primary"
					>
						<path
							d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
						/>
						<circle cx="12" cy="12" r="4" />
					</svg>
				</div>
				<h3 class="mb-2 font-bold text-warm-dark">Inference Engines</h3>
				<p class="text-sm text-text-muted">ONNX Runtime and TensorRT bindings for deployment</p>
			</div>
		</div>
	</section>

	<!-- Timeline -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-2xl font-bold text-warm-dark">Our Journey</h2>
		<div class="mx-auto max-w-2xl">
			<div class="relative border-l-2 border-primary/30 pl-8">
				{#each milestones as milestone (milestone.event)}
					<div class="relative mb-8 last:mb-0">
						<div
							class="absolute -left-10 flex size-4 items-center justify-center rounded-full bg-primary"
						></div>
						<span class="text-sm font-medium text-primary">{milestone.year}</span>
						<p class="mt-1 text-text-muted">{milestone.event}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Maintainer -->
	<section class="mb-16 text-center">
		<h2 class="mb-8 text-2xl font-bold text-warm-dark">Core Maintainer</h2>
		<div class="mx-auto max-w-sm">
			<a
				href="https://github.com/gitctrlx"
				target="_blank"
				rel="noopener noreferrer"
				class="group block rounded-2xl border border-warm-light bg-warm-white p-6 no-underline transition-shadow hover:shadow-md"
			>
				<img
					src="https://github.com/gitctrlx.png"
					alt="gitctrlx"
					class="mx-auto mb-4 size-24 rounded-full border-4 border-primary/20 transition-transform group-hover:scale-105"
				/>
				<h3 class="text-lg font-bold text-warm-dark">@gitctrlx</h3>
				<p class="mt-1 text-sm text-text-muted">Creator & Lead Developer</p>
			</a>
		</div>
	</section>

	<!-- CTA -->
	<section class="rounded-2xl bg-warm-light p-8 text-center">
		<h2 class="mb-3 text-2xl font-bold text-warm-dark">Join Us</h2>
		<p class="mb-6 text-text-muted">
			We're building something exciting. Check out our projects and get involved.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="https://github.com/gocnn"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white no-underline transition-colors hover:bg-primary-dark"
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
				View on GitHub
			</a>
			<a
				href="/community"
				class="inline-block rounded-full border-2 border-primary px-6 py-3 font-medium text-primary no-underline transition-colors hover:bg-primary hover:text-white"
			>
				Join Community
			</a>
		</div>
	</section>
</main>
