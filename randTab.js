
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('LISTENER OBJECT: ', tab);

    chrome.tabs.getAllInWindow(tab.windowId, function (tabs) {
        console.log('TAB ARRAY: ', tabs);

        var ix = Math.floor(Math.random() * tabs.length);  
        console.log('RANDOM INDEX: ', ix);

        chrome.tabs.update(tabs[ix].id, {selected: true, active: true}); 
        console.log('RANDOM URL: ', tabs[ix].url);
        
        chrome.tabs.executeScript(null, {file: "jquery-3.4.0.min.js"}, function() {
            chrome.tabs.executeScript(null, {file: "inject.js"});
        });

    });

});
