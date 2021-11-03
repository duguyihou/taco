<script lang="ts">
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
	import Todo from '$lib/todo/Todo.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="container flex flex-col justify-start items-center">
	<NewTodo />
	<Todo value="asd" />
</section>
