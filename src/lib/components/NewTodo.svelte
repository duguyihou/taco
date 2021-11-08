<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { store } from '$lib/store'
	import type { Todo } from '$lib/typings'
	import { List } from '$lib/typings'

	import { v4 as uuid } from '@lukeed/uuid'

	const initialValues = {
		id: '',
		text: '',
		list: List.Inbox,
		starred: false,
		checked: false,
		selected: false
	} as Todo
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: ({ text, ...initialValues }) => {
			if (text !== '') {
				const newTodo = { id: uuid(), text, ...initialValues }
				$store.todos = [newTodo, ...$store.todos]
				$form.text = ''
				$form.id = ''
			}
		}
	})
	$: console.log($form.text)
</script>

<form>
	<div contenteditable bind:textContent={$form.text} />
	<button class:show={!$form.text} on:click={handleSubmit}>create</button>
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
