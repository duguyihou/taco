<script lang="ts">
	import type { Todo } from '$lib/typings'
	export let todo: Todo
	$: ({ text } = todo)
</script>

<form class="form">
	<input class="check" type="checkbox" />
	<button type="text" class="value">{text}</button>
</form>

<style lang="postcss">
	.form {
		@apply container bg-white h-auto mt-2 text-lg rounded flex flex-row justify-start items-center;
	}
	.check {
		@apply w-5 h-5 mx-1 border-2 border-blue cursor-pointer flex justify-center items-center;
	}
	.value {
		@apply flex-1 text-lg p-2 rounded outline-none text-left cursor-pointer;
	}
</style>
