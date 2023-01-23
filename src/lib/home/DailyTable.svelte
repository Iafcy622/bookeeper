<script>
	import Card from '$lib/components/Card.svelte';

	let records = [
		{
			id: 1,
			amount: -50,
			category: 'Food',
			title: 'Lunch',
			date: '2023-01-22',
			account: 'Cash'
		},
		{
			id: 2,
			amount: -6,
			category: 'Transportation',
			title: 'MTR',
			date: '2023-01-22',
			account: 'Octupus'
		},
		{
			id: 3,
			amount: 300,
			category: 'Salary',
			title: 'ICT Tutorial',
			date: '2023-01-22',
			account: 'SC Bank'
		}
	];

	let total = 244;
</script>

<section class="mb-24">
	<div class="mb-6">
		<div class="flex justify-between mb-3 mx-1">
			<h3 class="text-xl">2023/01/22</h3>
			<p class="text-xl font-medium {total < 0 ? 'text-red-400' : 'text-emerald-400'}">$ {total}</p>
		</div>
		{#each records as record (record.id)}
			<Card classes={'bg-stone-300 p-4 mb-4 dark:bg-zinc-800'}>
				<div class="mb-3">
					<div class="bg-green-600 rounded-full px-4 py-1 inline-block mr-1">{record.category}</div>
					<div class="bg-stone-900 rounded-full px-4 py-1 inline-block">{record.account}</div>
				</div>
				<h3 class="text-2xl mb-3 mx-2">{record.title}</h3>
				<p class="flex items-center mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
						class="inline p-2 w-9 h-9 rounded-full text-stone-300 {record.amount < 0
							? 'bg-red-500'
							: 'bg-emerald-500'}"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
						/>
					</svg>
					<span
						class="mx-3 text-2xl font-medium {record.amount < 0
							? 'text-red-400'
							: 'text-emerald-400'}">$ {record.amount}</span
					>
				</p>
			</Card>
		{/each}
	</div>
	<div class="mb-3">
		<div class="flex justify-between mb-3 mx-1">
			<h3 class="text-xl">2023/01/22</h3>
			<p class="text-xl {total < 0 ? 'text-red-400' : 'text-emerald-400'}">$ {total}</p>
		</div>
		{#each records as record (record.id)}
			<Card classes={'bg-stone-300 p-4 mb-4 dark:bg-zinc-800'}>
				<div class="mb-3">
					<div class="bg-green-600 rounded-full px-4 py-1 inline-block mr-1">{record.category}</div>
					<div class="bg-stone-900 rounded-full px-4 py-1 inline-block">{record.account}</div>
				</div>
				<h3 class="text-2xl mb-3 mx-2">{record.title}</h3>
				<p class="flex items-center mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
						class="inline p-2 w-9 h-9 rounded-full text-stone-300 {record.amount < 0
							? 'bg-red-500'
							: 'bg-emerald-500'}"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
						/>
					</svg>
					<span
						class="mx-3 text-2xl font-medium {record.amount < 0
							? 'text-red-400'
							: 'text-emerald-400'}">$ {record.amount}</span
					>
				</p>
			</Card>
		{/each}
	</div>
</section>
