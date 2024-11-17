var mySqrt = function(x) {
    if (x === 0) { return 0 }
    else if (x === 1) { return 1 }

    let y = 1;
    let max = Math.floor(x/2);
    while(y <= max) {
        if(y*y === x) {
            return y;
        } else if(y*y > x && (y-1)*(y-1) < x) {
            return y-1;
        }
        y++;
    }
    return y-1;
};