---
tags:
  - note_management
---
# Notes With No Tags
We have `$= dv.pages('"Misc"').filter(p => (p.tags == null)).length` notes under `Misc/` with no tags.

```dataview
LIST 
FROM "Misc"
Where length(file.tags) = 0
```

# Tags Used by Only 1 Note
```dataviewjs
const pages = dv.pages();
let tagMap = new Map();

for (const p of pages) {
	if (p.tags == null) {
		continue;
	}
	for (const t of p.tags) {
		if (!tagMap.has('#' + t)) {
			tagMap.set('#' + t, p.file.link);
		} else {
			tagMap.set('#' + t, -1);
		}
	}
	
}

dv.table(["Tag", "Page"], [...tagMap].filter(([k, v]) => v != -1).sort())
```

# All Tags
```dataview
TABLE WITHOUT ID tag As Tag, length(rows.file.link) as Count
WHERE file.tags
FLATTEN file.tags AS tag
GROUP BY tag
SORT Count DESC
```
