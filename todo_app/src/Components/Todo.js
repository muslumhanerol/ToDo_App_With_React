import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
            </div>
        </>
    )
}

export default Todo;