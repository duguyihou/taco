<script lang="ts">
	import Todo from '$lib/todo/Todo.svelte'

	export let checked: boolean
	export let starred: boolean
	export let selected: boolean
	export let text: string
</script>

<section class="detail">
	<Todo bind:checked {text} {starred} bind:selected />
</section>

<style lang="postcss">
	.detail {
		@apply w-80 h-full;
	}
</style>
