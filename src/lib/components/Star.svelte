<script lang="ts">
	import Fa from 'svelte-fa'
	import { faStar } from '@fortawesome/free-solid-svg-icons'

	export let priority: number
</script>

<div class:starred={priority > 1}>
	<Fa icon={faStar} size="sm" />
</div>

<style lang="postcss">
	div {
		@apply mx-2 flex justify-center items-center text-grey-light;
	}
	.starred {
		@apply text-red;
	}
</style>
