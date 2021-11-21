<script lang="ts">
	import type { Task as ITask } from '$lib/typings'
	import Task from './Task.svelte'
	export let tasks: ITask[]
</script>

<div>
	{#each tasks as task (task.id)}
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
