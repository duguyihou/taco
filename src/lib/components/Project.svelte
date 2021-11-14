<script lang="ts">
	import { tasks } from '$lib/store/tasks'
	import Task from './Task.svelte'
</script>

{#each $tasks as task (task.id)}
	<Task {task} />
{/each}
