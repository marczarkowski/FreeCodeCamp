/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const toLowerCase = char => char.toLowerCase();
  const isNotAVowel = char => !vowels.includes(char);

  return str
    .split('')
    .map(toLowerCase)
    .filter(isNotAVowel)
    .join('');
}
