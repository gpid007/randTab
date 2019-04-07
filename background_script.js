// Listener event: executed on icon click 
chrome.browserAction.onClicked.addListener(function (tab) {
console.log(tab);

        chrome.tabs.getAllInWindow(tab.windowId, function (tabs) {
        console.log(tabs);

            // Random integer formula for tab selection
            var ix = Math.floor(Math.random() * tabs.length);  
            console.log(ix);

            chrome.tabs.update(tabs[ix].id, {selected: true});
            console.log(window.location.href);

            // Open all images of selected (parent) tab
            var re0 = /.*big\.jpg/;
            var tagList = document.getElementsByTagName('a');
            console.log(tagList);

            for (var i=0; i<tagList.length; i++) {
                if ( re0.test(tagList[i].href) ) {
                    console.log(i, 'OK', tagList[i].href);
                    window.open(tagList[i].href, '_blank');
                }
            }

        });

});

/*  CYCLE: ternary index condition for cycling: increase to max; then reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */
