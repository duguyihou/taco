<script lang="ts">
	import Fa from 'svelte-fa'
	import { faPen } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'

	export let task: Task
</script>

<section>
	<Fa icon={faPen} size="sm" />
	<div contenteditable bind:textContent={task.description} />
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
