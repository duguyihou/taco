<script lang="ts">
	import { cancelSelect, handleCheck, handleStar } from '$lib/store'
	import Star from '$lib/components/todo/Star.svelte'
	import type { Todo } from '$lib/typings'
	import Check from './todo/Check.svelte'
	import SelectedTodoItem from './todo/SelectedTodoItem.svelte'

	export let selectedTodo: Todo
	export let text: string
	$: ({ checked, starred, list } = selectedTodo)
</script>

<form class:checked>
	<header>
		<span>{list}</span>
		<span class="star-wrapper">
			<Star {starred} on:star={() => handleStar(selectedTodo)} />
			<button class="close" on:click={() => cancelSelect()}>&#215;</button>
		</span>
	</header>
	<section class="item">
		<Check {checked} on:check={() => handleCheck(selectedTodo)} />
		<SelectedTodoItem {text} {checked} />
	</section>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light h-auto text-lg rounded flex flex-col justify-start items-center shadow-sm hover:bg-grey;
	}
	header {
		@apply w-full flex flex-row justify-between items-center;
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
