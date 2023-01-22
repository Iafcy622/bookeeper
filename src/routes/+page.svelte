<script>
    import SpendingIncomeCards from "$lib/home/SpendingIncomeCards.svelte"
    import SpendingPie from "$lib/home/SpendingPie.svelte"
	import DailyTable from "../lib/home/DailyTable.svelte";
    
	import Input from "$lib/home/Input.svelte";
</script>

<h1 class="text-2xl">Bookeeper</h1>
<section class="">
    <SpendingIncomeCards />
    <SpendingPie />
</section>
<DailyTable />
<!-- <Input /> -->