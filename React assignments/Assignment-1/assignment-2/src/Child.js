import React, { Component } from 'react';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                posts: data
            })
        })
    }

    render() {
        return (
            <div className='main'>
                <h1><u>Records from: "https://jsonplaceholder.typicode.com/posts"</u> </h1>
                <table>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                    {this.state.posts.map(post =>
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )}
                </table>
            </div >
        );
    }
}

export default Child;