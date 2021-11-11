<script lang="ts">
	import type { Task } from '$lib/typings'
	import starSvg from '../../static/star.svg'

	export let task: Task
	export let checked: boolean
	let show = false
	$: ({ content, priority } = task)
</script>

<form class:checked>
	<input type="checkbox" bind:checked />
	<div class:checked>{content}</div>
	<button class="star" class:show class:starred={priority} type="button">
		<img class="image" src={starSvg} alt="star" />
	</button>
</form>

<style lang="postcss">
	form {
		@apply container bg-grey-light w-full h-auto px-2 border-0 mt-1 text-base rounded flex flex-row justify-start items-center;
	}
	input {
		@apply w-3 h-3 mx-2 border-2 cursor-pointer flex justify-center items-center;
	}

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
