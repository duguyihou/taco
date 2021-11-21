<script lang="ts">
	import { tasks } from '$lib/store'
	import Task from './Task.svelte'
	$: mainTasks = $tasks.data.filter(({ parent_id }) => !parent_id)
</script>

<div>
	{#each mainTasks as task (task.id)}
		<Task {task} />
	{/each}
</div>

<style lang="postcss">
	div {
		width: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
