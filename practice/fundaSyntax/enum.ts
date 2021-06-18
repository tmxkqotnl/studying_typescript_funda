// enum 객체의 출력은 enum number와 그 속성을 출력하고
// 그 뒤에 속성과 값을 출력한다.
// default 값은 enum number

enum collectA {
  shoes,
  hats,
}
console.log(collectA.hats); // 1, enum number

enum collectB {
  shoes = "Nike",
  hats = 3,
}
console.log(collectB);

// example

enum yesOrNo { // 이 상태로는 런타임 중에 수정할 수 있으므로 const를 추가하는 것을 권장
  Yes = "Y",
  No = "N",
}
function check(ans: yesOrNo) {
  if (ans === yesOrNo.Yes) {
    console.log("YES");
  }
  if (ans === yesOrNo.No) {
    console.log("NO");
  }
}
check(yesOrNo.Yes);
check("Y"); // error
check("Yes"); // error
