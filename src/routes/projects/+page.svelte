<script lang="ts">
	import { Header } from '$lib';

	interface Project {
		name: string;
		desc: string;
		href: string;
		tags: string[];
		featured?: boolean;
	}

	const projects: Project[] = [
		{
			name: 'candy',
			desc: 'Minimalist ML framework for Go.',
			href: 'https://github.com/gocnn/candy',
			tags: ['ML', 'Tensor', 'Neural Networks'],
			featured: true
		},
		{
			name: 'gym',
			desc: 'Go implementation of OpenAI Gym for reinforcement learning.',
			href: 'https://github.com/gocnn/gym',
			tags: ['RL', 'Environments', 'Training']
		},
		{
			name: 'half',
			desc: 'Half-precision floating point types float16 and bfloat16 for Go.',
			href: 'https://github.com/gocnn/half',
			tags: ['float16', 'Precision', 'Memory']
		},
		{
			name: 'gocu',
			desc: 'Go bindings for the CUDA Driver and Runtime APIs, cuBLAS, and cuDNN.',
			href: 'https://github.com/gocnn/gocu',
			tags: ['CUDA', 'NVIDIA', 'GPU']
		},
		{
			name: 'gomtl',
			desc: 'Go bindings for Apple Metal.',
			href: 'https://github.com/gocnn/gomtl',
			tags: ['Metal', 'Apple', 'GPU']
		},
		{
			name: 'gomat',
			desc: 'High-performance Go BLAS/LAPACK.',
			href: 'https://github.com/gocnn/gomat',
			tags: ['BLAS', 'CPU', 'Linear Algebra']
		}
	];
</script>

<svelte:head>
	<title>Projects | GoCNN</title>
	<meta
		name="description"
		content="Explore the GoCNN ecosystem — ML frameworks, GPU backends, and tools for building AI in Go."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">Projects</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">Building the AI ecosystem for Go</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.name)}
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				class="group relative flex flex-col rounded-2xl border border-warm-light bg-warm-white p-6 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg {project.featured
					? 'ring-2 ring-primary/20'
					: ''}"
			>
				{#if project.featured}
					<span
						class="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white"
					>
						Featured
					</span>
				{/if}

				<div class="mb-3 flex items-center gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-warm-light transition-colors group-hover:bg-primary/10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-primary"
						>
							<path
								d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
							/>
							<path d="M9 18c-4.51 2-5-2-7-2" />
						</svg>
					</div>
					<h2 class="text-xl font-bold text-warm-dark transition-colors group-hover:text-primary">
						{project.name}
					</h2>
				</div>

				<p class="mb-4 flex-1 text-text-muted">{project.desc}</p>

				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag (tag)}
						<span class="rounded-full bg-warm-light px-3 py-1 text-xs font-medium text-text-muted">
							{tag}
						</span>
					{/each}
				</div>

				<div
					class="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
				>
					View on GitHub
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</div>
			</a>
		{/each}
	</div>

	<section class="mt-16 text-center">
		<p class="text-lg text-text-muted">
			Want to contribute? Check out our
			<a
				href="https://github.com/gocnn"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary hover:underline"
			>
				GitHub organization
			</a>
			for open issues and discussions.
		</p>
	</section>
</main>
