<script lang="ts">
	import Star from '$lib/star/Star.svelte'
	import type { Todo } from '$lib/typings'
	import { todoList } from '$lib/store/todoList'

	export let todo: Todo
	export let checked: boolean
	$: ({ id, text, starred } = todo)

	function handleStar() {
		$todoList.starredIds = [id, ...$todoList.starredIds]
		const todo = $todoList.todos.find((todo) => todo.id === id)
		const idx = $todoList.todos.indexOf(todo)
		const starredTodo = { ...todo, starred: !starred }
		$todoList.todos.splice(idx, 1, starredTodo)
		$todoList.todos = $todoList.todos
	}

	function handleSelect(todo: Todo) {
		$todoList.selectedTodo = todo
		const idx = $todoList.todos.indexOf(todo)
		const selectedTodo = { ...todo, selected: true }
		$todoList.todos.splice(idx, 1, selectedTodo)
		$todoList.todos = $todoList.todos
	}
</script>

<form class="form" class:checked>
	<input class="check" type="checkbox" bind:checked />
	<button type="button" class="value" class:checked on:click={() => handleSelect(todo)}
		>{text}</button
	>
	<div class="star-wrapper">
		<Star {starred} on:star={() => handleStar()} />
	</div>
</form>

<style lang="postcss">
	.form {
		@apply container bg-white h-auto mt-2 text-lg rounded flex flex-row justify-start items-center;
	}
	.check {
		@apply w-5 h-5 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
	.value {
		@apply flex-1 text-lg p-2 rounded outline-none text-left cursor-pointer;
	}
	.checked {
		@apply line-through bg-grey-light;
	}
	.star-wrapper {
		@apply mr-8 p-2;
	}
</style>
