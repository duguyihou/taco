<script lang="ts">
	import { List } from '$lib/typings'
	import SidebarHeader from './SidebarHeader.svelte'
	import { handleList } from '$lib/store'

	const lists = [
		{ title: 'Inbox', list: List.Inbox },
		{ title: 'Starred', list: List.Starred },
		{ title: 'All', list: List.All }
	]
</script>

<section class="sidebar">
	<SidebarHeader />
	<ul>
		{#each lists as { title, list }}
			<li on:click={() => handleList(list)}>{title}</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.sidebar {
		@apply w-60 h-screen bg-grey shadow-2xl flex flex-col justify-start items-center;
	}
	ul {
		@apply w-full h-full text-left text-black-light;
	}

	li {
		@apply p-2 cursor-pointer;
	}
</style>
