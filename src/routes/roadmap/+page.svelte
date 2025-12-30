<script lang="ts">
	import { Header } from '$lib';

	type Status = 'planned' | 'in-progress' | 'completed';

	interface RoadmapItem {
		title: string;
		description: string;
		status: Status;
		features: string[];
		repo?: string;
	}

	interface Milestone {
		phase: string;
		title: string;
		items: RoadmapItem[];
	}

	const milestones: Milestone[] = [
		{
			phase: 'Phase 1',
			title: 'Precision & Performance',
			items: [
				{
					title: 'Float16 & BFloat16 Support',
					description:
						'Extend Candy with half-precision and brain floating-point support for memory-efficient training and inference.',
					status: 'in-progress',
					features: [
						'float16 (IEEE 754 half-precision)',
						'bfloat16 (Brain floating-point)',
						'Mixed-precision training utilities',
						'Automatic type casting'
					],
					repo: 'gocnn/candy'
				}
			]
		},
		{
			phase: 'Phase 2',
			title: 'Inference & Interoperability',
			items: [
				{
					title: 'GoONX',
					description:
						'ONNX ecosystem bindings for Go — load, run, and optimize ONNX models natively.',
					status: 'planned',
					features: [
						'ONNX model parser and loader',
						'ONNX Runtime Go bindings',
						'Model optimization tools',
						'Cross-platform inference'
					],
					repo: 'gocnn/goonx'
				},
				{
					title: 'TensorRT Bindings',
					description:
						'NVIDIA TensorRT ecosystem bindings for high-performance inference on NVIDIA GPUs.',
					status: 'planned',
					features: [
						'TensorRT core bindings',
						'TensorRT-LLM for large language models',
						'TensorRT-RTX for consumer GPUs',
						'INT8/FP16 quantization support'
					],
					repo: 'gocnn/tensorrt'
				}
			]
		},
		{
			phase: 'Phase 3',
			title: 'Advanced AI',
			items: [
				{
					title: 'Sugar',
					description:
						'Reinforcement learning framework for Go — environments, algorithms, and training utilities.',
					status: 'planned',
					features: [
						'Gym-compatible environments',
						'DQN, PPO, A2C algorithms',
						'Multi-agent support',
						'Distributed training'
					],
					repo: 'gocnn/sugar'
				}
			]
		}
	];

	const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
		completed: { label: 'Completed', color: 'text-green-600', bg: 'bg-green-100' },
		'in-progress': { label: 'In Progress', color: 'text-primary', bg: 'bg-primary/10' },
		planned: { label: 'Planned', color: 'text-text-muted', bg: 'bg-warm-light' }
	};
</script>

<svelte:head>
	<title>Roadmap | GoCNN</title>
	<meta
		name="description"
		content="Explore the GoCNN development roadmap — upcoming features, new projects, and future plans."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">Roadmap</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">Where we're headed</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<div class="relative">
		<!-- Timeline line -->
		<div
			class="absolute top-0 left-4 hidden h-full w-0.5 bg-linear-to-b from-primary via-primary/50 to-warm-light md:left-1/2 md:block md:-translate-x-1/2"
		></div>

		{#each milestones as milestone, i (milestone.phase)}
			<!-- Phase header -->
			<div class="relative mb-8 md:text-center">
				<span
					class="relative z-10 inline-block rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg md:mx-auto"
				>
					{milestone.phase}: {milestone.title}
				</span>
			</div>

			<!-- Items -->
			{#each milestone.items as item, j (item.title)}
				<div
					class="relative mb-12 md:mb-16 md:flex {(i + j) % 2 === 0
						? 'md:flex-row'
						: 'md:flex-row-reverse'}"
				>
					<!-- Timeline dot -->
					<div
						class="absolute top-6 left-4 hidden size-4 rounded-full border-4 border-white bg-primary shadow md:left-1/2 md:block md:-translate-x-1/2"
					></div>

					<!-- Content card -->
					<div class="ml-12 md:ml-0 md:w-1/2 {(i + j) % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}">
						<div
							class="rounded-2xl border border-warm-light bg-warm-white p-6 shadow-sm transition-shadow hover:shadow-md"
						>
							<div class="mb-3 flex flex-wrap items-center gap-3">
								<h3 class="text-xl font-bold text-warm-dark">{item.title}</h3>
								<span
									class="rounded-full px-3 py-1 text-xs font-medium {statusConfig[item.status]
										.bg} {statusConfig[item.status].color}"
								>
									{statusConfig[item.status].label}
								</span>
							</div>

							<p class="mb-4 text-text-muted">{item.description}</p>

							<ul class="mb-4 space-y-2">
								{#each item.features as feature (feature)}
									<li class="flex items-start gap-2 text-sm text-text-muted">
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
											class="mt-0.5 shrink-0 text-primary"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
										{feature}
									</li>
								{/each}
							</ul>

							{#if item.repo}
								<a
									href="https://github.com/{item.repo}"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
									{item.repo}
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		{/each}
	</div>

	<!-- Call to action -->
	<section class="mt-8 rounded-2xl bg-warm-light p-8 text-center">
		<h2 class="mb-3 text-2xl font-bold text-warm-dark">Want to contribute?</h2>
		<p class="mb-6 text-text-muted">
			We welcome contributions! Check out our GitHub for open issues and discussions.
		</p>
		<a
			href="https://github.com/orgs/gocnn/discussions"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block rounded-full bg-primary px-6 py-3 font-medium text-white no-underline transition-colors hover:bg-primary-dark"
		>
			Join the Discussion
		</a>
	</section>
</main>
