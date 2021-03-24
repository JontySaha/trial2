import React, { Component } from 'react';
import Get from './Get';
import Post from './Post';
import Delete from './Delete';
import axios from 'axios';

class Page extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('http://localhost:9000/subscribers')
            .then(response => {
                this.setState({posts: response.data});
            });
    }

    render() {
        const posts = this.state.posts.map(post =>{
            return <Get key={post.id} name={post.name}/>
        });

        return (
            <div>
                {posts}
                <Post/>
                <Delete/>
            </div>
        );
    }
}

export default Page;