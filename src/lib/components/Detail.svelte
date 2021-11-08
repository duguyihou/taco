<script lang="ts">
	import SelectedTodo from '$lib/components/SelectedTodo.svelte'
	import type { Todo } from '$lib/typings'

	export let selectedTodo: Todo
</script>

{#if selectedTodo}
	<section class="detail">
		<SelectedTodo {selectedTodo} />
	</section>
{/if}

<style lang="postcss">
	.detail {
		@apply w-80 h-full bg-grey-dark border-2 border-grey shadow-2xl flex flex-col justify-start items-center;
	}
</style>
