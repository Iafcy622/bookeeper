<script>
	import Card from '$lib/components/Card.svelte';

	let expense = 1000;
	let income = 900;
</script>

<div class="border-b py-3 border-stone-300 dark:border-stone-600">
	<div class="px-2 py-1 flex items-center">
		<h2 class="text-5xl font-semibold mr-4">
			$ 200.00 
		</h2>
		<span class="text-xl {income - expense < 0 ? 'text-red-500' : 'text-emerald-500'}">
			( ${income - expense} )
		</span>
	</div>
	<div class="grid grid-cols-2 gap-x-4 md:block">
		<Card>
			<h3 class="text-md font-medium border-b-4 border-red-500 mb-1">Expenses</h3>
			<h4 class="text-2xl">$ {expense}</h4>
		</Card>
		<Card>
			<h3 class="text-md font-medium border-b-4 border-emerald-500 mb-1">Income</h3>
			<h4 class="text-2xl">$ {income}</h4>
		</Card>
	</div>
</div>
