<script>
	import PopupInput from '$lib/components/input/PopupInput.svelte';

	export let activated = false;
    export let amount;
</script>

<PopupInput {activated} on:closePopup on:done>
	<h2 class="text-xl mb-3">Amount</h2>
	<h3 class="text-4xl text-center mb-12">$ {amount}</h3>

    <div class="grid grid-cols-[repeat(3,56px)] gap-6 place-content-center">
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">7</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">8</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">9</button>

        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">4</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">5</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">6</button>

        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">1</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">2</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">3</button>

        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">.</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">0</button>
        <button class="border-2 rounded-full p-2 w-14 h-14 mx-auto">x</button>
    </div>
</PopupInput>
