<script lang="ts">
	import Star from './Star.svelte'

	export let content: string
	export let priority: number
</script>

<section>
	<input type="checkbox" />
	<div contenteditable bind:textContent={content} />
	<Star {priority} />
</section>

<style lang="postcss">
	section {
		@apply w-full py-2 flex flex-row justify-between items-center;
	}

	input {
		@apply w-4 h-4 mx-2;
	}
	div {
		@apply flex-1;
	}
</style>
