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
		{ title: 'Docs', href: '/documentation' }
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

		<div class="flex items-center gap-6">
			{#each rightLinks as link (link.href)}
				<a
					href={link.href}
					class={linkClass}
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noopener noreferrer' : undefined}>{link.title}</a
				>
			{/each}

			<a
				href="https://github.com/gocnn"
				target="_blank"
				rel="noopener noreferrer"
				class="text-warm-dark transition-colors hover:text-primary"
				aria-label="GoCNN on GitHub"
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
	</div>
</nav>
