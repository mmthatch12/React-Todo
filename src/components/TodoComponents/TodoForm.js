import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    submitItem = event => {
    event.preventDefault()
    this.props.addTodo(this.state.item)
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input 
                    type="text"
                    value={this.item}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }


}

export default TodoForm