import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]); //useState([])= başlangıç degeri boş dizidir. //Tüm todo ların tutulacağı yer.
    
    const addTodo = todo => { //kullanıcı ekleye bastığı zaman çalışacak.
        setTodos([...todos,{ //todos içerisindeki herşey,
            id: 1,
            desc:todo, //kullanıcı ne yazmışsa gel onu yaz dedik.
            completed:false //görev yeni eklendiğinden tamamlanmamıştır yanı false.
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