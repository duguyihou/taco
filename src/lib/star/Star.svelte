<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import starSvg from './star.svg'

	export let starred = false
	const dispatch = createEventDispatcher()
	function handleDispatch() {
		dispatch('star')
	}
</script>

<button class="star" class:starred type="button" on:click={() => handleDispatch()}>
	<img class="image" src={starSvg} alt="star" />
</button>

<style lang="postcss">
	.star {
		@apply w-6 h-6 rounded-full p-1;
	}
	.starred {
		@apply w-6 h-6 rounded-full p-1 bg-red;
	}
	.image {
		@apply w-full h-full;
	}
</style>
