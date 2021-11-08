<script lang="ts">
	import { fly } from 'svelte/transition'
	import Detail from '$lib/components/Detail.svelte'
	import NewTodo from '$lib/components/NewTodo.svelte'
	import TodoList from '$lib/components/TodoList.svelte'
	import store, { fetchTodos } from '$lib/store'
	import { onMount } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte'
	import { List } from '$lib/typings'

	$: selectedTodo = $store.todos.find(({ selected }) => selected)

	onMount(async () => {
		await fetchTodos
	})
	$: console.log($store)
</script>

<Sidebar />
<section class="main">
	<Header title="Inbox" />
	<NewTodo />
	<TodoList todos={$store.todos} />
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
