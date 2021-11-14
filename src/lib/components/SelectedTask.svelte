<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	import Star from './Star.svelte'

	import Fa from 'svelte-fa'
	import { faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
	import Note from './Note.svelte'
	import SubTask from './SubTask.svelte'
	import Due from './Due.svelte'
	$: ({ priority, content, description } = $selectedTask)
</script>

<form>
	<section class="task">
		<input type="checkbox" class="checkbox" />
		<div class="content" contenteditable bind:textContent={content} />
		<Star {priority} />
	</section>
	<Due />
	<SubTask />
	<Note {description} />
	<footer>
		<div class="icon">
			<Fa icon={faAngleRight} size="sm" />
		</div>
		<div class="icon">
			<Fa icon={faTrash} size="sm" />
		</div>
	</footer>
</form>

<style lang="postcss">
	form {
		@apply relative bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
	.task {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}

	.checkbox {
		@apply w-4 h-4 mx-2;
	}
	.content {
		@apply flex-1;
	}

	.icon {
		@apply mx-2 flex justify-center items-center text-blue;
	}
	footer {
		@apply absolute bottom-0 w-full border-t border-blue-light flex justify-between p-2;
	}
</style>
