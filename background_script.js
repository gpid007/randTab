// Listener event: executed on icon click 
chrome.browserAction.onClicked.addListener(function (tab) {
console.log(tab);

        chrome.tabs.getAllInWindow(tab.windowId, function (tabs) {
        console.log(tabs);

            // Random integer formula
            var ix = Math.floor(Math.random() * tabs.length);  
            console.log(ix);
            chrome.tabs.update(tabs[ix].id, {selected: true});
            console.log('OK');

        });

});

/*  CYCLE: ternary index condition for cycling: increase to max; then reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */
