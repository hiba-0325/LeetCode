var isPalindrome = function(x) {
    const rev = `${x}`.split('').reverse().join('');
    return `${x}` === rev;
};