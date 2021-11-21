<script lang="ts">
	import NewTask from '$lib/components/NewTask.svelte'
	import Project from '$lib/components/Project.svelte'
	import Header from '$lib/components/Header.svelte'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import dayjs from 'dayjs'
	import isToday from 'dayjs/plugin/isToday.js'

	import { fetchAllTasks, tasks } from '$lib/store/tasks'
	import SelectedTask from '$lib/components/SelectedTask.svelte'
	dayjs.extend(isToday)
	onMount(async () => await fetchAllTasks())
	$: mainTasks = $tasks.data.filter(({ id, content, parent_id, due }) => {
		if (due) {
			return !parent_id && due && dayjs(due.date).isToday()
		}
	})
</script>

<svelte:head><title>Today | Taco</title></svelte:head>
<div>
	<Header title="Today" />
	<section>
		<NewTask />
		{#if $tasks.isLoading}
			<h1>loading</h1>
		{:else if $tasks.error}
			<h1>error</h1>
		{:else}
			<Project tasks={mainTasks} />
		{/if}
	</section>
</div>
{#if $tasks.selected}
	<div class="selected-task" transition:fly>
		<SelectedTask />
	</div>
{/if}

<style lang="postcss">
	div {
		@apply w-full h-screen flex flex-col justify-start items-center;
	}
	section {
		@apply w-full overflow-hidden px-4 bg-bg flex-1 flex flex-col justify-start items-center;
	}
	.selected-task {
		@apply w-1/3 h-full;
	}
</style>
