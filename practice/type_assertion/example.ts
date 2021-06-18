let a;
a = 10;
a = "a";
let b = a; // hint : any

let c = a as string; // type assertion c's hint : string

// DOM API

// div라고 추론하지만, div 태그가 존재하는지는 보장하지 않는다.
// 그래서 div의 값에 대한 유효성 검사를 해야만 한다.
const div = document.querySelector("div");

// 만약 존재를 단언한다면, 다음과 같이 작성한다.
// 위와 같이 null 또는 element의 union type으로 작성되는 것이 아닌 분명하게 단언하는 방식
const _div = document.querySelector("#app") as HTMLDivElement;
