/* BACKGROUND_SCRIPT */

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
            // window.open(tabs[ix].url);

            // Open pics
            var imageList = $('li.thumbwook').find('a.rel-link');
            for (var i=0; i<imageList.length; i++) {
                if ( imageList[i].getAttribute('data-size') != null ) {
                    window.open(imageList[i].getAttribute('href'), '__blank');
                    console.log(imageList[i].getAttribute('href'));
                }
            }

/*
            chrome.tabs.executeScript(tab[ix].id, {
                "file": "openPic.js"
            }, function () { 
                console.log("Script Executed .. "); 
            });
*/
        });
});

/*  CYCLE: ternary index condition for cycling: increase to max; then reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */
