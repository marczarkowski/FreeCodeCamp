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
  const letters = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = Object.create({});

  letters.forEach(letter => {
    if (vowels.includes(letter)) {
      if (result.hasOwnProperty(letter)) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  });

  return result;
}
