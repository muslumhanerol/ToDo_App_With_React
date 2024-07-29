import React, { useState } from 'react'

const TodoEditForm = ({ task }) => {
    const [value, setValue] = useState(task.desc);

    const handleSubmit = () => {
        e.preventDefault(); //Form submit old. reflesh olmasının önüne geçer.

    }

    return (
        <>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }} />
            </form>
        </>
    )
}

export default TodoEditForm