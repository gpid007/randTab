
document.body.style.background = '#e6e6e6';

var imageList = $('li.thumbwook').find('a.rel-link');
console.log('IMAGE LIST: ', imageList);

for (var i=0; i<imageList.length; i++) {
    if ( imageList[i].getAttribute('data-size') != null ) {
        // console.log(imageList[i].getAttribute('href'));
        window.open(imageList[i].getAttribute('href')); 
    }
}

console.log('');
