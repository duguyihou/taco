<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import type { Todo as ITodo } from '$lib/typings'

	export let todos: ITodo[]
	$: undos = todos.filter(({ checked }) => !checked)
	$: dones = todos.filter(({ checked }) => checked)

	$: showDones = dones.length
</script>

{#if todos}
	{#each undos as todo}
		<Todo {todo} />
	{/each}
	{#if showDones}
		<p>Done</p>
	{/if}
	{#each dones as todo}
		<Todo {todo} />
	{/each}
{/if}

<style lang="postcss">
	p {
		@apply my-1 text-grey-light text-left  px-3 py-1 rounded-md border-2 border-blue;
	}
</style>
