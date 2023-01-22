import { json } from '@sveltejs/kit';
import { data } from "../../data.js";

export function GET(event) {
    let records = data.filter(record => record.date == "2023-01-21");
    
    let summary = {
        transportation: 0,
        "meal&food": 0,
        shopping: 0,
        others: 0
    };

    records.forEach(record => {
        summary[record.category] += record.amount;
    });

	return json({
		data: records,
        summary
	});
}
