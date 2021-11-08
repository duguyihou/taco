<script lang="ts">
	import starSvg from '../../static/star.svg'
	import { createEventDispatcher } from 'svelte'
	export let starred = false
	export let show = false

	const dispatch = createEventDispatcher()
	function handleDispatch() {
		dispatch('star')
	}
</script>

<button class="star" class:show class:starred type="button" on:click={() => handleDispatch()}>
	<img class="image" src={starSvg} alt="star" />
</button>

<style lang="postcss">
	.star {
		@apply w-6 h-6 rounded-full p-1 mr-8;
	}
	.show {
		visibility: hidden;
	}
	.starred {
		@apply w-6 h-6 rounded-full p-1 bg-red;
	}
	.image {
		@apply w-full h-full;
	}
</style>
