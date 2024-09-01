//function that find longest word in string
function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("Lorem ipsum dolor sit amet, consectetur adipisicing elit."));
