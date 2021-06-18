function sum(a: number, b: number) {
  return a + b;
}

// 에러 사전 방지
// console.log(sum(10, "20")); // 컴파일 전에 타입을 검사해준다.

// 자동완성기능의 활용
console.log(sum(10, 20));
const result = sum(5, 10);
result; // 값이 number라고 표시된다.
console.log(result.toLocaleString()); // Number에서 제공하는 API를 사용할 수 있다.
