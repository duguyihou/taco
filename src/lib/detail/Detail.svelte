<script lang="ts">
	import SelectedTodo from '$lib/selectedTodo/SelectedTodo.svelte'
	import type { Todo } from '$lib/typings'

	export let selectedTodo: Todo
</script>

<section class="detail">
	<SelectedTodo bind:selectedTodo />
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full mx-2 bg-blue-light border-2 shadow-lg flex flex-col justify-start items-center;
	}
</style>
