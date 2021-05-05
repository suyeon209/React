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
  let [글제목, 글제목변경] = useState('남자 코트 추천'); 
  let [글제목2, 글제목변경2] = useState('남자 코트 추천2'); 

  let posts ='강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
