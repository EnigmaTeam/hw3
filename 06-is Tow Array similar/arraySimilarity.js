// write your func here
function compare(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

console.log(compare([1, 2, 3], [1, 2, 3]));