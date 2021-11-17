<script lang="ts">
	import { tasks } from '$lib/store'
	import Task from './Task.svelte'
</script>

{#each $tasks.data as task (task.id)}
	<Task {task} />
{/each}
