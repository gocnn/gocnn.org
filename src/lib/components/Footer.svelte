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

<footer class="bg-warm-white py-10 text-warm-dark">
	<div class="mx-auto max-w-(--width-content) px-5">
		<div class="flex flex-col justify-between gap-8 md:flex-row">
			<a href="/" class="flex items-center gap-2 text-warm-dark no-underline">
				<img alt="GoCNN logo" src="/images/gocnn.svg" class="size-12" />
				<span class="font-title text-4xl">GoCNN</span>
			</a>

			<ul class="m-0 grid list-none grid-cols-2 gap-x-10 gap-y-2 p-0 md:grid-cols-3">
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
