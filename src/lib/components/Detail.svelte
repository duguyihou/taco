<script lang="ts">
	import SelectedTodo from '$lib/components/SelectedTodo.svelte'
	import type { List } from '$lib/typings'

	export let checked: boolean
	export let text: string
	export let starred: boolean
	export let list: List
</script>

<section class="detail">
	<SelectedTodo bind:checked bind:text bind:starred {list} />
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full bg-grey-dark border-2 border-grey shadow-inner flex flex-col justify-start items-center;
	}
</style>
