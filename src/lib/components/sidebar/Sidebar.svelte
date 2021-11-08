<script lang="ts">
	import SidebarHeader from './SidebarHeader.svelte'

	const links = [
		{ title: 'Inbox', href: '/' },
		{ title: 'Today', href: '/today' },
		{ title: 'Week', href: '/week' },
		{ title: 'Done', href: '/done' }
	]
</script>

<section>
	<SidebarHeader />
	<ul>
		{#each links as { title, href }}
			<a {href}>{title}</a>
		{/each}
	</ul>
</section>

<style lang="postcss">
	section {
		@apply w-60 h-screen bg-grey-light shadow-2xl flex flex-col justify-start items-center;
	}
	ul {
		@apply w-full h-full text-left text-black-light flex flex-col justify-start items-start;
	}
	a {
		@apply w-full p-2 text-sm border-b border-blue-light hover:bg-grey-dark;
	}
</style>
