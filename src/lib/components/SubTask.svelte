<script lang="ts">
	import Fa from 'svelte-fa'
	import { faPlus } from '@fortawesome/free-solid-svg-icons'
</script>

<section>
	<Fa icon={faPlus} size="sm" />
	<input type="text" placeholder="Add a subtask" />
</section>

<style lang="postcss">
	section {
		@apply w-full p-2 flex flex-row justify-start items-center;
	}
	input {
		@apply ml-2;
	}
</style>
