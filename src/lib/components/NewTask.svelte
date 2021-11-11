<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import type { Task } from '$lib/typings'

	import { v4 as uuid } from '@lukeed/uuid'

	const initialValues = {
		id: '',
		content: '',
		description: '',
		completed: false,
		order: 0,
		starred: false,
		priority: 1,
		project_id: 0,
		due: '',
		url: ''
	} as Task
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: ({ content, ...initialValues }) => {
			if (content !== '') {
				const newTodo = { id: uuid(), content, ...initialValues }
				$form.content = ''
				$form.id = ''
			}
		}
	})
	$: console.log($form.content)
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
		@apply w-full pl-6 m-px text-base rounded overflow-hidden bg-blue text-grey-light cursor-pointer focus:bg-grey-light focus:text-black-light focus:border-grey-light border-0 outline-none;
	}
	div:before {
		content: '+';
		position: relative;
		left: -16px;
	}
	button {
		@apply bg-blue text-grey-light mt-px mb-px px-0.5 rounded;
	}
	.show {
		visibility: hidden;
	}
</style>
