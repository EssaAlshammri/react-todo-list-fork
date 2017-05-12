import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    inputTextChange(e){
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.inputText)
        this.setState({
            inputText: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type='text'
                        placeholder='What you wana do ?'
                        value={this.state.inputText}
                        onChange={this.inputTextChange.bind(this)}
                    />
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}

export default TodoInput