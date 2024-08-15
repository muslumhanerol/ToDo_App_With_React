import React, { useState } from 'react'

const TodoEditForm = ({ task, saveTodo }) => { //todocontainer den gönderildi saveTodo buradan karşılandı.
    const [value, setValue] = useState(task.desc);

    const handleSubmit = () => {
        e.preventDefault(); //Form submit old. reflesh olmasının önüne geçer.
        saveTodo(task.id, value);
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit} className='TodoForm'>
                <input
                    type='text'
                    value={value}
                    onChange={
                        (e) => { setValue(e.target.value) }
                    }
                    className='TodoInput'
                    placeholder='Update Task'

                />
                <button type='submit' className='TodoBtn TodoSaveBtn'>Save</button>
            </form> */}
        </>//2.09.45
    )
}

export default TodoEditForm