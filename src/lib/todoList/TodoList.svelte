<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import { todoList } from '$lib/store/todoList'

	$: undos = $todoList.todos.filter(({ checked }) => !checked)
	// $: dones = $todoList.todos.filter(({ checked }) => checked)

	// $: showDones = dones.length
</script>

{#each undos as todo}
	<Todo {todo} />
{:else}
	<h1>no todo</h1>
{/each}

<!-- {#if showDones}
	<h1 class="text-white">done</h1>
{/if}
{#each dones as todo}
	<Todo bind:todo />
{/each} -->
