// write your func here
// function that reverse input string
function reverseString1(str) {
    return str.split('').reverse().join('');
}
// function that checks if string is palindrome
function isPalindrome(str) {
    return str === reverseString1(str);
}

console.log(isPalindrome("racecar"));
