// alias - type

/* 
  인터페이스와 타입의 preview에서의 차이
  주된 차이점은 확장(extends)의 여부
  좋은 인터페이스는 확장에 용이해야 한다. - open-closed principle
  따라서, 가급적이면 인터페이스를 사용할 것
*/

interface myInterface {
  name: string;
  age: number;
}
type myType = {
  name: string;
  age: number;
};

const byInterface: myInterface = {
  name: "eastHoon",
  age: 100,
};
const byType: myType = {
  name: "eastHoon",
  age: 100,
};

function myFuncInterface(me: myInterface) {
  console.log(me);
}
function myFuncType(me: myType) {
  console.log(me);
}
