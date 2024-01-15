import React from 'react';
import './App.css'; // App.css 파일에 스타일을 정의하세요.

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>catchme</h1>
        <p>안녕하세요! r__eve 님.</p>
      </header>
      <main className="main-content">
        <p>카치미가 처음이신가요?</p>
        <p>회원정보를 등록하고 맞춤형 이상형을 찾아보세요!</p>
        <button onClick={() => alert('회원정보 등록하기')}>회원정보 등록하기</button>
      </main>
      <footer className="footer">
        <button onClick={() => alert('로그아웃')}>LOGOUT</button>
      </footer>
    </div>
  );
}

export default App;
