import React from 'react';
import UserName from "./UserName";

const Users = () => {
    return (
        <div className='right'>
            <UserName src='https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
                      alt='avatar'
                      name='essedger'/>

            <div className='users__block'>
                <UserName src='https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
                          alt='avatar'
                          name='essedger'
                          min/>
                          <UserName src='https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
                          alt='avatar'
                          name='galkin'
                          min/>
            </div>
        </div>
    )
};
export default Users;
