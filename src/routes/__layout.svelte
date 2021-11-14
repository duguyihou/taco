<script lang="ts">
	import '../app.postcss'
	const links = [
		{ title: 'Inbox', href: '/' },
		{ title: 'Today', href: '/today' },
		{ title: 'Week', href: '/week' },
		{ title: 'Done', href: '/done' }
	]
</script>

<main class="flex flex-row w-full h-full">
	<aside class="aside">
		<nav class="nav">
			<header class="name">Kong</header>
		</nav>
		<ul class="ul">
			{#each links as { title, href }}
				<a class="link" {href}>{title}</a>
			{/each}
		</ul>
	</aside>
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.nav {
		@apply w-full bg-blue-dark;
	}
	.name {
		@apply text-grey-light text-left text-lg p-2;
	}
	.aside {
		@apply w-1/5 h-screen bg-grey-light shadow-inner flex flex-col justify-start items-center;
	}
	.ul {
		@apply w-full h-full text-left text-black-light flex flex-col justify-start items-start;
	}
	.link {
		@apply w-full p-2 text-sm border-b border-blue-light hover:bg-grey-dark;
	}
</style>
