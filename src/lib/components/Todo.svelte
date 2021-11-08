<script lang="ts">
	import Star from '$lib/components/todo/Star.svelte'
	import type { Todo } from '$lib/typings'
	import Check from './todo/Check.svelte'
	import TodoItem from './todo/TodoItem.svelte'
	export let todo: Todo
	$: ({ text, starred, checked } = todo)
</script>

<form class:checked>
	<Check bind:checked />
	<TodoItem bind:text />
	<Star bind:starred />
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 border-0 mt-1 text-base rounded flex flex-row justify-start items-center;
	}
	input {
		@apply w-3 h-3 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
	div {
		@apply flex-1 text-base m-px rounded outline-none text-left cursor-pointer text-black-light;
	}
	.checked {
		@apply line-through bg-grey-dark;
	}
</style>
