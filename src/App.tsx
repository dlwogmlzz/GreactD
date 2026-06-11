// import React from 'react'
// 라우터 임포트
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 페이지 컴포넌트
import MainPage from '@pages/index'
import AboutPage from '@pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /는 기본 베이스 URL, 여기서는 「http://localhost:5173/」 */}
        {/* index path, URL설정.. / element - 어떤 페이지의 컴포넌트를 띄울것인가 지정함. */}
        {/* 엘리멘트( {} )안에 그냥 변수를 넣는 것이 아니라, 컴포넌트형식( <> )으로 넣어줘야 한다. */}
        <Route index path="/" element={ <MainPage /> }></Route>
        <Route index path="/about" element={ <AboutPage /> }></Route>
        {/* about 페이지의 구조는 따르되, 파라미터에 따라 내용물을 달리 보이게 하기 위해서는 */}
        <Route index path="/about/:id" element={ <AboutPage /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App