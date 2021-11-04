<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import type { Todo as TodoProps } from '$lib/typings'
	// export let selectedTodo: TodoProps
</script>

<section class="detail">
	<!-- <Todo bind:todo={selectedTodo} /> -->
	<h1>detail</h1>
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full;
	}
</style>
