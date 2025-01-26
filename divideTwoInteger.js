var divide = function(div, d) {
    if (div === -2147483648 && d === -1) return 2147483647;
    let res = div/d;
    if(res <0){
        if(div % d == 0) return Math.floor(res);
        return Math.floor(res)+1;
    }
    return Math.floor(res)
};