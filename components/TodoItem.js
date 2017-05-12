import React, { Component } from 'react';

class TodoItem extends Component{

    handleComplete(){
        this.props.completeTodo(this.props.todoItem.id)
    }

    handleDelete(){
        this.props.deleteTodo(this.props.todoItem.id)
    }
    

    render(){
        return (
            <li>
                    <div>{this.props.todoItem.text}</div>
                    <button onClick={this.handleComplete.bind(this)}>Mark as Complete</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete a TODO</button>
            </li>
        )
    }
}

export default TodoItem