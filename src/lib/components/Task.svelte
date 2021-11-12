<script lang="ts">
	import { selectTaskBy } from '$lib/store/selectedTask'

	import type { Task } from '$lib/typings'

	export let task: Task
	export let completed: boolean
	$: ({ content, priority, id } = task)
</script>

<form>
	<input type="checkbox" bind:checked={completed} />
	<div on:click={() => selectTaskBy(id)}>{content}</div>
	<span>{`p-${priority}`}</span>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 py-1 border-none mt-1 text-base rounded flex flex-row justify-start items-center;
	}
	input {
		@apply w-3 h-3 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
	div {
		@apply flex-1 cursor-pointer;
	}
	span {
		@apply rounded-full p-1 mr-8;
	}
</style>
