import React, {Component} from 'react';
import UserName from "./UserName";

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <UserName src='https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
                          alt='avatar'
                          name='essedger'/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className='post__name'>account2</div>
                <div className='post__descr'>description text to 2nd post</div>
            </div>
        )
    }
}

export default Post;
