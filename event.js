var el = document.getElementById("brand-title");

console.log(el);
//h1이라는 테그를 제외하고 출력
console.log(el.innerHTML);
//text만 로드함 
console.log(el.innerText);

//안에 감싸는 텍스트만 바꾸고 싶음
el.innerText="새로운 값브라우저에 로드"

//ㅓ현재 사용하려는 웹문서 클래스 값을 갖는 요소들을 가져오겠다. class여러요소에 걸쳐서 
var el = document.getElementsByClassName('sub-title');
console.log(el);

/**이벤트
 * 
 * 폼이벤트
 * - 사용자가 제출,초기화
 * 마우스 이벤트
 * - 클릭, 더블클릭, 마우스 이동
 * 키보드 이벤트
 * -keydown, keypress, keyup
 * 
 * on+이벤트타입
 */
var myfunc = function (){
    alert('addEventListner');
};

el.addEventListener("click",myfunc);