boxAlignAttributes = ["top","bottom","left","right","verticalCenter","horizontalCenter"]

Array.prototype.forEach.call(document.getElementsByClassName("box"),(box)=>{
    box.getAttribute("boxAlign").split(" ").forEach((attr) =>{
        if(.includes(attr))
        box.className = box.className + " " + attr;
    });
    
    if(box.hasAttribute("hAlign")) console.log(box.className = box.className + " " + camelCase("horizontal " + box.getAttribute("hAlign")));
    if(box.hasAttribute("vAlign")) console.log(box.className = box.className + " " + camelCase("vertical " + box.getAttribute("vAlign")));
});

function camelCase(str) {
    out = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    console.log({str, out});
    return out;
}
