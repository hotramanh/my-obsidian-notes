async function apiGet(e) { 
	let t = new URL(`https://nominatim.openstreetmap.org/search?q=${e}&format=json`); 
	return await fetch(t, { method: "GET", cache: "no-cache", headers: { "Content-Type": "application/json" } })
	.then((async e => await e.json())) 
} 

module.exports = async e => { 
	const 
	{ createYamlProperty: t } = e.app.plugins.plugins.metaedit.api, 
	a = await e.quickAddApi.inputPrompt("\ud83c\udfe0 Address"); 
	
	if (!a) return void new Notice("No address given", 5e3); 
	
	const n = await apiGet(a); 
	if (!n.length) return void new Notice("No results found", 5e3); 
	const { lat: i, lon: o } = n[0], c = e.app.workspace.getActiveFile(); 
	c ? await t("location", `[${i}, ${o}]`, c) : new Notice("No active file", 5e3) 
};