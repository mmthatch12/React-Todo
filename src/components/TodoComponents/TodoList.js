// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

const TodoList = props =>  {
    console.log('from TodoList', props)
    return (
        <div>
            {props.todo.map(item => (
                <Todo item={item} key={item.id} toggleTask={props.toggleTask} />
            ))}
        </div>
    )
}



export default TodoList