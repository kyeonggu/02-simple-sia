02-simple-spa
#01. 프로젝트 생성 및 초기화
1) 프로젝트 생성
프로젝트 이름은 영어 소문자만 사용 가능함.
yarn create react-app 02-simple-spa
2) 프로젝트 생성 후 기초작업
프로젝트 초기화
대상 작업 내용
src폴더 App.css, App.test.js, index.css, logo.svg, setupTests.js, reportWebVitals.js 삭제
App.js App.css와 logo.svg에 대한 참조(import) 구문 제거
index.js
index.css와 reportWebVitals.js에 대한 참조(import) 구문 제거
맨 마지막 행에 있는 reportWebVitals() 부분 삭제
3) 추가 패키지 설치
패키지 이름 설명
react-router-dom
SPA앱을 만들 때 사용.
URL에 따라 실행할 Javascript를 분기한다.
yarn add react-router-dom
4) Router 적용
index.js
import 구문 추가
import { BrowserRouter } from 'react-router-dom';
index.js 파일에서 <React.StrictMode><App /></React.StrictMode>을 <BrowserRouter><App />
</BrowserRouter>로 변경
README.md
2 / 2
App.js
import { Link, Routes, Route } from "react-router-dom";
5) 프로젝트 실행
프로젝트를 VSCode로 열고, Ctrl + ~를 눌러 터미널 실행
yarn start
#02. Single Page Application (=SPA)
하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식.
js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다.
1) Router
분배하는 기능을 수행하는 소프트웨어나 하드웨어
대표적인 라우터로는 아이피공유기가 있다.
React의 Router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.
HTML5에서 Javascript에 추가된 기능중 history객체를 통해 URL을 변조하는 기능이 있다.
리액트의 Router는 이 기능을 활용하여 현재 페이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분
배한다.
2) SPA개발의 장점
페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다.
3) SPA개발의 단점
JS코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결가능(코드 분할 작성)
하나의 HTML이므로 SEO에 취약하다 (서버사이드 렌더링으로 해결 가능)
서버사이드 랜더링 = React + Node / React + PHP / React + Java(Spring)
