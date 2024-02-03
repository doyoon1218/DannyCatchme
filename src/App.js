// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Welcome02 from './Welcome02';
import Welcome03 from './Welcome03';
import Welcome04 from './Welcome04';
import Welcome05 from './Welcome05';
import Welcome06 from './Welcome06';
import Welcome07 from './Welcome07';
import Welcome08 from './Welcome08';
import Welcome09 from './Welcome09';
import Welcome10 from './Welcome10';
import Welcome11 from './Welcome11';
import Welcome12 from './Welcome12';
import Welcome13M from './Welcome13M';
import Welcome13W from './Welcome13W';
import Welcome14 from './Welcome14';
import Welcome15 from './Welcome15';
import { GenderProvider } from './Appcomponent/GenderContext';


import './App.css';  // App 컴포넌트 전용 CSS

function Home() {
  let navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/welcome02');
  };

  const handleLogoutClick = () => {
    // 로그아웃 로직을 여기에 추가
    // 예: 사용자 세션을 종료하거나 인증 토큰을 삭제
    console.log('로그아웃 처리됨');
    // 로그아웃 후 홈 페이지로 리디렉션
    navigate('/');
  };

  return (
    <div className="app-background">
      <div className="buttons">
        <button onClick={handleRegisterClick} className="register-button">
          회원 정보 등록하기
        </button>
        <button onClick={handleLogoutClick} className="logout-button">
          LOGOUT
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <GenderProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome02" element={<Welcome02 />} />
        <Route path="/welcome03" element={<Welcome03 />} />
        <Route path="/welcome04" element={<Welcome04 />} />
        <Route path="/welcome05" element={<Welcome05 />} />
        <Route path="/welcome06" element={<Welcome06 />} />
        <Route path="/welcome07" element={<Welcome07 />} />
        <Route path="/welcome08" element={<Welcome08 />} />
        <Route path="/welcome09" element={<Welcome09 />} />
        <Route path="/welcome10" element={<Welcome10 />} />
        <Route path="/welcome11" element={<Welcome11 />} />
        <Route path="/welcome12" element={<Welcome12 />} />
        <Route path="/welcome13M" element={<Welcome13M />} />
        <Route path="/welcome13W" element={<Welcome13W />} />
        <Route path="/welcome14" element={<Welcome14 />} />
        <Route path="/welcome15" element={<Welcome15 />} />
      </Routes>
    </Router>
    </GenderProvider>
  );
}

export default App;
