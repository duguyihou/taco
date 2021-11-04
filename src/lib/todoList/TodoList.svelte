<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import { todos } from '$lib/store/todos'

	$: undos = $todos.filter(({ checked }) => !checked)
	$: dones = $todos.filter(({ checked }) => checked)

	$: showDones = dones.length
</script>

{#each undos as { checked, text, starred, selected }}
	<Todo bind:checked {text} {starred} bind:selected on:detail />
{:else}
	<h1>no todo</h1>
{/each}

{#if showDones}
	<h1 class="text-white">done</h1>
{/if}
{#each dones as { checked, text, starred, selected }}
	<Todo bind:checked {text} {starred} bind:selected on:detail />
{/each}
