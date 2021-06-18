// 변수 정의
interface myForm {
  name: string;
  age: number;
  address: string;
}

let my: myForm = { name: "eastHoon", age: 100, address: "somewhere..." };

function fn(f: myForm): void {
  console.log(f);
}
const wrong = { name: "1234", age: "1234", address: 1234 };
// fn(wrong); // error

// 함수 인자/타입 정의
interface myFunc {
  (a: number, b: number): number;
}
let sum: myFunc = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱 방식 정의 (접근 방식 정의)
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"]; // 왜 빨간줄이 그어지는지 모르겠음
console.log(myArray);

// dictionary
interface dictionary {
  [key: string]: RegExp;
}
let paths: dictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(paths).forEach((elem) => {
  console.log(elem);
});

// interface extends

interface Person {
  name: string;
  age: number;
}
interface newPerson extends Person {
  language: string;
}
let eastHoon: newPerson = { name: "eastHoon", age: 100, language: "korean" };
console.log(eastHoon);
