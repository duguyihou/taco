<script lang="ts">
	import { updateContent, updateTask } from '$lib/store/tasks'

	import type { Task } from '$lib/typings'

	import Checkbox from './Checkbox.svelte'

	import Star from './Star.svelte'

	export let task: Task

	async function handleSubmit(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault()
			;(event.target as HTMLElement).blur()
			await updateTask(task.id, { content: task.content })
		}
	}
</script>

<section>
	<Checkbox {task} />
	<div
		contenteditable
		bind:textContent={task.content}
		on:keydown={handleSubmit}
		on:input={() => updateContent(task)}
	/>
	<Star {task} />
</section>

<style lang="postcss">
	section {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}

	div {
		@apply flex-1 whitespace-pre-wrap break-words overflow-y-hidden;
	}
</style>
