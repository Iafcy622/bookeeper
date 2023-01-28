<script>
	import PopupInput from '$lib/components/input/PopupInput.svelte';

	export let activated = false;
	export let amount;

	let numberInput = '';

	const addToInput = (num) => {
		if (numberInput.length == 0 && num == '.') {
			numberInput = '0.';
		} else if ((numberInput.length >= 1 && num == '.') || num != '.') {
			numberInput += num;
		}

		console.log(numberInput);
	};

	const delFromInput = () => {
		numberInput = numberInput.slice(0, -1);
		console.log(numberInput);
	};
</script>

<PopupInput {activated} on:closePopup on:done>
	<h2 class="text-xl mb-3">Amount</h2>
	<h3 class="text-4xl text-center mb-12">$ {amount}</h3>
	<input type="number" step="0.01" name="amount" id="amount"
		class="text-4xl text-center mb-12 w-full
			dark:bg-stone-900 dark:focus:border-stone-300 focus:outline-none"
	>

	<div class="grid grid-cols-[repeat(3,56px)] gap-6 place-content-center">
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(7)}
			>7</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(8)}
			>8</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(9)}
			>9</button
		>

		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(4)}
			>4</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(5)}
			>5</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(6)}
			>6</button
		>

		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(1)}
			>1</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(2)}
			>2</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(3)}
			>3</button
		>

		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput('.')}
			>.</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={() => addToInput(0)}
			>0</button
		>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto" on:click={delFromInput}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-3/4 h-3/4 mx-auto"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
				/>
			</svg>
		</button>
		<button class="border-2 rounded-full p-2 w-14 h-14 mx-auto col-start-2 col-end-2" on:click={delFromInput}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-3/4 h-3/4 mx-auto"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
				/>
			</svg>
		</button>
	</div>
</PopupInput>
