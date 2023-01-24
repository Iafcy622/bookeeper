<script>
	import Card from '$lib/components/Card.svelte';
</script>

<section class="text-2xl">
	<h2 class="mb-6">Expense title</h2>
	<div class="mb-6">
		<div class="bg-stone-900 rounded-full px-4 py-2 border-2 inline-flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<p class="text-xl">Add category</p>
		</div>
	</div>
	<div>
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
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
					/>
				</svg>
				<p class="text-xl font-medium ">Amount</p>
			</div>
			<p class="text-3xl dark:text-stone-300">
				$ 500.00
			</p>
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
			<p class="text-lg dark:text-stone-300">24/01/2023 23:03</p>
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
			<p class="text-lg dark:text-stone-300">Cash</p>
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
</section>
