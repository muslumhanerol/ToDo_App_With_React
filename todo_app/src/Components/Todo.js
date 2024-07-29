import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTask }) => {
    const confirmDelete = (id) => { //Sile bastığımızda uyarı çıkaran fonksiyon.
        let answer = window.confirm("Görev Silinecektir");
        if (answer) {
            deleteTask(id);
        }
    }
    return (
        <>
            <div className='Todo'>
                <p onClick={() => { toggleComplete(task.id) }} className={task.completed ? "Completed TodoTask" : "TodoTask"}>
                    {task.desc}
                </p>
                <div className='TodoButtons'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <FontAwesomeIcon icon={faTrash} onClick={() => confirmDelete(task.id)} />

                </div>
            </div >
        </>
    )
}

export default Todo;