<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	import Fa from 'svelte-fa'
	import {
		faStar,
		faAngleRight,
		faCalendarAlt,
		faPen,
		faPlus,
		faTrash
	} from '@fortawesome/free-solid-svg-icons'
	$: ({ priority, content, description } = $selectedTask)
</script>

<form>
	<section class="task">
		<input type="checkbox" class="checkbox" />
		<div class="content" contenteditable bind:textContent={content} />
		<div class="icon" class:starred={priority > 1}>
			<Fa icon={faStar} size="sm" />
		</div>
	</section>
	<section class="due">
		<div class="icon">
			<Fa icon={faCalendarAlt} size="sm" />
		</div>
		<input type="date" value={$selectedTask.due ? $selectedTask.due.date : ''} />
	</section>
	<section class="sub">
		<div class="icon">
			<Fa icon={faPlus} size="sm" />
		</div>
		<input class="sub-task" type="text" placeholder="Add a subtask" />
	</section>
	<section class="note">
		<div class="icon">
			<Fa icon={faPen} size="sm" />
		</div>
		<textarea placeholder="Add a note">{description}</textarea>
	</section>
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
	.due,
	.sub {
		@apply w-full py-2 flex flex-row justify-start items-center;
	}
	.icon {
		@apply mx-2 flex justify-center items-center text-blue;
	}

	.note {
		@apply w-full py-2 flex flex-row justify-start items-start;
	}
	.starred {
		@apply text-red;
	}

	footer {
		@apply absolute bottom-0 w-full border-t border-blue-light flex justify-between p-2;
	}
</style>
