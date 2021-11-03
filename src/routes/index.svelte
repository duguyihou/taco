<script lang="ts">
	import NewTodo from '$lib/newTodo/NewTodo.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="container flex flex-col justify-start items-center">
	<NewTodo />
</section>
