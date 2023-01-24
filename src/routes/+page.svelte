<script>
    import SpendingIncomeCards from "$lib/home/SpendingIncomeCards.svelte"
    import SpendingPie from "$lib/home/SpendingPie.svelte"
	import BottomNav from "$lib/home/BottomNav.svelte";
	import DailyTable from "$lib/home/DailyTable.svelte";
    import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />
<section class="mt-14">
    <SpendingIncomeCards />
    <SpendingPie />
</section>
<DailyTable />
<BottomNav />
<!-- <Input /> -->