import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete }) => {
    console.log(task);
    console.log(toggleComplete);
    return (
        <>
            <div className='Todo'>
                <p>
                    {task.desc}
                </p>
                <FontAwesomeIcon icon={faHouse} />
            </div>
        </>
    )
}

export default Todo;