<script>
    import SpendingIncomeCards from "$lib/home/SpendingIncomeCards.svelte"
    import SpendingPie from "$lib/home/SpendingPie.svelte"
	import BottomNav from "$lib/home/BottomNav.svelte";
	import DailyTable from "$lib/home/DailyTable.svelte";
</script>

<section class="">
    <SpendingIncomeCards />
    <SpendingPie />
</section>
<DailyTable />
<BottomNav />
<!-- <Input /> -->