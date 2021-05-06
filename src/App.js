import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const list = [
  {
    task: 'Make a Task',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      list: list,
      //newTask: ''
    }
  }
  addTask = newTask => {
    this.setState({
      list: [...this.state.list, {
        task: newTask,
        id: Date.now(),
        completed: false,
      }]
    })
  }
  handleChanges = evt => {
    this.setState({
      newTask: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.addTask(this.state.newTask)
    //this.setState({ newTask: '' })
  }

  toggledCompleted = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed // toggles back and forth
          }
        }
        return task
      })
    })
  }
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    })
  }



  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList clearCompleted={this.clearCompleted}
            list={this.state.list}
            toggledCompleted={this.toggledCompleted} />
        </div>
        <TodoForm value={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
