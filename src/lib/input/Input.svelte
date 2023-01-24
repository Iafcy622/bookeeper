<script>
	let currentDate = new Date();
	let amount = 0;
	let category;
	let date = `${currentDate.getFullYear()}-${
		currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1
	}-${currentDate.getDate()}`;
	let description = '';

	const handleSubmit = async (event) => {
		const res = await fetch(event.target.action, {
			method: event.target.method,
			body: new FormData(event.target)
		});
	};
</script>

<form action="/api/record" method="POST" on:submit|preventDefault={handleSubmit}>
	<h3>Input</h3>
	<!-- Grid -->
	<div class="grid">
		<label for="quantity"
			>Amount ($)
			<input type="number" id="amount" name="amount" bind:value={amount} min="0" />
		</label>

		<label for="category">
			Category
			<select id="category" name="category" required bind:value={category}>
				<option value="" selected disabled>Select a category…</option>
				<option value="meal&food">Meal & Food</option>
				<option value="transportation">Transportation</option>
				<option value="shopping">Shopping</option>
			</select>
		</label>
	</div>

	<label for="date"
		>Date
		<input type="date" id="date" name="date" bind:value={date} required />
	</label>

	<label for="firstname">
		Description
		<input
			type="text"
			id="description"
			name="description"
			placeholder="Description"
			bind:value={description}
		/>
	</label>

	<!-- Button -->
	<button type="submit">Submit</button>
</form>
