/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            <h2>{user.length}</h2>
            <div>
                {
                    user.map(user => <p key ={user._id}>{user.name} :{user.email}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Users;