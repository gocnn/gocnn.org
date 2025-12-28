<script lang="ts">
	import { Header } from '$lib';

	const socials = [
		{
			name: 'GitHub',
			desc: 'GoCNN discussions on GitHub',
			href: 'https://github.com/orgs/gocnn/discussions',
			icon: '/images/community/github.svg'
		},
		{
			name: 'Discord',
			desc: 'Join the GoCNN Discord server',
			href: 'https://discord.gg/GGzEjFGdpx',
			icon: '/images/community/discord.svg'
		}
	];

	const codeOfConductUrl = 'https://github.com/gocnn/.github/blob/main/CODE_OF_CONDUCT.md';
</script>

<svelte:head>
	<title>Community | GoCNN</title>
	<meta
		name="description"
		content="Welcome, friend! Come check where all the GoCNN community members hang out and join us."
	/>
</svelte:head>

<Header>
	<h1 class="font-title text-4xl font-bold md:text-5xl">The GoCNN Community</h1>
	<p class="mt-4 text-xl opacity-80 md:text-2xl">Welcome, friend! It's good to have you</p>
</Header>

<main class="mx-auto max-w-(--width-content) px-5 py-16">
	<article class="mx-auto max-w-3xl">
		<p class="text-lg leading-relaxed">
			You can talk to and get help from other GoCNN community members in the following forums:
		</p>

		<ul class="my-10 flex list-none flex-wrap justify-center gap-8 p-0">
			{#each socials as social (social.name)}
				<li class="group">
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-col items-center gap-4 rounded-2xl border border-warm-cream/50 bg-linear-to-br from-warm-light to-warm-cream px-10 py-8 text-warm-dark no-underline shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<img
							src={social.icon}
							alt="{social.name} icon"
							class="size-14 transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="text-center">
							<span class="mb-1 block text-xl font-semibold">{social.name}</span>
							<span class="text-sm opacity-70">{social.desc}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>

		<p class="text-lg leading-relaxed">
			You can also follow the core developer ΣX on X to get the latest updates
			<a
				href="https://x.com/gitctrlx"
				class="text-primary hover:underline"
				target="_blank"
				rel="noopener noreferrer">@gitctrlx</a
			>.
		</p>

		<h2 class="font-title mt-12 mb-4 text-2xl font-bold">Code of Conduct</h2>

		<p class="text-lg leading-relaxed">
			The GoCNN community is a space where we treat each other kindly and with respect. Please read
			and adhere to our community
			<a
				href={codeOfConductUrl}
				class="text-primary hover:underline"
				target="_blank"
				rel="noopener noreferrer">code of conduct</a
			>.
		</p>
	</article>
</main>
