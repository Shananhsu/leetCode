/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const word = "abcdefd";

const ch = "d";

var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);
    console.log(index);
    let prefix = word.slice(0, index + 1);
    console.log(prefix);
    let suffix = word.slice(index + 1);
    console.log(suffix);
    let reversedPrefix = prefix.split('').reverse().join('');
    console.log(reversedPrefix);
    return reversedPrefix + suffix;
};

reversePrefix(word, ch);