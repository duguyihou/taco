<script lang="ts" context="module">
	export async function load() {
		return {
			status: 302,
			redirect: '/today'
		}
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation'
	goto('/today')
</script>

<h1>login</h1>
