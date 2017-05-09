import React, { Component } from 'react';

class TextDisplay extends Component{

    render(){
        return (
            <div>
                {this.props.textDisplay}
            </div>
        )
    }
}

export default TextDisplay