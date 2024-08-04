import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoContainer from './TodoContainer';

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]); //useState([])= başlangıç degeri boş dizidir. //Tüm todo ların tutulacağı yer.

    const addTodo = todo => { //yeni todo ekleme.
        setTodos([...todos, { //todos içerisindeki herşey,
            id: uuidv4(),
            desc: todo, //kullanıcı ne yazmışsa gel onu yaz dedik.
            completed: false, //görev yeni eklendiğinden tamamlanmamıştır yanı false.
            isEditing: false
        }]);
    };

    // Todo.js e göndermek için tamamlanma ve tamamlamadan çıkarma fonk.
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo)); //completed false true, true ise false yapacak.
    }


    //SİLME işlemei
    const deleteTask = (id) => setTodos(todos.filter((todo) => todo.id != id))
    //dizi içerisinde dolaş, silinecek olanı ordan çıkart, geri kalanları yeni bir diziye koymak. yeni dizi=todos.filter((todo) => todo.id != id. ve setTodos vesilesiyle todos içerisine koyuyor.
    //deleteTask fonk. buradan direk todo ya yollayamayız ilk todocontainer e gönder ardından todo.js e gönder. burda 48.satırda gönderdik, todocontainerde 4. satırda karşıladık.

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
            })
        );
    }


    // //alternatif uzun yol.
    // const deleteTaskAlternative = (id) => {
    //     const newTodos = []
    //     for (let i = 0; i < todos.length; i++) {
    //         if (todos[i].id != id) {
    //             newTodos.push(todos[i]); //silinmeyecek olanları koyduğumuz yer.
    //         }
    //     }
    //     console.log("Silinmemiş Hali", todos);
    //     console.log("Silinmiş Hali", newTodos);
    // }


    return (
        <>
            <div className='TodoWrapper'>
                <h1>Todo App</h1>
                <TodoForm addTodo={addTodo} todos={todos} />
                <TodoContainer
                    todos={todos}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTodo={editTodo} //todoContainer içinde karşıla. 5. satır
                />

            </div>
        </>
    )
}

export default TodoWrapper