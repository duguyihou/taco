<script lang="ts">
	import { cancelSelect } from '$lib/store'
	import Star from '$lib/components/todo/Star.svelte'
	import type { List } from '$lib/typings'
	import Check from './todo/Check.svelte'
	import TodoItem from './todo/TodoItem.svelte'

	export let checked: boolean
	export let text: string
	export let starred: boolean
	export let list: List
</script>

<form class:checked>
	<header>
		<span>{list}</span>
		<span class="star-wrapper">
			<Star bind:starred />
			<button class="close" on:click={() => cancelSelect()}>&#215;</button>
		</span>
	</header>
	<section class="item">
		<Check bind:checked />
		<TodoItem bind:text />
	</section>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light h-auto text-lg rounded flex flex-col justify-start items-center shadow-sm hover:bg-grey;
	}
	header {
		@apply w-full flex flex-row justify-between items-center;
	}
	.check {
		@apply w-5 h-5 mx-2 p-2 border-2 cursor-pointer flex justify-center items-center;
	}
	.value {
		@apply w-full h-auto text-lg p-2 rounded outline-none text-left cursor-pointer text-black-light overflow-hidden;
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
