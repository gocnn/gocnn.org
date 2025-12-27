<script lang="ts">
	import { Header } from '$lib';

	const socials = [
		{
			name: 'GitHub',
			desc: 'GoCNN discussions on GitHub',
			href: 'https://github.com/orgs/gocnn/discussions',
			icon: '/images/community/github.svg'
		}
	];

	const codeOfConductUrl = 'https://github.com/gocnn/.github/blob/main/CODE_OF_CONDUCT.md';
</script>

<svelte:head>
	<title>Community | GoCNN</title>
	<meta name="description" content="Welcome, friend! Come check where all the GoCNN community members hang out and join us." />
</svelte:head>

<Header>
	<h1 class="text-4xl md:text-5xl font-title font-bold">The GoCNN Community</h1>
	<p class="text-xl md:text-2xl mt-4 opacity-80">Welcome, friend! It's good to have you</p>
</Header>

<main class="max-w-(--width-content) mx-auto px-5 py-16">
	<article class="prose max-w-3xl mx-auto">
		<p class="text-lg leading-relaxed">
			You can talk to and get help from other GoCNN community members in the following forums:
		</p>

		<ul class="list-none p-0 my-10 flex flex-wrap justify-center gap-8">
			{#each socials as social}
				<li class="group">
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-col items-center gap-4 px-10 py-8 rounded-2xl bg-linear-to-br from-warm-light to-warm-cream no-underline text-warm-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-cream/50"
					>
						<img src={social.icon} alt="{social.name} icon" class="size-14 group-hover:scale-110 transition-transform duration-300" />
						<div class="text-center">
							<span class="block text-xl font-semibold mb-1">{social.name}</span>
							<span class="text-sm opacity-70">{social.desc}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>

		<p class="text-lg leading-relaxed">
			You can also follow the core developer ΣX on X to get the latest updates
			<a href="https://x.com/gitctrlx" class="text-primary hover:underline">@gitctrlx</a>.
		</p>

		<h2 class="text-2xl font-title font-bold mt-12 mb-4">Code of Conduct</h2>

		<p class="text-lg leading-relaxed">
			The GoCNN community is a space where we treat each other kindly and with respect. 
			Please read and adhere to our community
			<a href={codeOfConductUrl} class="text-primary hover:underline">code of conduct</a>.
		</p>
	</article>
</main>
