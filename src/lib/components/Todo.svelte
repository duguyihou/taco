<script lang="ts">
	import Star from '$lib/components/Star.svelte'
	import type { Todo } from '$lib/typings'
	import { handleSelect, handleCheck, handleStar } from '$lib/store'
	export let todo: Todo
	$: ({ text, starred, checked } = todo)
</script>

<form class:checked>
	<input type="checkbox" {checked} on:click={() => handleCheck(todo)} />
	<div class:checked on:click={() => handleSelect(todo)}>{text}</div>
	<Star {starred} on:star={() => handleStar(todo)} />
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
