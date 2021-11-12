<script lang="ts">
	import { tasks } from '$lib/store/tasks'
	import Task from './Task.svelte'
</script>

{#each $tasks as task}
	<Task {task} completed={task.completed} />
{/each}
