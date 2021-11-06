<script lang="ts">
	import Star from '$lib/star/Star.svelte'
	import type { Todo } from '$lib/typings'
	import { handleStar, handleSelect, handleCheck } from '$lib/store'
	export let todo: Todo
	$: ({ text, starred, checked } = todo)
</script>

<form class="form" class:checked>
	<input class="check" type="checkbox" {checked} on:click={() => handleCheck(todo)} />
	<button type="button" class="value" class:checked on:click={() => handleSelect(todo)}
		>{text}</button
	>
	<div class="star-wrapper">
		<Star {starred} on:star={() => handleStar(todo)} />
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
