<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faInbox,
		faCalendarDay,
		faCalendarWeek,
		faCheckSquare
	} from '@fortawesome/free-solid-svg-icons'
	import '../app.postcss'
	const links = [
		{ title: 'Inbox', href: '/', icon: faInbox },
		{ title: 'Today', href: '/today', icon: faCalendarDay },
		{ title: 'Week', href: '/week', icon: faCalendarWeek },
		{ title: 'Done', href: '/done', icon: faCheckSquare }
	]
</script>

<main class="flex flex-row w-full h-full">
	<aside class="aside">
		<nav class="nav">
			<header class="name">Kong</header>
		</nav>
		<ul class="ul">
			{#each links as { title, href, icon }}
				<li class="li">
					<Fa {icon} size="sm" />
					<a class="link" {href}>{title}</a>
				</li>
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
	.li {
		@apply w-full pl-4 text-blue-dark flex flex-row justify-start items-center hover:bg-grey-dark;
	}
	.link {
		@apply flex-1 p-2 text-sm;
	}
</style>
