import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  return (
    <div className="list-wrapper">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;
