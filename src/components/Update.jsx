/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser =useLoaderData()
    console.log(loadedUser);

    const handleUpdate = event =>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const email =form.email.value;
    
        const user ={name, email};
        console.log(user);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
            })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
        
        })
    }    
    return (
        <div>
            <h2>update info of {loadedUser.name}</h2>

            <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name} /><br />
        <input type="text" name="email" id="" defaultValue={loadedUser?.email}/><br />
        <input type="submit" value="Update" />
      </form>
        </div>
    );
};

export default Update;