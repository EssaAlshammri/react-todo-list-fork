import React, { Component } from 'react';
import actions  from '../redux/actions';

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
        //event.preventDefault();
        this.props.dispatch(actions.addTodo(this.state.inputText))
        this.setState({
            inputText: ''
        })
    }

    render(){
        return (
            <div>
                <input 
                    type='text'
                    placeholder='What you wana do ?'
                    value={this.state.inputText}
                    onChange={this.inputTextChange.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default TodoInput