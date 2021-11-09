<script lang="ts">
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	import NewTodo from '$lib/components/NewTodo.svelte'
	import TodoList from '$lib/components/TodoList.svelte'
	import store, { fetchTodos } from '$lib/store'
	import Header from '$lib/components/Header.svelte'
	import SelectedTodo from '$lib/components/detail/SelectedTodo.svelte'

	$: selectedTodo = $store.todos.find(({ selected }) => selected)

	onMount(async () => {
		await fetchTodos
	})
</script>

<section>
	<Header title="Inbox" />
	<NewTodo />
	<TodoList todos={$store.todos} />
</section>
{#if selectedTodo}
	<div class:hidden={!selectedTodo} transition:fly={{ duration: 500, x: 300 }}>
		<SelectedTodo {selectedTodo} text={selectedTodo.text} />
	</div>
{/if}

<style lang="postcss">
	section {
		@apply px-1 bg-blue-light flex-1 flex flex-col justify-start items-center;
	}
	.hidden {
		display: none;
	}
</style>
