<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	$: ({ priority, content } = $selectedTask)
</script>

<form>
	<section class="todo">
		<input type="checkbox" />
		<div class="content" contenteditable bind:textContent={content} />
		<span>{`p-${priority}`}</span>
	</section>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-full p-2 border-none text-base flex flex-col justify-start items-center;
	}
	.todo {
		@apply w-full flex flex-row justify-between items-center;
	}
	.content {
		@apply flex-1;
	}
</style>
