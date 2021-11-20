<script lang="ts">
	import Fa from 'svelte-fa'
	import { faPen } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'
	import { throttle } from 'lodash-es'
	import { updateTask } from '$lib/store'

	export let task: Task
	const handleEnter = throttle(async (event: KeyboardEvent) => {
		if (task.description && event.key === 'Enter') {
			event.preventDefault()
			;(event.target as HTMLElement).blur()
			await updateTask(task)
		}
	}, 1000)
</script>

<section>
	<Fa icon={faPen} size="sm" />
	<div contenteditable bind:textContent={task.description} on:keydown={handleEnter} />
</section>

<style lang="postcss">
	section {
		@apply w-full p-2 flex flex-row justify-start items-start;
	}
	div {
		@apply w-full overflow-hidden ml-2;
	}
	div:empty:before {
		content: 'Add a note...';
		color: gray;
	}
	div:focus:before {
		content: '';
	}
</style>
