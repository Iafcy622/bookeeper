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
		height: 100%;
	}
</style>
