<script lang="ts">
	export let title: string
	$: value = title.toUpperCase()
</script>

<header class="header">
	<div class="title">{value}</div>
</header>

<style lang="postcss">
	.header {
		@apply w-full flex flex-row justify-start items-center  p-2 bg-blue-light;
	}
	.title {
		@apply w-auto h-8 text-black text-left text-2xl;
	}
</style>
