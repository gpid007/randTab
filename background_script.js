// Listener event: executed on icon click 
chrome.browserAction.onClicked.addListener(function (tab) {
console.log(tab);

        chrome.tabs.getAllInWindow(tab.windowId, function (tabs) {
        console.log(tabs);

            // Random integer formula for tab selection
            var ix = Math.floor(Math.random() * tabs.length);  
            console.log('Tab number', ix);

            chrome.tabs.update(tabs[ix].id, {selected: true, active: true});
            console.log(tabs[ix].url);
            window.open(tabs[ix].url);

            // Open images in new tabs -> check popup permissions
            var re0 = /.*big\.jpg/;
            var tagList = document.getElementsByTagName('a');
            console.log(tagList);
            for (var i=0; i<tagList.length; i++) {
                // Static
                if ( re0.test(tagList[i].href) ) {
                    console.log(i, tagList[i].href);
                    window.open(tagList[i].href, '_blank');
                // Dynamic
                } else if ( tagList[i].getAttributeNames().length > 4 ) {
                    console.log(i, tagList[i].getAttribute('href'));
                    window.open(tagList[i].getAttribute('href'));
                }
            }

        });

});

/*  CYCLE: ternary index condition for cycling: increase to max; then reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */
