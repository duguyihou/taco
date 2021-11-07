<script lang="ts">
	import { fly } from 'svelte/transition'
	import Detail from '$lib/detail/Detail.svelte'
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
	import TodoList from '$lib/todoList/TodoList.svelte'
	import store, { fetchTodos } from '$lib/store'
	import { onMount } from 'svelte'
	import Header from '$lib/header/Header.svelte'
	import Sidebar from '$lib/sidebar/Sidebar.svelte'

	$: selectedTodo = $store.todos.find(({ selected }) => selected)

	onMount(async () => await fetchTodos)
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Sidebar />
<section class="main">
	<Header title="Inbox" />
	<NewTodo />
	<TodoList />
</section>
<div class:hidden={!selectedTodo} transition:fly={{ duration: 500, x: 300 }}>
	<Detail {selectedTodo} />
</div>

<style lang="postcss">
	.main {
		@apply flex-1 mx-2 flex flex-col justify-start items-center;
	}
	.hidden {
		display: none;
	}
</style>
