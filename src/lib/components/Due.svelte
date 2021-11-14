<script lang="ts">
	import Fa from 'svelte-fa'
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
	import { selectedTask } from '$lib/store/selectedTask'
</script>

<section>
	<Fa icon={faCalendarAlt} size="sm" />
	<input type="date" value={$selectedTask.due ? $selectedTask.due.date : ''} />
</section>

<style lang="postcss">
	section {
		@apply w-full p-2 flex flex-row justify-start items-center;
	}
	input {
		@apply w-full ml-2;
	}
</style>
