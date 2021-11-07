<script lang="ts">
	import { handleCheck, handleStar, cancelSelect } from '$lib/store'
	import Star from '$lib/star/Star.svelte'
	import type { Todo } from '$lib/typings'

	export let selectedTodo: Todo
	$: ({ text, starred, checked, list } = selectedTodo)
</script>

<form class="form" class:checked>
	<header>
		<span>{list}</span>
		<span class="star-wrapper">
			<Star {starred} on:star={() => handleStar(selectedTodo)} />
			<button class="close" on:click={() => cancelSelect()}>&#215;</button>
		</span>
	</header>
	<div class="item">
		<input class="check" type="checkbox" {checked} on:click={() => handleCheck(selectedTodo)} />
		<div class="value" contenteditable class:checked>
			{text}
		</div>
	</div>
</form>

<style lang="postcss">
	.form {
		@apply container bg-grey-light h-auto p-2 text-lg rounded flex flex-col justify-start items-center shadow-sm hover:bg-grey overflow-scroll;
	}
	header {
		@apply w-full flex flex-row justify-between items-center;
	}
	.check {
		@apply w-5 h-5 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
	.value {
		@apply w-full text-lg p-2 rounded outline-none text-left cursor-pointer text-black-light;
	}
	.checked {
		@apply line-through bg-grey-dark border-2 border-grey-dark;
	}
	.star-wrapper {
		@apply flex flex-row justify-between items-center;
	}
	.close {
		@apply text-3xl ml-2;
	}

	.item {
		@apply w-full flex flex-row justify-start items-center;
	}
</style>
