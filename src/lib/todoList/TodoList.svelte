<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import { todos } from '$lib/store/todos'

	$: undos = $todos.todos.filter(({ checked }) => !checked)
	$: dones = $todos.todos.filter(({ checked }) => checked)

	$: showDones = dones.length
</script>

{#each undos as todo}
	<Todo {todo} bind:checked={todo.checked} />
{:else}
	<h1>no todo</h1>
{/each}

{#if showDones}
	<h1 class="text-white">done</h1>
{/if}
{#each dones as todo}
	<Todo {todo} bind:checked={todo.checked} />
{/each}
