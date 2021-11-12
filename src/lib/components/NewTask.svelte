<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import type { NewTask } from '$lib/typings'
	import { updateTasksBy } from '$lib/store/tasks'

	const initialValues = {
		content: ''
	} as NewTask
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: async ({ content }) => {
			if (content !== '') {
				const newTask = { content }
				await updateTasksBy(newTask)
				$form.content = ''
			}
		}
	})
</script>

<form>
	<div contenteditable bind:textContent={$form.content} />
	<button class:show={!$form.content} on:click={handleSubmit}>create</button>
</form>

<style lang="postcss">
	form {
		@apply container overflow-hidden w-full px-2 bg-blue border-0 shadow-xl  h-auto rounded flex flex-row justify-start items-start;
	}
	div {
		@apply w-full pl-6 py-1 m-px text-base rounded overflow-hidden bg-blue text-grey-light cursor-pointer focus:bg-grey-light focus:text-black-light focus:border-grey-light border-0 outline-none;
	}
	div:before {
		content: '+';
		position: relative;
		left: -16px;
	}
	button {
		@apply bg-blue text-grey-light mt-px mb-px px-0.5 py-1 rounded;
	}
	.show {
		visibility: hidden;
	}
</style>
