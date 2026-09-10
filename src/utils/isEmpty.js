/**
 * isEmpty
 *
 * 배열이 비었는지 검사하는 함수입니다.
 *
 * @param {Array} array 비었는지 검사할 배열
 * @returns {Boolean} 비었으면 true, 아니면 false
 */
export const isEmpty = (array) => {
  return !Array.isArray(array) || array.length === 0;
};
