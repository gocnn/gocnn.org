<script lang="ts">
	import { Header } from '$lib';

	const btnClass =
		'inline-block px-8 py-3 bg-primary text-white rounded-full text-2xl no-underline hover:bg-primary-dark transition-colors';
	const codeBlockClass =
		'bg-warm-white border border-warm-light rounded-xl p-5 text-sm md:text-base overflow-x-auto font-mono shadow-sm';
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
	<section class="{sectionClass} py-20">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="text-[22px]">
				<h2 class="mb-8 text-4xl font-bold">Candy</h2>

				<p class="mb-6 text-2xl leading-relaxed">Minimalist machine learning framework for Go.</p>

				<p class="mb-8 text-xl leading-relaxed">Multi-backend tensor acceleration:</p>

				<ul class="mb-10 list-disc space-y-3 pl-10 text-lg">
					<li>CPU via BLAS (gomat with OpenBLAS or Intel MKL)</li>
					<li>GPU NVIDIA via CUDA/cuBLAS/cuDNN (gocu bindings)</li>
					<li>GPU Apple M-series via Metal (gomtl bindings)</li>
				</ul>

				<p class="mb-6 text-lg leading-relaxed">
					Core features include tensor operations, neural network layers, convolutions, flash
					attention, and LLM support.
				</p>

				<p class="text-lg leading-relaxed">
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

	<!-- <section class="bg-warm-light py-8 text-center text-warm-dark">
		<div class="mx-auto max-w-(--width-content) px-5">
			<h2 class="mb-4 text-2xl">Kindly supported by</h2>
			<a
				href="https://github.com/sponsors/lpil"
				class="text-xl text-warm-dark no-underline transition-colors hover:text-primary"
			>
				sponsors like you!
			</a>
		</div>
	</section> -->

	<section
		class="py-16 text-center text-warm-dark"
		style="background: linear-gradient(180deg, var(--color-warm-light) 0%, var(--color-warm-white) 100%);"
	>
		<div class="mx-auto max-w-(--width-content) px-5">
			<h2 class="mb-4 text-4xl">Still here?</h2>
			<p class="mb-2 text-2xl">Why not start now?</p>
			<p class="mb-8 text-xl opacity-80">
				For a guided experience, the
				<a href="https://book.gocnn.org/" class="text-primary no-underline hover:underline"
					>cookbook</a
				> is a great place to start.
			</p>
			<a href="https://book.gocnn.org/" class={btnClass}>Let's go!</a>
		</div>
	</section>
</main>
