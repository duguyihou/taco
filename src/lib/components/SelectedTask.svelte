<script lang="ts">
	import Note from './Note.svelte'
	import Subtask from './Subtask.svelte'
	import Due from './Due.svelte'
	import TaskFooter from './TaskFooter.svelte'
	import TaskHeader from './TaskHeader.svelte'
	import { tasks } from '$lib/store'
</script>

<section>
	<TaskHeader task={$tasks.selected} />
	<Due task={$tasks.selected} />
	<Subtask task={$tasks.selected} />
	<Note task={$tasks.selected} />
	<TaskFooter task={$tasks.selected} />
</section>

<style lang="postcss">
	section {
		@apply relative bg-grey-light w-full h-screen p-2 border-none text-base flex flex-col justify-start items-center;
	}
</style>
