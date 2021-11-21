<script lang="ts">
	import { selectTaskBy, tasks } from '$lib/store'

	import type { Task } from '$lib/typings'
	import Star from './Star.svelte'
	import Checkbox from './Checkbox.svelte'

	export let task: Task
	$: selected = $tasks.selected === task
	$: ({ id, content } = task)
	const handleSelect = () => {
		if (!task.parent_id) selectTaskBy(id)
	}
</script>

<form class:selected>
	<Checkbox {task} />
	<p class="content" on:click={() => handleSelect()}>{content}</p>
	<Star {task} />
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 py-1 border-none mt-1 text-base rounded flex flex-row justify-start items-center;
	}

	p {
		@apply flex-1 cursor-pointer whitespace-nowrap overflow-ellipsis overflow-hidden;
	}

	.selected {
		@apply bg-selected;
	}
</style>
