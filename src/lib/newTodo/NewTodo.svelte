<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { todos } from '$lib/store/todos'
	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			newTodo: ''
		},
		onSubmit: ({ newTodo }) => {
			$todos = [...$todos, newTodo].reverse()
			$form.newTodo = ''
		}
	})
</script>

<form class="form" on:submit={handleSubmit}>
	<span class="icon">&plus;</span>
	<input class="input" name="newTodo" on:change={handleChange} bind:value={$form.newTodo} />
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
