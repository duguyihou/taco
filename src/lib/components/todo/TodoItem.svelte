<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let text: string
	export let checked: boolean
	const dispatch = createEventDispatcher()
	function handleDispatch() {
		dispatch('select')
	}
</script>

<div class:checked on:click={() => handleDispatch()}>{text}</div>

<style lang="postcss">
	div {
		@apply flex-1 text-base m-px rounded outline-none text-left cursor-pointer text-black-light;
	}
	.checked {
		@apply line-through bg-grey-dark;
	}
</style>
