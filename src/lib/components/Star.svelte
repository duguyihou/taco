<script lang="ts">
	import Fa from 'svelte-fa'
	import { faStar } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'
	import { handleStar } from '$lib/store'

	export let priority: number
	export let task: Task
</script>

<button type="button" class:starred={priority > 1} on:click={() => handleStar(task)}>
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
