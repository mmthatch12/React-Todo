// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

const TodoList = props =>  {
    console.log('from TodoList', props)
    return (
        <Todo  todo={props.todo} key={props.todo.id} />
    )
}



export default TodoList