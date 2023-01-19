<script>
	import Card from '$lib/components/Card.svelte';

	let spending = 1000;
	let income = 900;
</script>

<div>
	<Card title="Spending" subtitle={`$ ${spending}`} />
	<Card title="Income" subtitle={`$ ${income}`} />
	<Card title="Net gain" subtitle={`$ ${spending - income}`}/>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 16px;
		grid-row-gap: 0px;
	}
</style>
