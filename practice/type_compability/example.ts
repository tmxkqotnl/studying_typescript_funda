// 특정 타입이 다른 타입과 서로 호환되는지(맞는지) 를 의미한다.
// 자신을 포함한 더 많은 속성을 갖거나 구조적으로 더 클 때 호환이 된다.

// 자바스크립트는 객체 리터럴이나 익명 함수 등을 사용하기 때문에
// 명시적으로 타입을 지정하는 것보다는 코드의 구조 관점에서 타입을 지정하는 것이 더 잘 어울립니다.
// - 타입스크립트 핸드북

// **** interface & class
interface dev {
  name: string;
  skill: string;
}
interface per {
  name: string;
}
class chair {
  name: string;
}

let developer: dev;
let person: per;

// developer = person; // error
let chairman = new chair();

person = developer; // ok
chairman = person; // ok
person = new chair(); // ok

// function. 함수는 반대다. !!!!
let myFunc1 = (a: number) => {};
let myFunc2 = (a: number, b: number) => {};

myFunc2 = myFunc1; // ok
// myFunc1 = myFunc2; // error

// **** generic
interface Empty<T> {}
interface NotEmpty<T> {
  value: T;
}

let empty1: Empty<string>;
let empty2: Empty<number>;
// ok
empty1 = empty2;
empty2 = empty1;

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2; // error
// notEmpty2 = notEmpty1; // error
