scripts = document.getElementsByTagName("script");
currentLoc = (scripts[scripts.length-1].src);
currentDir = currentLoc.split("/")[0,currentLoc.split("/").length-2]

function include(file) {
    var script  = document.createElement('script');
    script.src  = currentDir + "/" + file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body')[0].appendChild(script);
}
include("gravity.js");
include("card.js");