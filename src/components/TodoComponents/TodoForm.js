import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input 
                    type="text"
                    value={this.task}
                    name="task"
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }


}

export default TodoForm