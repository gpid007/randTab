/*
document.getElementById('clickme').addListener(function (openPic) {
chrome.browserAction.onClicked.addListener(function (tab) {
*/

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


var imageList = $('li.thumbwook').find('a.rel-link');
for (var i=0; i<imageList.length; i++) {
    if ( imageList[i].getAttribute('data-size') != null ) {
        window.open(imageList[i].getAttribute('href'), '__blank');
        console.log(imageList[i].getAttribute('href'));
    }
}



var title = $('h1')[0].textContent
var imageList = $('img');
for (var i=0; i<imageList.length; i++) {
    var nameList = imageList[i].getAttributeNames()
    for (var j=0; j<nameList.length; j++) {
        console.log(i, j, imageList[i].getAttribute(nameList[j]));
    }
}

var imageList = $('li.thumbwook').find('a.rel-link');
for (var i=0; i<imageList.length; i++) {
    console.log(imageList[i].getAttribute('data-size'));
}

var imageList = $('li.thumbwook');
for (var i=0; i<imageList.length; i++) {
    console.log(i, imageList[i].getAttributeNames(), imageList[i].src);
}

var imageList = [];
$('img').each(function(){
    imageList.push($(this).attr('src'));
})
console.log(imageList);




//})