---
tags:
  - dataview_collections
---

```dataviewjs
// numDisplayed = -1 if you want to display all tasks
const renderTasks = (pages, numDisplayed) => {
	let i = 0;
	for (const p of pages) {
		if (i == numDisplayed) {
			break;
		}
		if (p.file.tasks == null || p.completed) {
			continue;
		}
		let totalStoryPoints = 0;
		let remainingStoryPoints = 0;
		for (const t of p.file.tasks) {
			totalStoryPoints += (t.storyPoints ?? t.story_points ?? 0)
			remainingStoryPoints += (!t.completed ? (t.storyPoints ?? 0) : 0);
			remainingStoryPoints += (!t.completed ? (t.story_points ?? 0) : 0);
		}
		let header = `[[${p.file.path}|${p.file.name}]] (${remainingStoryPoints})`;
		if (p.important) {
			header = `‼️` + header;
		}
		if (p.urgent) {
			header = `⏲️` + header;
		}
		dv.header(3, header);
		if (p.due_date != null && p.due_date != "") {
			dv.paragraph(`> ⚠️ Due ${p.due_date.toLocaleString()}`);
		}
		
		dv.taskList(p.file.tasks.where(t => !t.completed), false);
		i++;
	}
}

const printTasks = taskList => {
	for (const t of taskPages) {
		console.log(`urgent: ${t.urgent}, important: ${t.important}, ${t.file.name}`);
	}
}

const taskComparator = (a, b) => {
	let aScore = (2 * (a.urgent ?? 0) + (a.important ?? 0));
	let bScore = (2 * (b.urgent ?? 0) + (b.important ?? 0));
	if (aScore != bScore) {
		aScore - bScore;
	} else {
		
	}
	return aScore - bScore;
}

const taskPages = dv.pages('"Tasks" and #todo and -"Tasks/Archived"').values;
taskPages.sort(taskComparator).reverse();
renderTasks(taskPages, 5);
```
