import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';

class BlogItem extends Component {
    render() {
        return (
            <div>
                <Image width="20px" height="20px" src={this.props.src} />
                <TextBox text={this.props.text} />
            </div>
        );
    };
}

export default BlogItem;