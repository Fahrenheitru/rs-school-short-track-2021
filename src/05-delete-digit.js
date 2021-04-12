/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const str = Array.from(String(n), Number);
  let copyStr = str.join('');
  const sortArr = str.sort((a, b) => a - b);
  copyStr = copyStr.replace(sortArr[0], '');
  return Number(copyStr);
}

module.exports = deleteDigit;
