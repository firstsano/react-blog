import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        return <span> {this.props.text} </span>;
    }
}

export default TextBox;