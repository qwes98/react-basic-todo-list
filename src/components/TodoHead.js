import React from 'react';
import './TodoHead.css';

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  const leftTaskCount = 2;

  return (
    <div className="head-wrapper">
      <h1 className="head-title">{dateString}</h1>
      <div className="head-day">{dayName}</div>
      <div className="head-tasks-left">할 일 {leftTaskCount}개 남음</div>
    </div>
  );
}

export default TodoHead;
