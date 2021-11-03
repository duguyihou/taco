<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'
	import { todos } from '$lib/store/todos'
</script>

{#each $todos as todo}
	<Todo {todo} />
{:else}
	<h1>no todo</h1>
{/each}
