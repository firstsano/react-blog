import React, { Component } from 'react';
import Image from '../components/Image';
import TextBox from '../components/TextBox';
import BlogItem from '../components/BlogItem';
import BlogList from '../components/BlogList';

const blogItems = [
    {text: "blog 1", src: "src 1"},
    {text: "blog 2", src: "src 2"},
    {text: "blog 3", src: "src 3"},
    {text: "blog 4", src: "src 4"},
    {text: "blog 5", src: "src 5"},
];

class App extends Component {
    render() {
        return (
            <div>
                <Image width="10px" height="10px" src="test" alt="test"/>
                <TextBox text="test" />
                <BlogItem src="test1" text="test1" />
                <BlogItem src="test2" text="test2" />
                <BlogItem src="test3" text="test3" />
                <BlogList items={blogItems} />
            </div>
        );
    }
}

export default App;
