/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const arr2 = arr;
  const posArr = arr.filter((i) => i !== -1);
  const sortPosArr = posArr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      arr2[i] = 0;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 0) {
      arr2[i] = sortPosArr[count++];
    }
  }
  return arr2;
}
// console.log(sortByHeight([-1, 160, 190, 170, -1, -1, 150, 180]));

module.exports = sortByHeight;

// клонировать массив. убрать из первоначального все -1, потом сортировать его.
// У второго заменить все полож на 0.
// дальше вместо нулей ставить элементы из первого массива
