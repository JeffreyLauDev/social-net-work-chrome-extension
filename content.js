var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    console.log("I have seen this ")
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}