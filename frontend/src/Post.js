import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state={
        name: '',
        subscriberToChannel: ''
    };

    postDataHandler=()=>{
        const post={
            name:this.state.name,
            subscriberToChannel:this.state.subscriberToChannel
        };

        axios.post('http://localhost:9000/subscribers',post);
    }


    render() {
        return (
            <div>
                <h1>Add data to database</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
                <label>Subscriber</label>
                <input type="text" value={this.state.subscriberToChannel} onChange={(event) => this.setState({subscriberToChannel: event.target.value})}/>
                <button onClick={this.postDataHandler}>Add</button>
            </div>
        );
    }
}

export default Post;