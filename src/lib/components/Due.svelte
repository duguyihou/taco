<script lang="ts">
	import Fa from 'svelte-fa'
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
	import { tasks } from '$lib/store'
</script>

<section>
	<Fa icon={faCalendarAlt} size="sm" />
	<input
		type="date"
		value={$tasks.selected && $tasks.selected.due ? $tasks.selected.due.date : ''}
	/>
</section>

<style lang="postcss">
	section {
		@apply w-full p-2 flex flex-row justify-start items-center;
	}
	input {
		@apply w-full ml-2;
	}
</style>
