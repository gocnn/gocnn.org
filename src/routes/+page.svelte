<script lang="ts">
	import { Header } from '$lib';

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
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">Candy</h2>

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
							class="text-primary hover:underline">gomat</a
						> with OpenBLAS or Intel MKL)
					</li>
					<li>
						GPU NVIDIA via CUDA/cuBLAS/cuDNN (<a
							href="https://github.com/gocnn/gocu"
							class="text-primary hover:underline">gocu</a
						> bindings)
					</li>
					<li>
						GPU Apple M-series via Metal (<a
							href="https://github.com/gocnn/gomtl"
							class="text-primary hover:underline">gomtl</a
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

<span class="text-code-keyword">func</span> <span class="text-code-function">main</span
					>() {'{'}{'\n'}	device := candy.CPU

	a, _ := tensor.<span class="text-code-function">RandN</span>[<span class="text-code-keyword"
						>float32</span
					>](0.0, 1.0, candy.<span class="text-code-function">NewShape</span>(2, 3), device)
	b, _ := tensor.<span class="text-code-function">RandN</span>[<span class="text-code-keyword"
						>float32</span
					>](0.0, 1.0, candy.<span class="text-code-function">NewShape</span>(3, 4), device)

	c, _ := a.<span class="text-code-function">MatMul</span>(b)
	fmt.<span class="text-code-function">Println</span>(c)
{'}'}</code
				></pre>
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
