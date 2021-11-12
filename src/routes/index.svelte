<script lang="ts">
	import NewTask from '$lib/components/NewTask.svelte'
	import Project from '$lib/components/Project.svelte'
	import Header from '$lib/components/Header.svelte'
	import { onMount } from 'svelte'
	import { fetchAllTasks } from '$lib/store/tasks'
	import SelectedTask from '$lib/components/SelectedTask.svelte'
	import { selectedTask } from '$lib/store/selectedTask'
	onMount(async () => {
		await fetchAllTasks()
	})
</script>

<section>
	<Header title="Inbox" />
	<NewTask />
	<Project />
</section>
{#if $selectedTask}
	<SelectedTask task={$selectedTask} />
{/if}

<style lang="postcss">
	section {
		@apply px-1 bg-blue-light flex-1 flex flex-col justify-start items-center;
	}
</style>
