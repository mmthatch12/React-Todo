import React from 'react';

const Todo = props => {
    console.log('from Todo', props.todo)
    return (
        <div>
            {props.todo.map(item => (
                <h2>{item.task}</h2>
            ))}
        </div>

    )
}

export default Todo