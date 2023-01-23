<script>
	import { Doughnut } from 'svelte-chartjs';

	const data = {
		labels: ['Lunch', 'Transportation', "Dinner", "Breakfast", "Shopping"],
		datasets: [
			{
				data: [40, 55, 50, 10, 200],
				backgroundColor: ["#ef4444", "#10b981"],
				hoverBackgroundColor: ["#f87171", "#34d399"]
			}
		]
	};

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="col-span-2 my-3">
    <Doughnut {data} options={{ responsive: true, aspectRatio: 2, plugins: { legend: { position : "right" } } }} />
</div>