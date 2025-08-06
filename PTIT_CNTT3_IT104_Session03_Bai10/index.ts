const sentence = "hello world apple banana orange pumpkin cucumber";
function hasUniqueChars(word: string): boolean {
  const set = new Set(word);
  return set.size === word.length;
}
function longestUniqueWord(sentence: string): string | null {
  const words = sentence.split(" ");
  let longest: string | null = null;
  for (const word of words) {
    if (hasUniqueChars(word)) {
      if (!longest || word.length > longest.length) {
        longest = word;
      }
    }
  }
  return longest;
}
const result = longestUniqueWord(sentence);
console.log(result); 