<script>
	import InputExpense from "$lib/input/InputExpense.svelte";
	import InputIncome from "$lib/input/InputIncome.svelte";
	import InputTransfer from "$lib/input/InputTransfer.svelte";

	let activated = 0;

	const handleSwitchType = (val) => {
		activated = val;
	};
</script>

<nav class="bg-stone-100 dark:bg-stone-900 py-3 fixed top-0 inset-x-0 px-6">
	<a href="/" class="p-1 rounded-full">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="inline text-stone-300 w-8 h-8"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</a>
</nav>

<section class="mt-16 mb-6">
	<div class="grid grid-cols-3 rounded-lg border text-lg">
		<button
			class="border-r rounded-l-lg py-2 {activated == 0 ? 'bg-stone-600' : ''}"
			on:click={() => handleSwitchType(0)}>Expense</button
		>
		<button
			class="border-r py-2 {activated == 1 ? 'bg-stone-600' : ''}"
			on:click={() => handleSwitchType(1)}>Income</button
		>
		<button
			class="rounded-r-lg py-2 {activated == 2 ? 'bg-stone-600' : ''}"
			on:click={() => handleSwitchType(2)}>Transfer</button
		>
	</div>
</section>

{#if activated == 0}
    <InputExpense />
{:else if activated == 1}
    <InputIncome />
{:else if activated == 2}
    <InputTransfer />
{/if}