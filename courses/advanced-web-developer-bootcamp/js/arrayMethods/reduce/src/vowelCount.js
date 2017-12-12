/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  const lowerCase = letter => letter.toLowerCase();
  const letters = str
    .split('')
    .map(lowerCase);

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const count = (acc, next) => {
    if (vowels.includes(next)) {
      acc[next] = acc[next] ? acc[next] + 1 : 1;
    }
    return acc;
  };

  return letters.reduce(count, {});
}

console.log(vowelCount('Elie')); // {e:2,i:1};
