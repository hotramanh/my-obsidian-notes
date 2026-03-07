---
tags:
  - hobbies/games
---

```javascript
var autoHunt = setInterval(() => {
    var catpower = gamePage.resPool.get('manpower');
    if (catpower.value > 1500) {
     	document.getElementById('fastHuntContainer').children[0].click();
        gamePage.craftAll('parchment');
        gamePage.craftAll('manuscript');
        gamePage.craftAll('compedium');
        gamePage.craftAll('blueprint');
    }
}, ((1 * 60) + 37) * 1000);
```

```javascript
var automationGrindset = setInterval(() => {
    gamePage.craftAll('beam');
    gamePage.craftAll('slab');
	gamePage.craftAll('steel');
	gamePage.craftAll('plate');
}, 40 * 60 * 1000);
```

```javascript
var STEEL = setInterval(() => {
	gamePage.craftAll('steel');
}, 5 * 60 * 1000);
```

```js
var autoPraise = setInterval(() => {
    var faith = gamePage.resPool.get('faith');
    document.getElementById('fastPraiseContainer').children[0].click();
}, ((10 * 60) + 0) * 1000);
```

```javascript
var autoObserve = setInterval(() => {
    var observeButtonDiv = document.getElementById("observeButton");
    if (observeButtonDiv.children.length == 1) { observeButtonDiv.children[0].click(); }
}, 10 * 1000);
```

```javascript
game.detailedPollutionInfo=true;
```
