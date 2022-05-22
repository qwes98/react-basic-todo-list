import React from 'react';
import './TodoCreate.css';
import { MdAdd } from 'react-icons/md';

function TodoCreate() {
  return (
    <>
      <div className="insert-form-wrapper">
        <form className="insert-form">
          <input
            className="insert-form-input"
            placeholder="할 일을 입력 후, Enter 를 누르세요"
          />
        </form>
      </div>
      <div className="create-btn open">
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
