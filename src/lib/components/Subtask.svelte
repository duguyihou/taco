<script lang="ts">
	import { tasks } from '$lib/store'
	import type { Task as ITask } from '$lib/typings'
	import NewTask from './NewTask.svelte'
	import Task from './Task.svelte'

	export let task: ITask
	$: subtasks = $tasks.data.filter(({ parent_id }) => parent_id === task.id)
</script>

<section>
	{#each subtasks as subtask (subtask.id)}
		<Task task={subtask} />
	{/each}
	{#if task}
		<NewTask parent_id={task.id} />
	{/if}
</section>

<style lang="postcss">
	section {
		@apply w-full p-2 flex flex-col justify-start items-center;
	}
</style>
