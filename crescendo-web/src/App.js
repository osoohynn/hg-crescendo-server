import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  // 600px 이하일 때만 모바일로 간주
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div>
      {isMobile ? (
        <h1>모바일 전용 웹 애플리케이션입니다.</h1>
      ) : (
        <h2>이 애플리케이션은 모바일에서만 사용 가능합니다.</h2>
      )}
    </div>
  );
}

export default App;