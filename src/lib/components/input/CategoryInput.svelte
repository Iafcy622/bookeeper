<script>
	import PopupInput from '$lib/components/input/PopupInput.svelte';

    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let activated = false;
	export let category;

	let categories = ['Food & Drinks', 'Bills & Fees', 'Trnasportation', 'Entertainment', 'Shopping'];

    const choose = (cat) => {
        category = cat;
        dispatch("done");
    }
</script>

<PopupInput {activated} on:closePopup on:done>
	<h2 class="text-xl mb-6">Category</h2>
	{#each categories as cat (cat)}
		<button
			class="bg-stone-900 rounded-full px-2 py-1 border-2 inline-flex items-center mr-4 mb-4
            {cat == category ? 'bg-stone-600' : ''}"
            on:click={() => choose(cat)}
		>
			<p class="text-lg mx-2">{cat}</p>
		</button>
	{/each}
</PopupInput>
