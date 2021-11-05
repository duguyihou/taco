<script lang="ts">
	import { fly } from 'svelte/transition'
	import Detail from '$lib/detail/Detail.svelte'
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
	import TodoList from '$lib/todoList/TodoList.svelte'
	import { todos } from '$lib/store/todos'

	$: selectedTodo = $todos.find(({ selected }) => selected)
	$: show = !!selectedTodo
	$: console.log(selectedTodo)
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="main">
	<NewTodo />
	<TodoList />
</section>
<div class:hidden={!show} transition:fly={{ duration: 500, x: 300 }}>
	<Detail {selectedTodo} />
</div>

<style lang="postcss">
	.main {
		@apply container flex flex-col justify-start items-center;
	}
	.hidden {
		display: none;
	}
</style>
