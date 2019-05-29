import React, {Component} from 'react';
import ErrorMessage from "./ErrorMessage";
import InstagramService from "../services/instaService";

class Palette extends Component {

    InstagramService = new InstagramService();

    state = {
        photos: [],
        error: false
    };

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstagramService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    };

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    static renderItems(arr) {
        return arr.map((item) => {
            const {src, alt, id} = item;
            return (
                <img src={src} alt={alt} key={id}/>
            )
        })
    }

    render() {
        const {error, photos} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = Palette.renderItems(photos);

        return (
            <div className='palette'>
                {items}
            </div>
        )
    }
}

export default Palette;
