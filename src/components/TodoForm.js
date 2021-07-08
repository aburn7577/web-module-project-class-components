import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }
  handleChanges = evt => {
    this.setState({
      inputValue: evt.target.value
    })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.handleAdd(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} value={this.state.inputValue} type='text' name='item' />
        <button>ADD Task</button>
      </form>
    );
  }
}

export default TodoForm