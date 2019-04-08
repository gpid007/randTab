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

        
            //chrome.tabs.executeScript(tabs[ix].id, {file: "inject.js"}, function(){
                chrome.tabs.executeScript(tabs[ix].id, {file: "inject.js"});
            //});
            console.log("script injected");

        });
});

/*
You have only included jQuery on your background page. You should be injecting jQuery onto the tab you're executing script.js on.

Here is an example that loads jquery.js first, then in a callback loads script.js:

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        chrome.tabs.executeScript(tabId, {file: "jquery.js"}, function(){
            chrome.tabs.executeScript(tabId, {file: "script.js"});
        });
    }
});

*/

/*            // Open pics
            var imageList = $('li.thumbwook').find('a.rel-link');
            for (var i=0; i<imageList.length; i++) {
                if ( imageList[i].getAttribute('data-size') != null ) {
                    window.open(imageList[i].getAttribute('href'), '__blank');
                    console.log(imageList[i].getAttribute('href'));
                }
            }


            chrome.tabs.executeScript(tab[ix].id, {
                "file": "openPic.js"
            }, function () { 
                console.log("Script Executed .. "); 
            });
*/

/*  CYCLE: ternary index condition for cycling: increase to max; then reset 
 *      var ix = (currentTab.index+1 < tabs.length) ? currentTab.index+1 : 0;
 */


/*
https://stackoverflow.com/questions/16302593/get-the-current-tab-in-jquery-ui-tabs
According to manual http://api.jqueryui.com/tabs/ getter of active JqueryUI tab is

var active = $( ".selector" ).tabs( "option", "active" );
*Replace ".selector" by your one.

Then active.attr( 'id' ) will return exactly what you need.
*/