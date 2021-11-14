<script lang="ts">
	import Fa from 'svelte-fa'
	import { faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
</script>

<footer>
	<Fa icon={faAngleRight} size="sm" />
	<Fa icon={faTrash} size="sm" />
</footer>

<style lang="postcss">
	footer {
		@apply absolute bottom-0 w-full px-4 text-blue border-t border-blue-light flex justify-between p-2;
	}
</style>
