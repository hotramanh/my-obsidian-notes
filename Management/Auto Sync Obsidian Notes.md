---
tags:
  - note_management
---
### For android:
1) ~~create shell scripts to~~ 
	1) ~~git pull~~ 
	2) ~~git push~~
2) EITHER
	- [termux tasker](https://github.com/termux/termux-tasker) with [some task automation app](https://play.google.com/store/apps/details?id=com.llamalab.automate) to 
		1) git pull on obsidian startup
		2) git push on obsidian close
	- ~~[termux widget](https://github.com/termux/termux-widget#Creating-And-Modifying-Scripts) to manually trigger git pull/push~~

### For Windows
1) create shell scripts to 
	1) git pull 
	2) git push
2) windows Task Scheduler to either
	1) git pull/push every 5 mins/some other auto thing
		- pros: don't have to think about it 
		- cons: might make everything else laggy
	2) some manual thing
		1) pros: decide when the process gets run (good if our vault gets huge)
		2) cons: basically more complicated ctrl s, have to have a terminal open at all times