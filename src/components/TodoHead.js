import React from 'react';
import './TodoHead.css';

function TodoHead() {
  const dateString = '2019년 7월 10일';
  const dayName = '수요일';
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
