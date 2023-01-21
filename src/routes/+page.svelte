<script>
    import SpendingIncomeCards from "$lib/home/SpendingIncomeCards.svelte"
    import SpendingPie from "$lib/home/SpendingPie.svelte"
	import Input from "$lib/home/Input.svelte";
</script>

<h1>Bookeeper</h1>
<section>
    <SpendingPie />
    <SpendingIncomeCards />
</section>
<Input />

<style>
    h1 {
        margin-top: 12px;
        margin-bottom: 0;
    }

    section {
        display: grid;
        height: 70vh;
		grid-template-columns: 3fr 2fr;
		grid-template-rows: 1fr;
		grid-column-gap: 16px;
		grid-row-gap: 0px;
    }


</style>