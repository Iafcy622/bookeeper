<script>
	import { Pie } from 'svelte-chartjs';

	const data = {
		labels: ['Transportation', 'Meal & Food', 'Shopping', 'Grey', 'Dark Grey'],
		datasets: [
			{
				data: [30, 150, 100, 40, 120],
				backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'],
				hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#DA92DB']
			}
		]
	};

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div>
    <Pie {data} options={{ responsive: true, plugins: { legend: { position : "right" } } }} />
</div>

<style>
    div {
        height: 70vh;
    }
</style>