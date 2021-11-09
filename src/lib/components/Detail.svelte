<script lang="ts">
	import SelectedTodo from '$lib/components/SelectedTodo.svelte'
	import type { Todo } from '$lib/typings'

	export let selectedTodo: Todo
</script>

<section class="detail">
	{#if selectedTodo}
		<SelectedTodo {selectedTodo} text={selectedTodo.text} />
	{/if}
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full bg-grey-dark border-2 border-grey shadow-inner flex flex-col justify-start items-center;
	}
</style>
