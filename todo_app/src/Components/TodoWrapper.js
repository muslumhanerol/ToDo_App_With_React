import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]); //useState([])= başlangıç degeri boş dizidir. //Tüm todo ların tutulacağı yer.
    
    const addTodo = todo => { //kullanıcı ekleye bastığı zaman çalışacak.
        setTodos()
    };

    return (
        <>
            <div className='TodoWrapper'>
                <h1>Todo App</h1>
                <TodoForm />
            </div>
        </>
    )
}

export default TodoWrapper