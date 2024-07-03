import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]); //useState([])= başlangıç degeri boş dizidir. //Tüm todo ların tutulacağı yer.

    console.log(uuidv4());

    const addTodo = todo => { //kullanıcı ekleye bastığı zaman çalışacak.
        setTodos([...todos, { //todos içerisindeki herşey,
            id: uuidv4,
            desc: todo, //kullanıcı ne yazmışsa gel onu yaz dedik.
            completed: false //görev yeni eklendiğinden tamamlanmamıştır yanı false.
        }])
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