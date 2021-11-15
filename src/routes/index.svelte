<script lang="ts">
	import NewTask from '$lib/components/NewTask.svelte'
	import Project from '$lib/components/Project.svelte'
	import Header from '$lib/components/Header.svelte'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	import { fetchAllTasks, tasks } from '$lib/store/tasks'
	import SelectedTask from '$lib/components/SelectedTask.svelte'
	import { selectedTask } from '$lib/store/selectedTask'
	onMount(async () => {
		const tasks = await fetchAllTasks()
	})
</script>

{#if $tasks.isLoading}
	<h1>loading</h1>
{:else if $tasks.error}
	<h1>error</h1>
{:else}
	<div>
		<Header title="Inbox" />
		<section>
			<NewTask />
			<Project />
		</section>
	</div>
	{#if $selectedTask}
		<div class="selected-task" transition:fly>
			<SelectedTask />
		</div>
	{/if}
{/if}

<style lang="postcss">
	div {
		@apply w-full h-screen flex flex-col justify-start items-center;
	}
	section {
		@apply w-full h-full px-4 bg-bg flex-1 flex flex-col justify-start items-center;
	}
	.selected-task {
		@apply w-1/3 h-full;
	}
</style>
