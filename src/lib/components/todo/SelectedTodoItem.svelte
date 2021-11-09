<script lang="ts">
	import { selectedTodo, updateTodoItem } from '$lib/store'

	export let text: string
	export let checked: boolean

	$: if (text !== $selectedTodo.text) updateTodoItem({ text: text, id: $selectedTodo.id })
</script>

<div class:checked contenteditable bind:textContent={text} />

<style lang="postcss">
	div {
		@apply flex-1 text-base m-px rounded outline-none text-left cursor-pointer text-black-light;
	}
	.checked {
		@apply line-through bg-grey-dark;
	}
</style>
