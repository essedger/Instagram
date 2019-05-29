class InstagramService {
    constructor(){
        this._apiBase = 'http://localhost:3004/'
    };

    getResource = async (url) => {
       const res = await fetch(`${this._apiBase}${url}`);
       if(!res.ok){
           throw new Error(`Could not fetch ${url}, received ${res.status}`);
       }
       return res.json();
    };

    getAllPosts = async () => {
        return await this.getResource('posts/');
    };

    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    };

    getAllUsers = async () => {
        const res = await this.getResource('posts/');
        return res.map(this.transformUsers);
    };

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    };

    transformUsers = (post) => {
        return {
            name: post.name,
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}

export default InstagramService;
