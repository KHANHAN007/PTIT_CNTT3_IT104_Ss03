var sentence = "hello world apple banana orange pumpkin cucumber";
function hasUniqueChars(word) {
    var set = new Set(word);
    return set.size === word.length;
}
function longestUniqueWord(sentence) {
    var words = sentence.split(" ");
    var longest = null;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (hasUniqueChars(word)) {
            if (!longest || word.length > longest.length) {
                longest = word;
            }
        }
    }
    return longest;
}
var result = longestUniqueWord(sentence);
console.log(result);
