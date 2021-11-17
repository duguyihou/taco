<script lang="ts">
	import Fa from 'svelte-fa'
	import { faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
	import { deleteTask, unselectTask } from '$lib/store'
	export let id: number
</script>

<footer>
	<button type="button" on:click={() => unselectTask()}>
		<Fa icon={faAngleRight} size="sm" />
	</button>
	<button type="button" class="text-red" on:click={() => deleteTask(id)}>
		<Fa icon={faTrash} size="sm" />
	</button>
</footer>

<style lang="postcss">
	footer {
		@apply absolute bottom-0 w-full px-4 text-blue border-t border-blue-light flex justify-between p-2;
	}
	button {
		@apply px-2;
	}
</style>
