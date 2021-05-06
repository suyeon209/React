/* eslint-disable */
// 문법적 warging 보기 싫을때 위와같이 씀
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  // ES6 destructuring 문법
  // array, object에 있던 자료를 변수에 쉽게 답고 싶을 때
  // var [a,b] = [10, 100];

  // state?
  // 1. 변수 대신 쓰는 데이터 저장공간
  // 2. useState()를 이용해 만들어야함
  // 3. 문자, 숫자, array, object 다 저장가능
  // state에 데이터 저장해놓는 이유? 
  // 1. 웹이 App처럼 동작하게 만들고 싶어서
  // 2. state는 변경되면 HTML이 자동으로 재렌더링됨(HTML이 새로고침 없이도 스무스하게 변경됨)
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); 
  let [따봉, 따봉변경] = useState(0);
  let posts ='강남 고기 맛집';
  function 제목바꾸기() {
    var newArray = [...글제목]; //reference 참조, deep copy 
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  /* 
    - Component 관습 
    1. 이름을 대문자로 시작한다. 
    2. 소괄호()안에 HTML을 넣어주면됨. div가 여러개 사용하고싶으면 큰div로 묶은뒤 그 안에서 사용
    3. fragment 문법<></>을 div대신 사용할 수 있음 
    4. function App()과 나란히 만들면됨, function App()도 하나의 Component임 

    - Component로 만들면 좋은것들 
    1. 반복출현하는 HTML덩어리들 
    2. 자주변경되는 HTML UI들 
    3. 다른 페이지 만들때 

    - Component사용시 단점
    state사용할 때 복잡해짐. function App()안에 있는 변수를 해당 function Modal()안에서 사용하려할때 복잡.

  */
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}





export default App;
