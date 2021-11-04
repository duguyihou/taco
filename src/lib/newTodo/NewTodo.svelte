<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { todos } from '$lib/store/todos'
	import { List, Todo } from '$lib/typings'
	import Star from '$lib/star/Star.svelte'

	const initialValues = {
		text: '',
		list: List.Inbox,
		starred: false,
		checked: false
	} as Todo
	const { form, handleSubmit } = createForm({
		initialValues,
		onSubmit: ({ text, list, starred, checked }) => {
			if (text !== '') {
				const newTodo = { text, list, starred, checked }
				$todos = [...$todos, newTodo].reverse()
				$form.text = ''
				$form.starred = false
			}
		}
	})

	function handleStar() {
		$form.starred = !$form.starred
	}
	$: showStar = $form.text
</script>

<form class="form" on:submit={handleSubmit}>
	<label for="newTodo" class="icon">&plus;</label>
	<input class="input" id="newTodo" bind:value={$form.text} />
	<div class="star-wrapper" class:hidden={!showStar}>
		<Star bind:starred={$form.starred} on:star={() => handleStar()} />
	</div>
</form>

<style lang="postcss">
	.form {
		@apply container bg-white h-auto text-lg rounded flex flex-row justify-start items-center;
	}
	.icon {
		@apply w-5 h-5 mx-2 flex justify-center items-center;
	}
	.input {
		@apply flex-1 text-lg p-2 rounded outline-none;
	}
	.star-wrapper {
		@apply mr-8 p-2;
	}

	.hidden {
		visibility: hidden;
	}
</style>
