import { json } from '@sveltejs/kit';
import { data } from '../data.js';

export async function POST(event) {
	const body = await event.request.formData();
	const newRecord = {};

	console.log(Object.fromEntries(body))

	// body.forEach(item => {
	// 	console.log(item)
	// 	newRecord[item[0]] = item[1];
	// });

	// data.push(newRecord);

	console.log(data);

	return json({
		success: true,
		data
	});
}
