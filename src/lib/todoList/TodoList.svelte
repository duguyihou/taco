<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import { todos } from '$lib/store/todos'

	$: undos = $todos.filter(({ checked }) => !checked)
	$: dones = $todos.filter(({ checked }) => checked)

	$: showDones = dones.length
</script>

{#each undos as todo}
	<Todo {todo} />
{:else}
	<h1>no todo</h1>
{/each}

{#if showDones}
	<h1 class="text-white">done</h1>
{/if}
{#each dones as todo}
	<Todo bind:todo />
{/each}
