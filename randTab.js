
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('chrome.browserAction.onClicked.addListener()', tab);

    chrome.tabs.getAllInWindow(tab.windowId, function (tabs) {
        console.log('chrome.tabs.getAllInWindow(tab.windowId)', tabs);

        var ix = Math.floor(Math.random() * tabs.length);  
        console.log('Math.floor(Math.random() * tabs.length)', ix);

        chrome.tabs.update(tabs[ix].id, {selected: true, active: true}); //, url:tabs[ix].url});          
        console.log('chrome.tabs.update(tabs[ix].id', tabs[ix].url);

        // chrome.tabs.executeScript({file: 'inject.js'});
        
        chrome.tabs.executeScript(null, {file: "jquery-3.4.0.min.js"}, function() {
            chrome.tabs.executeScript(null, {file: "inject.js"});
        });

    });

});
