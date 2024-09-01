// write your func here
// function that reverse input string
function reverseString1(str) {
  return str.split('').reverse().join('');
}
//with for loop
function reverseString2(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString1("hello i am amirhossein"));
console.log(reverseString2("hello i am amirhossein"));