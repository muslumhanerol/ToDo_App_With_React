import React from 'react'
import Todo from './Todo'

const TodoContainer = () => {
    return (
        <>
            {
                todos.map((todo) => {
                    return <Todo // Todo.js e gönderdiklerimiz.
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                    />
                })
            }
        </>
    )
}

export default TodoContainer