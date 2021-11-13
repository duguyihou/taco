<script lang="ts">
	import { selectTaskBy, updateTask } from '$lib/store/selectedTask'
	import { createForm } from 'svelte-forms-lib'

	import type { Task } from '$lib/typings'

	export let task: Task
	const { form, handleSubmit } = createForm({
		initialValues: task,
		onSubmit: async (initialValues) => {
			const { id } = initialValues
			await updateTask(id, initialValues)
			console.log(initialValues)
		}
	})
</script>

<form>
	<input type="checkbox" bind:checked={$form.completed} on:change={handleSubmit} />
	<div on:click={() => selectTaskBy($form.id)}>{$form.content}</div>
	<span>{`p-${$form.priority}`}</span>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 py-1 border-none mt-1 text-base rounded flex flex-row justify-start items-center;
	}
	input {
		@apply w-3 h-3 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
	div {
		@apply flex-1 cursor-pointer;
	}
	span {
		@apply rounded-full p-1 mr-8;
	}
</style>
