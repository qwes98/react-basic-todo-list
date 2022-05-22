import React from 'react'
import './TodoTemplate.css'

function TodoTemplate({children}) {
  return (
    <div className='container'>{children}</div>
  )
}

export default TodoTemplate