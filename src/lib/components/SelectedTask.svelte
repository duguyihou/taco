<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	import Note from './Note.svelte'
	import SubTask from './SubTask.svelte'
	import Due from './Due.svelte'
	import TaskFooter from './TaskFooter.svelte'
	import TaskHeader from './TaskHeader.svelte'
	$: ({ priority, content, description } = $selectedTask)
</script>

<form>
	<TaskHeader {content} {priority} />
	<Due />
	<SubTask />
	<Note {description} />
	<TaskFooter />
</form>

<style lang="postcss">
	form {
		@apply relative bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
</style>
