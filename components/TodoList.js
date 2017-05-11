import React, { Component } from 'react';

class TodoList extends Component{

    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((element) => {
                            return <li key={element.id}>{element.text}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList