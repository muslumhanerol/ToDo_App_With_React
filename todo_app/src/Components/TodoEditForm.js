import React, { useState } from 'react'

const TodoEditForm = () => {
    const [value, setValue] = useState("")
    return (
        <>
            <form className='TodoForm'>
                <input type='text' value={STATE} />

            </form>
        </>
    )
}

export default TodoEditForm