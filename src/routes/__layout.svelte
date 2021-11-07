<script lang="ts">
	import '../app.postcss'
</script>

<main class="flex-1 flex flex-row w-full h-full box-border bg-blue-light">
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
