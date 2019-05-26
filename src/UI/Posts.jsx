import React, {Component} from 'react';
import Post from "./Post";

class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post alt='post'
                      src='https://www.cheatsheet.com/wp-content/uploads/2019/04/Planet-Earth-640x431.jpg'/>
                      <Post alt='post'
                      src='https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Singapore-parks-Windsor-nature-park.jpg'/>
            </div>
        )
    }
}

export default Posts;
