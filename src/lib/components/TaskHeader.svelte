<script lang="ts">
	import type { Task } from '$lib/typings'

	import Checkbox from './Checkbox.svelte'

	import Star from './Star.svelte'

	export let content: string
	export let priority: number
	export let task: Task
</script>

<section>
	<Checkbox {task} />
	<div contenteditable bind:textContent={content} />
	<Star bind:priority {task} />
</section>

<style lang="postcss">
	section {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}

	div {
		@apply flex-1;
	}
</style>
