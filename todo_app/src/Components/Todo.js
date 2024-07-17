import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete }) => {

    return (
        <>
            <div className='Todo'>
                <p onClick={() => { toggleComplete(task.id) }} className='TodoTask'>
                    {task.desc}
                </p>
                <div className='TodoButtons'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </>
    )
}

export default Todo;