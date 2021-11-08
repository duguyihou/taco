<script lang="ts">
	export let text: string
</script>

<div class="value" contenteditable bind:textContent={text} />
