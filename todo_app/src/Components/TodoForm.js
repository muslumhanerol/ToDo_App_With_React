import React from 'react'

function TodoForm({ addTodo }) {
  return (
    <>
      <form className='TodoForm'>
        <input type='text' value={"Görev"} className='TodoInput' />

      </form>

    </>
  )
}

export default TodoForm;
