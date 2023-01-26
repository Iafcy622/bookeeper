<script>
	import NumberInput from '../components/input/NumberInput.svelte';
	import TextInput from '../components/input/TextInput.svelte';

	let toggleInput = {
		amount: false,
		description: false,
		date: false
	}

	let expense = {
		title: '',
		category: null,
		amount: 0.00,
		date: '24/01/2023 23:03',
		account: 'Cash',
		description: 'aaaaaaaaaaaaaaaa'
	};

	const doneInput = () => {
		toggleInput.amount = false;
		toggleInput.description = false;
		toggleInput.date = false;

		console.log(expense);
	}
</script>

<section class="text-2xl">
	<input
		type="text"
		class="form-control block w-full px-3 py-2 mb-6 text-2xl font-normal bg-clip-padding border-b border-solid border-stone-200
        transition ease-in-out dark:bg-stone-900 dark:focus:bg-stone-800 dark:focus:border-stone-300 focus:outline-none"
		id="expense_title"
		placeholder="Expense title"
		bind:value={expense.title}
	/>
	<div class="mb-6">
		{#if !expense.category}
			<div class="bg-stone-900 rounded-full px-2 py-1 border-2 inline-flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-4 h-4 mr-2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				<p class="text-lg mr-2">Add category</p>
			</div>
		{:else}
			<div class="bg-red-500 rounded-full px-4 py-1 border-2 inline-flex items-center">
				<p class="text-lg">{expense.category}</p>
			</div>
		{/if}
	</div>
	<div>
		<button
			class="bg-stone-300 p-4 mb-6 dark:bg-zinc-800 w-full text-left rounded-xl"
			on:click={() => toggleInput.amount = true}
		>
			<div class="flex items-center justify-start mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
					/>
				</svg>
				<p class="text-xl font-medium ">Amount</p>
			</div>
			<p class="text-3xl dark:text-stone-300">$ {expense.amount}</p>
		</button>
		<button class="bg-stone-300 p-4 mb-6 dark:bg-zinc-800 w-full text-left rounded-xl">
			<div class="flex items-center justify-start mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
					/>
				</svg>
				<p class="text-xl font-medium">Date</p>
			</div>
			<p class="text-xl dark:text-stone-300">{expense.date}</p>
		</button>
		<button class="bg-stone-300 p-4 mb-6 dark:bg-zinc-800 w-full text-left rounded-xl">
			<div class="flex items-center justify-start mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
					/>
				</svg>
				<p class="text-xl font-medium">Pay with</p>
			</div>
			<p class="text-xl dark:text-stone-300">{expense.account}</p>
		</button>
		<button 
			class="bg-stone-300 p-4 mb-6 dark:bg-zinc-800 w-full text-left rounded-xl"
			on:click={() => toggleInput.description = true}
		>
			<div class="flex items-center justify-start mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
					/>
				</svg>
				<p class="text-xl font-medium ">Description</p>
			</div>
			<p class="text-lg dark:text-stone-300">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, suscipit.
			</p>
		</button>
	</div>
	<button class="fixed right-6 bottom-6 bg-green-400 rounded-full p-3">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
		</svg>
	</button>
</section>

<NumberInput bind:amount={expense.amount} activated={toggleInput.amount} on:closePopup={() => toggleInput.amount = false} on:done={doneInput} />
<TextInput bind:description={expense.description} activated={toggleInput.description} on:closePopup={() => toggleInput.description = false} on:done={doneInput} />