<script lang="ts">
	import { closeTask, reopenTask } from '$lib/store'
	import type { Task } from '$lib/typings'
	export let task: Task
	async function handleCheck(completed: boolean) {
		completed ? await closeTask(task) : await reopenTask(task)
	}
</script>

{#if task}
	<input
		type="checkbox"
		bind:checked={task.completed}
		on:change={() => handleCheck(task.completed)}
	/>
{/if}

<style lang="postcss">
	input {
		@apply w-4 h-4 mx-2;
	}
</style>
