<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	export let checked: boolean
	const dispatch = createEventDispatcher()
	function handleDispatch() {
		dispatch('check')
	}
</script>

<input type="checkbox" bind:checked on:click={() => handleDispatch()} />

<style lang="postcss">
	input {
		@apply w-3 h-3 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}
</style>
