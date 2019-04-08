(function() {
    // Open pics
    var imageList = $('li.thumbwook').find('a.rel-link');
    for (var i=0; i<imageList.length; i++) {
        if ( imageList[i].getAttribute('data-size') != null ) {
            window.open(imageList[i].getAttribute('href'), '__blank');
            console.log(imageList[i].getAttribute('href'));
        }
    }
})();
