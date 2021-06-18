// @ts-check

/**
 *
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @returns
 */
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
sum(10, "10"); // 타입 스크립트 효과 주기(@ts-check)
