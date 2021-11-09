<script lang="ts">
	import Star from '$lib/components/todo/Star.svelte'
	import { handleCheck, handleSelect, handleStar } from '$lib/store'
	import type { Todo } from '$lib/typings'
	import Check from './Check.svelte'
	import TodoItem from './TodoItem.svelte'
	export let todo: Todo
	export let checked: boolean
	$: ({ text, starred } = todo)
</script>

<form class:checked>
	<Check {checked} on:check={() => handleCheck(todo)} />
	<TodoItem {text} {checked} on:select={() => handleSelect(todo)} />
	<Star {starred} on:star={() => handleStar(todo)} />
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 border-0 mt-1 text-base rounded flex flex-row justify-start items-center;
	}
</style>
