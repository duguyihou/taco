<script lang="ts">
	import { selectedTask } from '$lib/store/selectedTask'
	import Note from './Note.svelte'
	import SubTask from './SubTask.svelte'
	import Due from './Due.svelte'
	import TaskFooter from './TaskFooter.svelte'
	import TaskHeader from './TaskHeader.svelte'
	let id: number
	let completed: boolean
	let priority: number
	let content: string
	let description: string
	$: if ($selectedTask.data) {
		id = $selectedTask.data.id
		completed = $selectedTask.data.completed
		priority = $selectedTask.data.priority
		content = $selectedTask.data.content
		description = $selectedTask.data.description
	}
</script>

{#if $selectedTask}
	<form>
		<TaskHeader {completed} task={$selectedTask.data} {content} {priority} />
		<Due />
		<SubTask />
		<Note {description} />
		<TaskFooter {id} />
	</form>
{/if}

<style lang="postcss">
	form {
		@apply relative bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
</style>
