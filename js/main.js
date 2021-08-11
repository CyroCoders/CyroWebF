scripts = document.getElementsByTagName("script");
currentLoc = (scripts[scripts.length-1].src);
currentDir = currentLoc.split("/")[0,currentLoc.split("/").length-2]

function include(file) {
    var script  = document.createElement('script');
    script.src  = currentDir + "/" + file;
    script.type = 'text/javascript';

    document.currentScript.after(script);
    document.head.appendChild(script);
}

var cardReady = document.createEvent('Event');

var navigationReady = document.createEvent('Event');

include("navigation.js");
include("gravity.js");
include("card.js");