<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import '../app.postcss'
</script>

<Header />
<main class="flex-1 flex flex-row w-full h-full box-border p-4 bg-blue-light">
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
