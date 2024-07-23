import React from 'react'
import Todo from './Todo'

const TodoContainer = ({ todos, toggleComplete, deleteTask }) => {
    //deleteTask i todo ya gönderdik. 15.satır
    return (
        <>
            <div className='TodoContainer'>
                {
                    todos.map((todo) => {
                        return <Todo // Todo.js e gönderdiklerimiz.
                            key={todo.id}
                            task={todo}
                            toggleComplete={toggleComplete}
                            deleteTask={deleteTask} //Todo js.de 5.satırda karşıladık.
                        />
                    })
                }
            </div>

        </>
    )
}

export default TodoContainer