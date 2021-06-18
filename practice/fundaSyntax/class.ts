// 클래스
// 프로토타입도 조금

// class
class PersonClass {
  private name: string;
  private age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
console.log(new PersonClass("abcd", 100));

// prototype
let proto = { age: 100, skill: "computer" };
let myObj = { name: "abcd" };

myObj.__proto__ = proto;
console.log(myObj.age); // 100
console.log(myObj.skill); // computer

// prototype <=> class

function PersonPrototype(name: string, age: number) {
  this.name = name;
  this.age = age;
}
console.log(new PersonPrototype("abcd", 100));
