import React, {Component} from 'react';
import UserName from "./UserName";
import InstagramService from "../services/instaService";
import ErrorMessage from "./ErrorMessage";

class Users extends Component {

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

    static renderItems(arr){
        return arr.map((item) => {
            const {name, photo, alt, id}= item;
            return <UserName
                    key={id}
                    src={photo}
                    alt={alt}
                    name={name}
                    min/>
        })
    }

    render() {
        const {error, posts} = this.state;
        if (error){
            return <ErrorMessage/>
        }

        const items = Users.renderItems(posts);
        return (
            <div className='right'>
                <UserName src='https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
                          alt='avatar'
                          name='essedger'/>

                <div className='users__block'>
                    {items}
                </div>
            </div>
        )
    };
}

export default Users;
