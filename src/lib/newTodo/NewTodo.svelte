<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { todos } from '$lib/store/todos'
	import { List, Todo } from '$lib/typings'

	const initialValues = {
		text: '',
		list: List.Inbox,
		stared: false
	} as Todo
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: ({ text, list, stared }) => {
			if (text !== '') {
				const newTodo = { text, list, stared }
				$todos = [...$todos, newTodo].reverse()
				$form.text = ''
			}
		}
	})
</script>

<form class="form" on:submit={handleSubmit}>
	<label for="newTodo" class="icon">&plus;</label>
	<input class="input" id="newTodo" bind:value={$form.text} />
</form>

<style lang="postcss">
	.form {
		@apply container bg-white h-auto text-lg rounded flex flex-row justify-start items-center;
	}
	.icon {
		@apply w-5 h-5 mx-1  flex justify-center items-center;
	}
	.input {
		@apply flex-1 text-lg p-2 rounded outline-none;
	}
</style>
