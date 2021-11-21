<script lang="ts">
	import Fa from 'svelte-fa'
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'
	import { updateDue } from '$lib/store/tasks'
	import dayjs from 'dayjs'

	export let task: Task
	let datepicker: HTMLInputElement
	const handleFocus = () => {
		datepicker.type = 'date'
		datepicker.value = task.due ? task.due.date : ''
	}

	const handleBlur = async (event: Event) => {
		datepicker.type = 'text'
		const date = (<HTMLInputElement>event.target).value
		if (date) {
			await updateDue(task.id, date)
		}
	}
</script>

<section>
	<Fa icon={faCalendarAlt} size="sm" />
	<input
		value={task.due ? dayjs(task.due.date).format('DD-MM-YYYY') : ''}
		placeholder="Set Due"
		bind:this={datepicker}
		on:focus={handleFocus}
		on:blur={(e) => handleBlur(e)}
	/>
</section>

<style lang="postcss">
	section {
		@apply relative w-full p-2 flex flex-row justify-start items-center;
	}
	input {
		@apply w-full ml-2 cursor-pointer;
	}
	input::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
</style>
