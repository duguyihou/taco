<script lang="ts">
	import { tasks } from '$lib/store'
	import Task from './Task.svelte'
</script>

<div>
	{#each $tasks.data as task (task.id)}
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
