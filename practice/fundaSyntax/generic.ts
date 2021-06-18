/* 
  함수 중복 선언을 줄여준다.
  union type의 장점이자 단점인 공통된 API를 불러온다는 단점,
  그리고 union type의 반환 값을 확신할 수 없다는 단점을 해결해준다.
  타입 추론이 쉬워진다.
*/

function unionTypeIs(test: string | number) {
  return test;
}
// unionTypeIs("?").split(''); // error

function logTest<T>(test: T): T {
  console.log(test);
  return test;
}

logTest<String>("Hi");

// 타입 제한 **
// generic
// 확장하는 또는 구현하는 인터페이스
// keyof

interface LengthProperty {
  length: number;
}
const texts = ["abcdefg", "1203i1oamsd", "loremasodo123"];
function logTextLength<T extends LengthProperty>(text: T[]): T[] {
  text.forEach((t) => {
    console.log(t);
  });
  return text;
}

console.log(logTextLength<string>(texts));

interface shoppingItems {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOpt<T extends keyof shoppingItems>(item: T): T {
  // 키 값으로 제한
  return item;
}
// error
getShoppingItemOpt("abc");
getShoppingItemOpt(11);
getShoppingItemOpt(false);
// only keys are available
getShoppingItemOpt("name");
getShoppingItemOpt("price");
getShoppingItemOpt("stock");
