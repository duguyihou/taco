<script lang="ts">
	import Fa from 'svelte-fa'
	import { faStar } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'
	import { updateTask } from '$lib/store/tasks'

	export let priority: number
	export let task: Task
	async function handleStar() {
		priority === 1 ? (priority += 1) : (priority -= 1)
		const updatedTask = { ...task, priority }
		await updateTask(task.id, updatedTask)
	}
</script>

<button type="button" class:starred={priority > 1} on:click={handleStar}>
	<Fa icon={faStar} size="sm" />
</button>

<style lang="postcss">
	button {
		@apply mx-2 flex justify-center items-center text-bg;
	}
	.starred {
		@apply text-red;
	}
</style>
