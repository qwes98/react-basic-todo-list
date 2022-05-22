import React from 'react';
import './TodoItem.css';
import { MdDone, MdDelete } from 'react-icons/md';

function TodoItem() {
  const text = '할일입니다';

  return (
    <div className="item-wrapper">
      <div className="item-check-circle done">
        <MdDone />
      </div>
      <div className="item-text done">{text}</div>
      <div className="item-remove-btn">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
