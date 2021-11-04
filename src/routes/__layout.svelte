<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import '../app.css'
</script>

<Header />
<main class="flex-1 flex flex-col w-full h-full box-border p-4 bg-black-light">
	<slot />
</main>
<footer class="absolute bottom-0 mx-auto inset-x-0">
	<p class="text-center">taco</p>
</footer>
