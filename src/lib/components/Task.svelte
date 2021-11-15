<script lang="ts">
	import { selectTaskBy, updateTask } from '$lib/store/selectedTask'
	import { createForm } from 'svelte-forms-lib'

	import type { Task } from '$lib/typings'
	import Star from './Star.svelte'
	import Checkbox from './Checkbox.svelte'

	export let task: Task

	const { form } = createForm({
		initialValues: task,
		onSubmit: async (initialValues) => {
			const { id } = initialValues
			await updateTask(id, initialValues)
		}
	})
	function handleStar() {
		$form.priority === 1 ? $form.priority++ : $form.priority--
	}
</script>

<form>
	<Checkbox completed={$form.completed} task={$form} />
	<div class="content" on:click={() => selectTaskBy($form.id)}>{$form.content}</div>
	<Star priority={$form.priority} on:star={handleStar} />
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 py-1 border-none mt-1 text-base rounded flex flex-row justify-start items-center;
	}

	.content {
		@apply flex-1 cursor-pointer;
	}
</style>
