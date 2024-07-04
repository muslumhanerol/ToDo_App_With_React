import React from 'react'

function TodoForm({ addTodo }) {
  return (
    <>
      <form className='TodoForm'>
        <input type='text' value={"Görev"} className='TodoInput' />
        <button type='submit' className='TodoBtn'>Add Task</button>
      </form>

    </>
  )
}

export default TodoForm;
