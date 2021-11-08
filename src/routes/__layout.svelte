<script lang="ts">
	import '../app.postcss'
	const links = [
		{ title: 'Inbox', href: '/' },
		{ title: 'Today', href: '/today' },
		{ title: 'Week', href: '/week' },
		{ title: 'Done', href: '/done' }
	]
</script>

<main class="flex-1 flex flex-row w-full h-full box-border bg-blue-light">
	<section class="section">
		<nav class="nav">
			<div class="name">Kong</div>
		</nav>
		<ul class="ul">
			{#each links as { title, href }}
				<a class="link" {href}>{title}</a>
			{/each}
		</ul>
	</section>
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.nav {
		@apply w-full bg-blue-light;
	}
	.name {
		@apply text-black-light text-left text-lg px-2 py-0.5;
	}
	.section {
		@apply w-60 h-screen bg-grey-light shadow-inner flex flex-col justify-start items-center;
	}
	.ul {
		@apply w-full h-full text-left text-black-light flex flex-col justify-start items-start;
	}
	.link {
		@apply w-full p-2 text-sm border-b border-blue-light hover:bg-grey-dark;
	}
</style>
