import React from 'react';

const Todo = props => {
    console.log('from Todo', props.todo)
    return (
        <p>{props.item.task}</p>
    )
}

export default Todo