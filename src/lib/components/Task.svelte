<script lang="ts">
	import {
		closeTask,
		reopenTask,
		selectedTask,
		selectTaskBy,
		updateTask
	} from '$lib/store/selectedTask'
	import { createForm } from 'svelte-forms-lib'

	import type { Task } from '$lib/typings'
	import Star from './Star.svelte'

	export let task: Task

	const { form } = createForm({
		initialValues: task,
		onSubmit: async (initialValues) => {
			const { id } = initialValues
			await updateTask(id, initialValues)
		}
	})

	async function handleCheck(completed: boolean) {
		completed ? await closeTask(task) : await reopenTask(task)
	}
</script>

<form>
	<input
		type="checkbox"
		bind:checked={$form.completed}
		on:change={() => handleCheck($form.completed)}
	/>
	<div class="content" on:click={() => selectTaskBy($form.id)}>{$form.content}</div>
	<Star priority={$form.priority} />
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 py-1 border-none mt-1 text-base rounded flex flex-row justify-start items-center;
	}

	input {
		@apply w-4 h-4 mx-2;
	}
	.content {
		@apply flex-1 cursor-pointer;
	}
</style>
