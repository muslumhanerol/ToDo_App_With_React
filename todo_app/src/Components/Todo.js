import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete }) => {
    console.log(task);
    console.log(toggleComplete);
    return (
        <>
            <div className='Todo'>
                <p>
                    {task.desc}
                </p>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} />

            </div>
        </>
    )
}

export default Todo;