import React, { useState } from 'react';
import './TodoCreate.css';
import { MdAdd } from 'react-icons/md';

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const onToggle = () => setOpen(!open);
  const onInputChange = e => setValue(e.target.value);

  return (
    <>
      {open && (
        <div className="insert-form-wrapper">
          <form className="insert-form">
            <input
              className="insert-form-input"
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              value={value}
              onChange={onInputChange}
            />
          </form>
        </div>
      )}
      <div
        className={`create-btn ${open && 'open'}`}
        onClick={onToggle}
      >
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
