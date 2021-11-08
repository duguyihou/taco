<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { store } from '$lib/store'
	import type { Todo } from '$lib/typings'
	import { List } from '$lib/typings'

	import Star from '$lib/star/Star.svelte'
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
		onSubmit: ({ text, list, starred, checked, selected }) => {
			if (text !== '') {
				const newTodo = { id: uuid(), text, list, starred, checked, selected }
				console.log(list)
				$store.todos = [newTodo, ...$store.todos]
				$form.text = ''
				$form.starred = false
				$form.id = ''
			}
		}
	})

	function handleStar() {
		$form.starred = !$form.starred
	}
	$: showStar = !$form.text
</script>

<form class="form" on:submit={handleSubmit}>
	<label for="newTodo" class="icon">&plus;</label>
	<input class="input" id="newTodo" placeholder="New to-do" bind:value={$form.text} />
	<Star show={showStar} bind:starred={$form.starred} />
</form>

<style lang="postcss">
	.form {
		@apply container bg-blue border-2 border-blue shadow-xl  h-auto text-lg rounded flex flex-row justify-start items-center;
	}
	.icon {
		@apply w-5 h-5 mx-2 flex justify-center items-center text-grey-light;
	}
	.input {
		@apply flex-1 text-base m-px bg-blue text-grey-light rounded border-0 outline-none placeholder-grey-light focus:bg-grey-light focus:text-black-light;
	}
</style>
