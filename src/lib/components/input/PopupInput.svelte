<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let activated = false;

	const close = () => {
		dispatch('closePopup');
	};

	const done = () => {
		dispatch('done');
	};
</script>

<button
	class="fixed top-0 right-0 w-screen h-screen z-10 bg-stone-500 opacity-40 blur-sm transition-all
    {activated ? 'block' : 'hidden'}"
	on:click={close}
/>
<section
	class="w-full fixed bottom-0 right-0 rounded-t-2xl border-x-2 border-t-2 py-4 px-6 z-20 h-2/3
    dark:bg-stone-900 border-stone-500
    transition-all {activated ? '' : 'translate-y-full'}"
>
	<div>
		<h2>Amount</h2>
		<h3>$ 0.00</h3>
	</div>
	<div class="fixed bottom-0 left-0 w-full flex justify-between py-4 px-6">
		<button class="p-2 border-2 rounded-full border-stone-500 bg-stone-900 z-20" on:click={close}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="text-stone-300 w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		<button
			class="p-2 border-2 z-20 border-stone-500 rounded-full bg-emerald-500 flex items-center"
            on:click={done}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="inline text-stone-300 w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
			</svg>
			<span class="px-1">Done</span>
		</button>
		<div class="w-full h-[2px] bg-stone-500 absolute left-0 bottom-9 z-10" />
	</div>
</section>
