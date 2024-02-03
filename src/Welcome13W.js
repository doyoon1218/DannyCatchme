import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome02.css'; // CSS 파일을 임포트하세요
import './Welcome.css';
import styled from "styled-components"
import SplitMessage from './Appcomponent/SplitMessage';


const BackgroundImage = styled.div `
background-image: url(${process.env.PUBLIC_URL}/img/Background.png); /* public 폴더에 있는 이미지 경로 */
background-size: contain;
background-repeat: no-repeat;
background-color: #EDADC8;
background-position: center top; /* 수평 중앙, 수직 상단에 위치 */
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left:0;
z-index: -1;
` 

  function Welcome13W() {
    const [message, setMessage] = useState('');
const fullMessage1 = "이성의 키가 어느정도면 좋겠어?";
const typingSpeed = 75;

useEffect(() => {
    if (message.length < fullMessage1.length) {
      setTimeout(() => {
        setMessage (fullMessage1.slice(0, Math.min(message.length + 1, fullMessage1.length)))
      }, typingSpeed);
    }
  }, [message, fullMessage1]);

  const navigate = useNavigate();

  const [currentText, setCurrentText] = useState('...'); // 현재 화면에 보여지는 텍스트
  const [typingText, setTypingText] = useState(''); // 타이핑될 전체 텍스트
  const [typing, setTyping] = useState(false); // 타이핑 상태

  useEffect(() => {
    if (typing) {
      if (currentText !== typingText) {
        const timer = setTimeout(() => {
          setCurrentText(typingText.slice(0, currentText.length + 1));
        }, 75); // 타이핑 속도 조절
        return () => clearTimeout(timer);
      } else {
        setTyping(false); // 타이핑이 끝났을 때 상태 업데이트
      }
    }
  }, [currentText, typingText, typing]);

  const handleButtonClick = (text) => {
    setTypingText(text); // 타이핑될 전체 텍스트 설정
    setCurrentText(''); // 현재 텍스트 초기화
    setTyping(true); // 타이핑 시작
  };
  

  const handlePreviousClick = () => {
    // "이전" 버튼 로직
    navigate(-1);
  };

  const handleNextClick = () => {
    // "다음" 버튼 클릭 시에 실행될 로직
    navigate('/welcome14'); // '/welcome10' 경로로 이동
  };


  return (
    <div className="home">
      <BackgroundImage />
      <div className="header"></div>
      <div className="header1">
        <p>선호하는 이성의 키를 선택해주세요!</p>
      </div>
      <SplitMessage message={message} splitIndex={fullMessage1.length} />
      <div className="typing-container">
      <div className="message typing">
        <span>{currentText}</span>
      </div>
      </div>
      <div className="Physical-buttons">
        <button onClick={() => handleButtonClick('170~175')} className="button">170~175</button>
        <button onClick={() => handleButtonClick('175~180')} className="button">175~180</button>
        <div className="Physical-buttons-bottom">
        <button onClick={() => handleButtonClick('180~185')} className="button">180~185</button>
        <button onClick={() => handleButtonClick('185~190')} className="button">185~190</button>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handlePreviousClick} className="previous-button">이전</button>
        <button onClick={handleNextClick} className="next-button">다음</button>
      </div>
    </div>
    
  );
}

export default Welcome13W ;