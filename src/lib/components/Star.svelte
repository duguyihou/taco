<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Fa from 'svelte-fa'
	import { faStar } from '@fortawesome/free-solid-svg-icons'

	export let priority: number
	const dispatch = createEventDispatcher()
	function handleDispatch() {
		dispatch('star')
	}
</script>

<button type="button" class:starred={priority > 1} on:click={() => handleDispatch()}>
	<Fa icon={faStar} size="sm" />
</button>

<style lang="postcss">
	button {
		@apply mx-2 flex justify-center items-center text-bg;
	}
	.starred {
		@apply text-red;
	}
</style>
