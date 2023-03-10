export let data = [
	{
		amount: 50,
		category: "meal&food",
		date: "2023-01-21"
	},
	{
		amount: 10,
		category: "transportation",
		date: "2023-01-21"
	},
	{
		amount: 35,
		category: "meal&food",
		date: "2023-01-21"
	},
    {
		amount: 10,
		category: "transportation",
		date: "2023-01-21"
	},
    {
		amount: 15,
		category: "meal&food",
		date: "2023-01-22"
	},
    {
		amount: 6,
		category: "transportation",
		date: "2023-01-22"
	},
];

/*

record -> amount, description, category, title, account, date, UID, id
acc -> name, amount, id
user -> id, categories

/record/ -> all

/record/daily -> all, separated by day
/record/daily/(date) -> record of that date

/record/monthly -> all, separated by month
/record/monthly/(mm_yyyy) -> records of that month

/record/yearly -> all, separated by year
/record/yearly/(year) -> records of that year

*/