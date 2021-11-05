<script lang="ts">
	import SelectedTodo from '$lib/selectedTodo/SelectedTodo.svelte'
	// import Todo from '$lib/todo/Todo.svelte'
	import type { Todo as TodoProps } from '$lib/typings'

	export let selectedTodo: TodoProps
</script>

<section class="detail">
	<SelectedTodo bind:selectedTodo />
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full mx-2 bg-blue-light border-2 shadow-lg flex flex-col justify-start items-center;
	}
</style>
