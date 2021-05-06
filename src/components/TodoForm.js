import React from 'react'

class TodoForm extends React.Component {
    // constructor with state (CCR)-component-constructor-render
    constructor() {
        super()
        this.state = {
            newItemTask: ''
        }
    }
    handleChanges = evt => {
        this.setState({
            newItemTask: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault()
        this.props.addTask(this.state.newItemTask)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.newItemTask}
                    type='text' name='item'
                    onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }

}

export default TodoForm