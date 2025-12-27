<script lang="ts">
	const currentYear = new Date().getFullYear();

	const links = [
		{ title: 'News', href: '/news' },
		{ title: 'Code', href: 'https://github.com/gocnn' },
		{ title: 'Cookbook', href: 'https://book.gocnn.org' },
		{ title: 'Documentation', href: '/documentation' },
		{ title: 'Sponsor', href: '/sponsor' },
		{ title: 'Roadmap', href: '/roadmap' }
	];

	const linkClass = 'text-warm-dark no-underline hover:text-primary transition-colors';
</script>

<footer class="bg-warm-white text-warm-dark py-10">
	<div class="max-w-(--width-content) mx-auto px-5">
		<div class="flex flex-col md:flex-row justify-between gap-8">
			<a href="/" class="flex items-center gap-2 no-underline text-warm-dark">
				<img alt="GoCNN logo" src="/images/gocnn.svg" class="size-12" />
				<span class="text-4xl font-title">GoCNN</span>
			</a>

			<ul class="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 list-none p-0 m-0">
				{#each links as link}
					<li>
						<a href={link.href} class={linkClass}>{link.title}</a>
					</li>
				{/each}
			</ul>

			<div class="text-sm opacity-70">
				<p>© {currentYear} GoCNN</p>
				<a href="https://github.com/gocnn/.github/blob/main/CODE_OF_CONDUCT.md" class={linkClass}>
					Code of conduct
				</a>
			</div>
		</div>
	</div>
</footer>
