// 기본적인 ts 함수 선언 방식

// 반환 값, 파라미터 타입,
// 그리고 파라미터 수를 정확하게 제한하거나 선택적으로 지정할 수 있다.

function temp(a: number, b: number) {
  return a + b;
}
function temp2(a, b): number {
  return a + b;
}
function temp3(a: number, b: number): number {
  return a + b;
}
function temp4(a: string, b?: string): string {
  return a + b;
}

temp4("abcd");
temp4("abcd", "efgh"); // 허용
