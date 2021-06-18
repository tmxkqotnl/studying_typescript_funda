// 타입은 일반적으로 몇 개의 표현식을 가지고 가장 근접한 타입을 추론한다.
// 이 근접한 타입을 best common type 이라고 한다.
// 타입 체크는 값의 형태에 기반하여 이루어져야 한다.
// 이를 Duck Typing 또는 Structural Subtyping 이라고 한다.

const inf = [1, 2, true]; // number | boolean
const infer = [1, 2, null]; // number

// 추가내용 "문맥상 타이핑"
