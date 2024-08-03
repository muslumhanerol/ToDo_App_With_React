import React from 'react'
import Todo from './Todo'
import TodoEditForm from './TodoEditForm'

const TodoContainer = ({ todos, toggleComplete, deleteTask }) => {
    //deleteTask i todo ya gönderdik. 15.satır
    return (
        <>
            <div className='TodoContainer'>
                {
                    todos.map((todo) => {

                        //Normal if yazımı
                        if (todo.isEditing) {
                            return <TodoEditForm />
                        } else {
                            return <Todo // Todo.js e gönderdiklerimiz.
                                key={todo.id}
                                task={todo}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask} //Todo js.de 5.satırda karşıladık.
                            />
                        }

                    })
                }
            </div>

        </>
    )
}

export default TodoContainer

//turner if yazımı
//    return todo.isEditing ?  (<TodoEditForm /> )
//     : <Todo // Todo.js e gönderdiklerimiz.
// key={todo.id}
// task={todo}
// toggleComplete={toggleComplete}
// deleteTask={deleteTask} //Todo js.de 5.satırda karşıladık.
// />
