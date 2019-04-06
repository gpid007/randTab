# randTab
Click the icon to hop to a random tab of the active browser window.  

## Normal distribution function
```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

## Ternary operator for cycling tab indices
```javascript
var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
```
