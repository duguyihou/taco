<script lang="ts">
	export let title: string
</script>

<nav>
	<header>{title}</header>
</nav>

<style lang="postcss">
	nav {
		@apply w-full flex flex-row justify-start items-center  p-2 bg-blue;
	}
	header {
		@apply text-grey-light text-left text-lg;
	}
</style>
