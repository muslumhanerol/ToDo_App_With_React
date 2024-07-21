import React from 'react'
import Todo from './Todo'

const TodoContainer = ({ todos, toggleComplete }) => {
    return (
        <>
            <div className='TodoContainer'>
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

export default TodoContainer