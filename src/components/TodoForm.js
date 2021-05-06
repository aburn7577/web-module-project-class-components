import React from 'react'

class TodoForm extends React.Component {
    // constructor with state (CCR)-component-constructor-render
    constructor() {
        super()
        this.state = {
            newItem: ''
        }
    }

    render() {
        return (
            <form>
                <input type='text' name='item' />
                <button>Add</button>
            </form>
        )
    }

}

export default TodoForm