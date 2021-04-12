/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1str = s1.split('').sort();
  const s2str = s2.split('').sort();
  let count = 0;
  if (s1.length === 0 || s2.length === 0) return 0;
  for (let i = 0; i < s1.length; i++) {
    for (let k = 0; k < s2.length; k++) {
      if (s1str[i] === s2str[k]) {
        s2str.splice(k, 1);
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
