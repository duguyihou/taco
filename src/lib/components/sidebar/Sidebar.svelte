<script lang="ts">
	import { List } from '$lib/typings'
	import SidebarHeader from './SidebarHeader.svelte'
	import { update } from '$lib/store'

	const lists = [List.Inbox, List.Today, List.Week]
</script>

<section class="sidebar">
	<SidebarHeader />
	<ul>
		{#each lists as list}
			<li on:click={() => update(list)}>{list.toString()}</li>
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
