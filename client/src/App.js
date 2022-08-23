import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

export default function App () {
  // 마지막 * 경로는 잘못된 경로 모든 메인페이지로 돌리는 라우팅 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/MyPage" element={<MyPage />} />

        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>

  );

}
