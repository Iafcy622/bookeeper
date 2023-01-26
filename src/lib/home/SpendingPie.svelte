<script>
	import { Doughnut } from 'svelte-chartjs';

	const data = {
		labels: ['Expenditure', 'Income'],
		datasets: [
			{
				data: [300, 150],
				backgroundColor: ['#ef4444', '#10b981'],
				hoverBackgroundColor: ['#f87171', '#34d399']
			}
		]
	};

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<!-- <div class="col-span-2 my-3 py-3"> -->
	<Doughnut
		{data}
		options={{
			responsive: true,
			aspectRatio: 2,
			plugins: {
				legend: { position: 'right', labels: { color: '#f5f5f4', padding: 15, font: { size: 14 } } }
			}
		}}
	/>
<!-- </div> -->
