<script lang="ts">
	export let value: string
</script>

<form class="form">
	<input class="check" type="checkbox" />
	<input class="input" name="newTodo" bind:value disabled />
</form>

<style lang="postcss">
	.form {
		@apply container bg-white h-auto mt-2 text-lg rounded flex flex-row justify-start items-center;
	}
	.check {
		@apply w-5 h-5 mx-1 border-2 border-blue cursor-pointer flex justify-center items-center;
	}
	.input {
		@apply flex-1 text-lg p-2 rounded outline-none  cursor-pointer;
	}
</style>
