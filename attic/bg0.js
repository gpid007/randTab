// Global
var myWindowId;

// Listener event: executed on icon click 
chrome.browserAction.onClicked.addListener(function (tab) {
    myWindowId = tab.windowId;
    getTab(); 
});

// Get any tab from active window 
function getTab() {
    chrome.tabs.getSelected(myWindowId, function (currentTab) {
        chrome.tabs.getAllInWindow(currentTab.windowId, function (tabs) {
            // Random integer formula
            var ix = Math.floor(Math.random() * (tabs.length + 1));  
            chrome.tabs.update(tabs[ix].id, {selected: true});
            console.log(ix);
        });
    });
}

/*  CYCLE: ternary condition for index to increase and reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */
