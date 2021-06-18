function myFunc(val: string | number) {}

myFunc("abcd");
myFunc(100);
myFunc(false); // error

/* 
  union type의 장점
  type guard를 사용하여 조건문을 통해 객체의 타입을 좁혀 나갈 수 있다.
  즉, 타입 추론이 가능해져 api를 힌트로 불러올 수 있다.
*/

function myFunc2(val: string | number | boolean) {
  if (typeof val === "string") {
    return val.startsWith("abcd");
  }
  if (typeof val === "number") {
    return val.toLocaleString();
  }
  if (typeof val === "boolean") {
    return val.valueOf();
  }

  throw new TypeError("invalid value");
}

// 컴파일러가 헷갈릴 수 있는 부분을 사전에 캐치할 수 있다.
// 반대로 그 타입들의 공통된 API를 불러올 수 있다.
interface myInterface1 {
  name: string;
  age: number;
}
interface myInterface2 {
  name: string;
  skill: string;
}
function myFunc3(val: myInterface1 | myInterface2) {
  val.name;

  // 문제가 될 수 있는 부분
  // 즉, 두 인터페이스의 공통된 부분(or)만 접근할 수 있다.
  val.age;
  val.skill;
}

// intersect type

function myFunc4(val: myInterface1 & myInterface2) {
  // 이를 위해서 val은 두 인터페이스를 모두 확장하는 인터페이스
  // 혹은 모두 구현하는 클래스가 되어야 한다.
  val.name;
  val.age;
  val.skill;
  console.log(val);
}
interface myInterface3 extends myInterface1, myInterface2 {}
class myClass implements myInterface1, myInterface2 {
  // not recommended
  name;
  age;
  skill;
}

let classTest = new myClass();
let interfaceTest: myInterface3 = {
  name: "eastHoon",
  age: 100,
  skill: "computer",
};

myFunc4(interfaceTest); // no error
myFunc4(classTest); // no error
