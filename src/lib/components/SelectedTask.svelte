<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	import Fa from 'svelte-fa'
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
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
			<div class="mx-2">
				<Fa icon={faCalendarAlt} size="sm" />
			</div>
			<input type="date" value={$selectedTask.due ? $selectedTask.due.date : ''} />
		</label>
	</section>
	<section>
		<div contenteditable bind:textContent={description} />
	</section>
</form>

<style lang="postcss">
	form {
		@apply bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
	section {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}
	input {
		@apply w-4 h-4 mx-2;
	}
	.content {
		@apply flex-1;
	}
</style>
