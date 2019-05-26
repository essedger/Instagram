import React, {Component} from 'react';
import Post from "./Post";
import InstagramService from "../services/instaService";
import UserName from "./UserName";
import ErrorMessage from "./ErrorMessage";

class Posts extends Component {

    InstagramService = new InstagramService();

    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstagramService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    };

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    renderItems(arr){
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id}= item;
            return <div className='post' key={id}>
                <UserName src={photo}
                          alt={altname}
                          name={name}
                          min/>
                <img src={src} alt={alt}/>
                <div className='post__name'>
                    {name}
                </div>
                <div className='post__descr'>
                    {descr}
                </div>
            </div>
        })
    }

    render() {
        const{error, posts} = this.state;
        if (error){
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        return (
            <div className='left'>
                {items}
            </div>
        )
    }
}

export default Posts;
