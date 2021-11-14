<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	$: ({ priority, content, description } = $selectedTask)
</script>

<form>
	<section>
		<input type="checkbox" />
		<div class="content" contenteditable bind:textContent={content} />
		<span>{`p-${priority}`}</span>
	</section>
	<section>
		<label>
			Due:
			<input type="date" value={$selectedTask.due ? $selectedTask.due.date : ''} />
		</label>
	</section>
	<section>
		<div contenteditable bind:textContent={description} />
	</section>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
	section {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}
	.content {
		@apply flex-1;
	}
</style>
