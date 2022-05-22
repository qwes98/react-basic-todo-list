import React from 'react';
import './TodoItem.css';
import { MdDone, MdDelete } from 'react-icons/md';

function TodoItem({ id, done, text }) {
  return (
    <div className="item-wrapper">
      <div className={`item-check-circle ${done && 'done'}`}>
        {done && <MdDone />}
      </div>
      <div className={`item-text ${done && 'done'}`}>{text}</div>
      <div className="item-remove-btn">
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
