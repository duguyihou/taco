<script lang="ts">
	import Note from './Note.svelte'
	import Subtask from './Subtask.svelte'
	import Due from './Due.svelte'
	import TaskFooter from './TaskFooter.svelte'
	import TaskHeader from './TaskHeader.svelte'
	import type { Task } from '$lib/typings'

	export let task: Task
</script>

<section>
	<TaskHeader {task} />
	<Due {task} />
	<Subtask {task} />
	<Note {task} />
	<TaskFooter {task} />
</section>

<style lang="postcss">
	section {
		@apply relative bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
</style>
