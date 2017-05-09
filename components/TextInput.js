import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            inputText: 'inital text'
        }
    }

    inputTextChange(e){
        this.setState({
            inputText: e.target.value
        })
    }

    render(){
        return (
            <div>
                <input 
                    type='text'
                    placeholder='place holder'
                    value={this.state.inputText}
                    onChange={this.inputTextChange.bind(this)}
                />
                <TextDisplay textDisplay={this.state.inputText}/>
            </div>
        )
    }
}

export default TextInput