window.addEventListener('mousemove', (e) => {
    x = e.pageX - window.scrollX;
    y = e.pageY - window.scrollY;
    //console.log({x,y})
    targets = document.getElementsByClassName("card followMouse");
    for(i = 0; i < targets.length; i++) {
        targetLocation = targets[i].getBoundingClientRect();
        sensitivity = parseInt(targets[i].style.getPropertyValue("--sensitivity") || 5);
        x1 = targetLocation.left;
        x2 = targetLocation.right;
        y1 = targetLocation.top;
        y2 = targetLocation.bottom;

        targetWidth = x2 - x1;
        targetHeight = y2 - y1;

        if(((x1 < x) && (x < x2)) && ((y1 < y) && (y < y2))) {
            tilt(targets[i],{x,y});
        }else {
            reset(targets[i])
        }
    }
});

tilt = (target,focus) => {
    targetLocation = target.getBoundingClientRect()
    x1 = targetLocation.left;
    x2 = targetLocation.right;
    y1 = targetLocation.top;
    y2 = targetLocation.bottom;

    targetWidth = x2 - x1;
    targetHeight = y2 - y1;
    rotX = rangeMap(focus.y -y1, 0, targetWidth, -sensitivity, sensitivity);
    rotY = rangeMap(focus.x -x1, 0, targetHeight, sensitivity, -sensitivity);
    //console.log({X: focus.x -x1, Y: focus.y -y1});
    //console.log({rotX, rotY});
    target.style.transform = "rotate3d(1,0,0," + rotX + "deg) rotate3d(0,1,0," + rotY + "deg)";
}

reset = (target) => {
    target.style.transform = null; 
}

rangeMap = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}