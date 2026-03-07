---
aliases:
  - "#events"
---
```dataviewjs 
const events = dv.pages('#events')
.where(p => p.date != null || p.Date != null);
let eventMap = new Map();
let eventKeyArray = new Array();
for (const e of events) {
	let array;
	if (eventMap.has(e.date.year)) {
		array = eventMap.get(e.date.year);
	} else {
		array = new Array();
		eventKeyArray.push(e.date.year)
	}
	array.push(e);
	eventMap.set(e.date.year, array);
}

eventKeyArray.sort();

for (const year of eventKeyArray) {
	dv.header(2, year);
	dv.list(
		eventMap.get(year).sort((a, b) => a.date - b.date)
		.map(e => 
			e.date.toLocaleString({ month: 'long', day: 'numeric' }) 
			+ " - " + e.file.link
		)
	);
}
```
