interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}

function myFunc(): Person | Developer {
  return { name: "eastHoon", age: 100, skill: "typescript" };
}

const my = myFunc();
// console.log(my.skills); // error

// 타입의 범위를 더 줄여나가는(구체화하는) 방식
// 단, 코드의 가독성이 줄어들므로 권장하지 않는다.
if ((my as Developer).skill) {
  console.log((my as Developer).skill);
}

// type guard
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
function isPerson(target: Developer | Person): target is Person {
  return (target as Person).age !== undefined;
}

// type guard 적용
if (isDeveloper(my)) {
  console.log(my.skill); // no error
} else {
  // if not developer
  console.log(my.age);
}
