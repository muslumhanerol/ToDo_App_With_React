import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]); //useState([])= başlangıç degeri boş dizidir. //Tüm todo ların tutulacağı yer.

    const addTodo = todo => { //kullanıcı ekleye bastığı zaman çalışacak.
        setTodos([...todos, { //todos içerisindeki herşey,
            id: uuidv4(),
            desc: todo, //kullanıcı ne yazmışsa gel onu yaz dedik.
            completed: false //görev yeni eklendiğinden tamamlanmamıştır yanı false.
        }]);
    };

    // Todo.js e göndermek için fonk
    const toggleComplete = (id) => {
        todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo);
    }

    return (
        <>
            <div className='TodoWrapper'>
                <h1>Todo App</h1>
                <TodoForm addTodo={addTodo} todos={todos} />
                {
                    todos.map((todo) => {
                        return <Todo // Todo.js e gönderdiklerimiz.
                            key={todo.id}
                            task={todo}
                            toggleComplete={toggleComplete}
                        />
                    })
                }
            </div>
        </>
    )
}

export default TodoWrapper