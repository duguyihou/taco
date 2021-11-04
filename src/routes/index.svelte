<script lang="ts">
	import { fly } from 'svelte/transition'
	import Detail from '$lib/detail/Detail.svelte'
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
	import TodoList from '$lib/todoList/TodoList.svelte'
	import { todos } from '$lib/store/todos'

	let show = false

	function showDetail(event: CustomEvent) {
		show = !show
		const { selected } = event.detail
		console.log(selected)
	}

	let selectedTodo = $todos.filter(({ selected }) => selected)[0]
	$: ({ checked, text, starred, selected } = selectedTodo)
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="main">
	<NewTodo />
	<TodoList on:detail={(event) => showDetail(event)} />
</section>
<div class:hidden={!show} transition:fly={{ duration: 500, x: 300 }}>
	<Detail bind:checked {text} {starred} bind:selected />
</div>

<style lang="postcss">
	.main {
		@apply container flex flex-col justify-start items-center;
	}
	.hidden {
		display: none;
	}
</style>
