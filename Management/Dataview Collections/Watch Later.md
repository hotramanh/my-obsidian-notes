---
tags:
  - dataview_collections
---
```dataviewjs
dv.header(1, "Bored?")
dv.header(2, "Random Video from Watch Later")
dv.table(["Video", "Details"], dv.pages('"📺 Watch Later"')
	.where(v => !v.Watched)
	.sort(() => Math.random() - 0.5) .limit(1)
	.map(p => [
		`<a href ="${p.Link}"><img src="${p.Thumbnail}" height="240px" width="427px"/></a>`, 
		"[[" + p.file.path + "|" + p.Title + "]]" + " - " + p.Channel]));
```
