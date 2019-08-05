import React from 'react';

import './Todo.css'

const Todo = props => {
    return (
        <p>{props.item.task}</p>
    )
}

export default Todo