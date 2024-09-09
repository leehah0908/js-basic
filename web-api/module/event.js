import { $pText } from "./getDom.js";

// 이벤트 헨들러 함수
// export는 객체의 이름을 고정해서 내보냄
export const clickHandler = (e) => {
    alert("버튼 클릭됨");
    $pText.textContent = "모듈 사용법 실습";
};

// 내보낼 데이터가 1개라면 default를 쓸 수 있음
// default는 임의로 내가 이름을 변경해서 사용할 수 있음
// export default clickHandler;
