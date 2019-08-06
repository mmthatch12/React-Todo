import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './index.css'


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    }

  }

  toggleTask = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if(task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task;
        }
      })
    })
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitTask = event => {
    event.preventDefault()
    this.addTodo(this.state.task)
    }

  addTodo = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
    console.log('thing', this.state.todo)
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <TodoList todo={this.state.todo} toggleTask={this.toggleTask}/>
        <TodoForm className='todoform' addTodo={this.addTodo} handleChanges={this.handleChanges} submitTask={this.submitTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
