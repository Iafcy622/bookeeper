<script>
	let records = [
		{
			id: 1,
			amount: -50,
			category: 'meal&food',
			date: '2023-01-22'
		},
		{
			id: 2,
			amount: -6,
			category: 'transportation',
			date: '2023-01-22'
		},
		{
			id: 3,
			amount: 300,
			category: 'Salary',
			date: '2023-01-22'
		}
	];

    let total = 244;
</script>

<div class="rounded-lg border-2 border-stone-500 my-6">
	<table class="min-w-full">
		<thead class="border-b-2 border-stone-500">
			<tr>
				<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left">
					22/01/2023 (Sun)
				</th>
				<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left {total < 0 ? 'text-red-500' : 'text-emerald-500'}">${total}</th>
			</tr>
		</thead>
		<tbody>
			{#each records as record (record.id)}
				<tr class="border-t border-stone-400">
					<td class="px-6 py-3 whitespace-nowrap text-sm font-medium"
						>{record.category}</td
					>
					<td class="px-6 py-3 whitespace-nowrap text-sm font-medium {record.amount < 0 ? 'text-red-500' : 'text-emerald-500'}"
						>${record.amount}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="rounded-lg border-2 border-stone-500 my-6">
	<table class="min-w-full">
		<thead class="border-b-2 border-stone-500">
			<tr>
				<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left">
					22/01/2023 (Sun)
				</th>
				<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left {total < 0 ? 'text-red-500' : 'text-emerald-500'}">${total}</th>
			</tr>
		</thead>
		<tbody>
			{#each records as record (record.id)}
				<tr class="border-t border-stone-400">
					<td class="px-6 py-3 whitespace-nowrap text-sm font-medium"
						>{record.category}</td
					>
					<td class="px-6 py-3 whitespace-nowrap text-sm font-medium {record.amount < 0 ? 'text-red-500' : 'text-emerald-500'}"
						>${record.amount}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
