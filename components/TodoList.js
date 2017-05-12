import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((element) => {
                            return <TodoItem
                                    todoItem={element} 
                                    key={element.id}
                                    deleteTodo={this.props.actions.deleteTodo}
                                    completeTodo={this.props.actions.completeTodo}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList