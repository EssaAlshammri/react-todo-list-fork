import React, { Component } from 'react';

class TextDisplay extends Component{

    handleDeleteLetter(){
        console.log('Deleting Letter')
        this.props.deleteLetter()
    }

    render(){
        return (
            <div>
                <div>{this.props.textDisplay}</div>
                <button onClick={this.handleDeleteLetter.bind(this)}>Delete Letter</button>
            </div>
        )
    }
}

export default TextDisplay