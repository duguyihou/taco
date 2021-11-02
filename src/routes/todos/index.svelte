<script context="module" lang="ts">
	import { enhance } from '$lib/form'
	import type { Load } from '@sveltejs/kit'

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json')

		if (res.ok) {
			const todos = await res.json()

			return {
				props: { todos }
			}
		}

		const { message } = await res.json()

		return {
			error: new Error(message)
		}
	}
</script>

<script lang="ts">
	import { scale } from 'svelte/transition'
	import { flip } from 'svelte/animate'

	type Todo = {
		uid: string
		created_at: Date
		text: string
		done: boolean
		pending_delete: boolean
	}

	export let todos: Todo[]

	async function patch(res: Response) {
		const todo = await res.json()

		todos = todos.map((t) => {
			if (t.uid === todo.uid) return todo
			return t
		})
	}
</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<div class="container flex flex-col justify-start items-center">
	<form
		class="w-full m-2"
		action="/todos.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				const created = await res.json()
				todos = [...todos, created]

				form.reset()
			}
		}}
	>
		<input
			class="w-full border-2 focus:shadow-lg outline-none text-3xl px-4 py-2 rounded-lg text-left"
			name="text"
			aria-label="Add todo"
			placeholder="+ tap to add a todo"
		/>
	</form>
	{#each todos as todo (todo.uid)}
		<div
			class="w-full grid grid-cols-todo gap-2 items-center border-2 outline-none px-4  m-2 bg-white rounded-lg backdrop-filter -translate-x-1 translate-y-1"
			class:done={todo.done}
			transition:scale|local={{ start: 0.7 }}
			animate:flip={{ duration: 200 }}
		>
			<form
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					pending: (data) => {
						todo.done = !!data.get('done')
					},
					result: patch
				}}
			>
				<input
					class="flex-1 px-2 py-4 rounded-sm"
					type="hidden"
					name="done"
					value={todo.done ? '' : 'true'}
				/>
				<button
					class="w-8 h-8 border-0 bg-opacity-100 bg-no-repeat bg-center toggle"
					aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"
				/>
			</form>

			<form
				class="text"
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					result: patch
				}}
			>
				<input
					class="w-full outline-none text-3xl px-4 py-2 rounded-lg text-left"
					aria-label="Edit todo"
					type="text"
					name="text"
					value={todo.text}
				/>
				<button class="save" aria-label="Save todo" />
			</form>

			<form
				action="/todos/{todo.uid}.json?_method=delete"
				method="post"
				use:enhance={{
					pending: () => (todo.pending_delete = true),
					result: () => {
						todos = todos.filter((t) => t.uid !== todo.uid)
					}
				}}
			>
				<button class="delete" aria-label="Delete todo" disabled={todo.pending_delete} />
			</form>
		</div>
	{/each}
</div>

<style>
	.done {
		transform: none;
		opacity: 0.4;
		filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
	}

	form.text {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
	}

	button.toggle {
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		box-sizing: border-box;
		background-size: 1em auto;
	}

	.done .toggle {
		background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
	}
</style>
