import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) { //value doluysa.

    }
  }


  return (
    <>
      <form className='TodoForm'>
        <input onChange={() => { setValue(e.target.value) }} type='text' className='TodoInput' placeholder='Görev Ekle' value={value} />
        <button type='submit' className='TodoBtn'>Add Task</button>
      </form>
    </>
  )
}

export default TodoForm;
