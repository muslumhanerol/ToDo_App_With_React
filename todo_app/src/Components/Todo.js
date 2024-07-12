import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    return (
        <>
            <div className='Todo'>
                <p className='Completed'>
                    Görev 1
                </p>
                <FontAwesomeIcon icon={faHouse} />

            </div>
        </>
    )
}

export default Todo