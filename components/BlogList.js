import React, { Component } from 'react';
import BlogItem from './BlogItem';

class BlogList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, i) => {
                        return (
                            <li key={i}>
                                <BlogItem text={item.text} src={item.src} />
                            </li>
                        );
                    });
                }
            </ul>
        );
    };
}

export default BlogList;
