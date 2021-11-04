<script lang="ts">
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
	import TodoList from '$lib/todoList/TodoList.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="main">
	<NewTodo />
	<TodoList />
</section>

<style lang="postcss">
	.main {
		@apply container flex flex-col justify-start items-center;
	}
</style>
