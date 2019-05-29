import React from 'react';
import UserName from "./UserName";
import Palette from "./Palette";

const Profile = () => {
    return (
        <div className='container profile'>
            <UserName src = 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
            alt='Man'
            name='essedger'/>
            <Palette/>
        </div>
    )
};

export default Profile;
