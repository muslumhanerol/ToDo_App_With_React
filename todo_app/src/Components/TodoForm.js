import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <form className='TodoForm'>
        <input type='text' className='TodoInput' placeholder='Görev Ekle' />
        <button type='submit' className='TodoBtn'>Add Task</button>
      </form>
    </>
  )
}

export default TodoForm;
