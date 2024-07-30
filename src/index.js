module.exports = function reverse (n) {
    let temp = n.toString().replace('-', '');
    let result = '';
    for (let i = 1; i <= temp.length; i++) {
        result += temp[temp.length-i];
    }
    return +result;
}