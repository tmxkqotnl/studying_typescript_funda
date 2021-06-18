// 변수에 타입을 특별히 지정하지 않아도
// 변수를 초기화 혹은 선언할 때 타입 추론이 일어난다.
// 이 외에도 변수, 속성, 인자 기본값, 함수 반환값 등에 의해서 타입 추론이 일어난다.

// by return value
function myFunc(b = 10) {
  // 함수의 타입 추론
  const c = "123";
  return b + c;
}

// by generic type
interface myInterface<T> {
  value: T;
  title: string;
}

const shoppingItem: myInterface<string> = {
  value: "coffee", // 타입 추론
  title: "Kanus",
};

// more complicated case

interface myInterface2<T> {
  value: T;
  title: string;
}
interface detailedInterface<T> extends myInterface2<T> {
  description: string;
  tag: T;
}

const detail: detailedInterface<string> = {
  title: "detail info",
  description: "more info",
  value: "가나다라마바사", // 타입 추론
  tag: "한글", // 타입 추론
};
