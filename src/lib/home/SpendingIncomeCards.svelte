<script>
	import Card from '$lib/components/Card.svelte';

	let expenditure = 1000;
	let income = 900;
</script>

<div class="grid grid-cols-3 gap-3 md:block">
	<Card>
		<h3 class="text-md font-medium border-b-4 border-red-500">Expenditure</h3>
    	<h4 class="text-lg">${expenditure}</h4>
	</Card>
	<Card>
		<h3 class="text-md font-medium border-b-4 border-emerald-500">Income</h3>
    	<h4 class="text-lg">${income}</h4>
	</Card>
	<Card>
		<h3 class="text-md font-medium border-b-4 border-stone-500">Remaining</h3>
    	<h4 class="text-lg {income-expenditure < 0 ? 'text-red-500' : 'text-emerald-500'}">${income-expenditure}</h4>
	</Card>
</div>
