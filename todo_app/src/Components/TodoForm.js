import React, { useState } from 'react'

const TodoForm = ({ addTodo, todos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) { //value doluysa.
      addTodo(value);
      setValue("");//görev girme alanını temizler.
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input onChange={(e) => { setValue(e.target.value); }} type='text' className='TodoInput' placeholder='Görev Ekle' value={value} />
        {/* e=onChange, target= input bu inputta gerçekleşiyor, value=bu inputun valuesi. */}
        <button type='submit' className='TodoBtn'>Add Task</button>
      </form>
    </>
  )
}

export default TodoForm;
