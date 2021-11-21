<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import type { NewTask } from '$lib/typings'
	import { updateTasksBy } from '$lib/store'
	import { throttle } from 'lodash-es'

	export let parent_id = 0
	const initialValues = {
		content: '',
		parent_id
	} as NewTask
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: async ({ content }) => {
			if (content !== '') {
				const newTask = parent_id ? { content, parent_id } : { content }
				await updateTasksBy(newTask)
				$form.content = ''
			}
		}
	})

	const handleEnter = throttle(async (event: KeyboardEvent) => {
		if ($form.content !== '' && event.key === 'Enter') {
			event.preventDefault()
			const newTask = parent_id ? { content: $form.content, parent_id } : { content: $form.content }
			await updateTasksBy(newTask)
			$form.content = ''
		}
	}, 1000)
</script>

<form class:maintask={!parent_id} class:subtask={!!parent_id}>
	<div
		class:maintask={!parent_id}
		class:subtask={!!parent_id}
		contenteditable
		on:keydown={(event) => handleEnter(event)}
		bind:textContent={$form.content}
	/>
	<button
		class:maintask={!parent_id}
		class:subtask={!!parent_id}
		class:show={!$form.content}
		on:click={handleSubmit}>create</button
	>
</form>

<style lang="postcss">
	form {
		@apply container  w-full px-2 mt-1 border-0 shadow-xl   rounded flex flex-row justify-start items-start;
	}

	.maintask {
		@apply bg-blue text-base;
	}

	.subtask {
		@apply bg-grey-light text-blue text-sm;
	}
	div {
		@apply w-full h-auto pl-6 py-1 m-px  rounded overflow-hidden bg-blue text-grey-light cursor-pointer focus:bg-grey-light focus:text-black-light focus:border-grey-light border-0 outline-none;
	}
	div:empty:before {
		content: 'Add a to-do...';
	}
	div:focus:before {
		content: '+';
		position: relative;
		left: -16px;
	}
	button {
		@apply bg-blue text-grey-light mt-px mb-px px-0.5 py-1 rounded;
	}
	.show {
		display: none;
	}
</style>
