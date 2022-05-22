import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  return (
    <div className="list-wrapper">
      <TodoItem
        id={1}
        text="할일 1"
        done
      />
      <TodoItem
        id={2}
        text="할일 2"
        done
      />
      <TodoItem
        id={3}
        text="할일 3"
      />
      <TodoItem
        id={4}
        text="할일 4"
      />
    </div>
  );
}

export default TodoList;
