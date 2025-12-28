<script lang="ts">
	interface NavLink {
		title: string;
		href: string;
		external?: boolean;
	}

	const leftLinks: NavLink[] = [
		{ title: 'News', href: '/news' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Community', href: '/community' },
		{ title: 'Sponsor', href: '/sponsor' },
		{ title: 'About', href: '/about' }
	];

	const rightLinks: NavLink[] = [
		{ title: 'Book', href: 'https://book.gocnn.org', external: true },
		{ title: 'Docs', href: '/documentation' },
		{ title: 'Code', href: 'https://github.com/gocnn', external: true }
	];

	const linkClass = 'no-underline text-warm-dark hover:text-primary transition-colors';
</script>

<nav class="font-title text-xl text-warm-dark">
	<div
		class="mx-auto flex max-w-(--width-content) flex-wrap items-center justify-between gap-4 px-5 py-5"
	>
		<a href="/" class="flex items-center gap-2 text-warm-dark no-underline">
			<img alt="GoCNN logo" src="/images/gocnn.svg" class="size-10" />
			<span class="text-[28px]">GoCNN</span>
		</a>

		<div class="flex gap-6">
			{#each leftLinks as link (link.href)}
				<a href={link.href} class={linkClass}>{link.title}</a>
			{/each}
		</div>

		<div class="flex gap-6">
			{#each rightLinks as link (link.href)}
				<a
					href={link.href}
					class={linkClass}
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noopener noreferrer' : undefined}>{link.title}</a
				>
			{/each}
		</div>
	</div>
</nav>
