import { $btn as $button, $pText } from "./getDom.js";
import { clickHandler } from "./event.js";
// 두개의 모듈을 한번에 임포트할때는 중괄호없이 import해야 함
// 1. 각각 모듈을 각각 export하거나
// 2. 중광호 없이 하나의 키워드로 import 받거나
import operator from "./operator.js";

// import한 데이터를 별칭을 붙여서 사용할 시에는 동일한 이름의 변수를 선언하는 것을 피해야 함
const $btn = "123";
console.log($btn);
console.log($button);

$button.addEventListener("click", clickHandler);

// 하나의 키워드로 받아서 프로퍼티 방식으로 사용
console.log(operator.pow(3))
