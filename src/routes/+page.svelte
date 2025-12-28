<script lang="ts">
	import { Header, Contributors } from '$lib';

	const btnClass =
		'inline-block px-6 py-3 md:px-8 bg-primary text-white rounded-full text-xl md:text-2xl font-medium no-underline hover:bg-primary-dark hover:shadow-lg transition-all duration-200';
	const codeBlockClass =
		'bg-warm-white border border-warm-light rounded-2xl p-4 md:p-6 text-xs md:text-sm overflow-x-auto font-mono shadow-md';
	const sectionClass = 'max-w-(--width-content) mx-auto px-5 py-12';
</script>

<svelte:head>
	<title>GoCNN</title>
	<meta
		name="description"
		content="GoCNN is an open-source organization building the AI ecosystem for Go — ML frameworks, inference engines, and GPU backends."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="GoCNN — AI Ecosystem for Go" />
	<meta property="og:image" content="https://GoCNN.run/images/preview/site.png" />
</svelte:head>

<Header showLucy>
	<p class="font-title text-2xl leading-tight md:text-4xl lg:text-5xl">
		<b>GoCNN</b> — <b>AI</b> ecosystem for <b>Go</b>.
	</p>
	<a href="https://book.gocnn.org/" class="{btnClass} mt-8">Get Started</a>
</Header>

<main>
	<section class="{sectionClass} py-16 md:py-20">
		<div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
			<div>
				<div class="mb-6 flex items-center gap-3">
					<h2 class="text-3xl font-bold text-primary md:text-4xl">Candy</h2>
					<a
						href="https://github.com/gocnn/candy"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center rounded-full bg-warm-light p-2 text-text-muted transition-all duration-200 hover:bg-primary hover:text-white"
						aria-label="Candy GitHub Repository"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
					</a>
				</div>

				<p class="mb-4 text-xl leading-relaxed md:text-2xl">
					Minimalist machine learning framework for Go.
				</p>

				<p class="mb-6 text-lg leading-relaxed text-text-muted md:text-xl">
					Multi-backend tensor acceleration:
				</p>

				<ul class="mb-8 list-disc space-y-2 pl-6 text-base md:text-lg">
					<li>
						CPU via BLAS (<a
							href="https://github.com/gocnn/gomat"
							class="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">gomat</a
						> with OpenBLAS or Intel MKL)
					</li>
					<li>
						GPU NVIDIA via CUDA/cuBLAS/cuDNN (<a
							href="https://github.com/gocnn/gocu"
							class="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">gocu</a
						> bindings)
					</li>
					<li>
						GPU Apple M-series via Metal (<a
							href="https://github.com/gocnn/gomtl"
							class="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer">gomtl</a
						> bindings)
					</li>
				</ul>

				<p class="mb-4 text-base leading-relaxed text-text-muted md:text-lg">
					Core features include tensor operations, neural network layers, convolutions, flash
					attention, and LLM support.
				</p>

				<p class="text-base leading-relaxed text-text-muted md:text-lg">
					Leverages Go's native concurrency, concise syntax, and runtime efficiency for
					high-performance training and inference.
				</p>
			</div>
			<pre class={codeBlockClass}><code class="text-code-text"
					><span class="text-code-keyword">package</span> main

<span class="text-code-keyword">import</span> (
	<span class="text-code-string">"fmt"</span>

	<span class="text-code-string">"github.com/gocnn/candy"</span>
	<span class="text-code-string">"github.com/gocnn/candy/tensor"</span>
)

<span class="text-code-keyword">func</span> <span class="text-code-function">main</span>() &#123;
	device := candy.CPU

	a, _ := tensor.<span class="text-code-function">RandN</span>[<span class="text-code-keyword"
						>float32</span
					>](0.0, 1.0, candy.<span class="text-code-function">NewShape</span>(2, 3), device)
	b, _ := tensor.<span class="text-code-function">RandN</span>[<span class="text-code-keyword"
						>float32</span
					>](0.0, 1.0, candy.<span class="text-code-function">NewShape</span>(3, 4), device)

	c, _ := a.<span class="text-code-function">MatMul</span>(b)
	fmt.<span class="text-code-function">Println</span>(c)
&#125;</code
				></pre>
		</div>
	</section>

	<section class="bg-warm-light py-12 text-center text-warm-dark">
		<div class="mx-auto max-w-(--width-content) px-5">
			<h2 class="font-title mb-6 text-2xl">Made possible by contributors</h2>
			<Contributors repo="gocnn/candy" max={50} />
			<a
				href="https://github.com/gocnn/candy/graphs/contributors"
				class="mt-6 inline-block text-lg text-warm-dark no-underline transition-colors hover:text-primary"
			>
				View all contributors →
			</a>
		</div>
	</section>

	<section
		class="bg-linear-to-b from-warm-light to-warm-white py-12 text-center text-warm-dark md:py-16"
	>
		<div class="mx-auto max-w-(--width-content) px-5">
			<h2 class="mb-3 text-3xl md:text-4xl">Ready to build?</h2>
			<p class="mb-6 text-lg text-text-muted md:text-xl">
				Explore the <a href="https://book.gocnn.org/" class="text-primary hover:underline"
					>cookbook</a
				> for tutorials and examples.
			</p>
			<a href="https://book.gocnn.org/" class={btnClass}>Let's go!</a>
		</div>
	</section>
</main>
