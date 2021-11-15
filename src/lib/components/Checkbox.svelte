<script lang="ts">
	import { closeTask, reopenTask } from '$lib/store/selectedTask'
	import type { Task } from '$lib/typings'
	export let task: Task
	export let completed: boolean
	async function handleCheck(completed: boolean) {
		completed ? await closeTask(task) : await reopenTask(task)
	}
</script>

<input type="checkbox" bind:checked={completed} on:change={() => handleCheck(completed)} />

<style lang="postcss">
	input {
		@apply w-4 h-4 mx-2;
	}
</style>
