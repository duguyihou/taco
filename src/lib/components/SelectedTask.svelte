<script lang="ts">
	import Note from './Note.svelte'
	import SubTask from './SubTask.svelte'
	import Due from './Due.svelte'
	import TaskFooter from './TaskFooter.svelte'
	import TaskHeader from './TaskHeader.svelte'
	import { tasks } from '$lib/store/tasks'
	let id: number
	let completed: boolean
	let priority: number
	let content: string
	let description: string
	$: if ($tasks.selected) {
		id = $tasks.selected.id
		completed = $tasks.selected.completed
		priority = $tasks.selected.priority
		content = $tasks.selected.content
		description = $tasks.selected.description
	}
</script>

{#if $tasks}
	<form>
		<TaskHeader {completed} task={$tasks.selected} {content} {priority} />
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
