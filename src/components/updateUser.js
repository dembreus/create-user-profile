import React from 'react'
import getProfile from "./getProfile";

const getUserById = async id => {
    const response = await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${id}`,{mode: 'cors'})
    return await response.json()
};
const updateUser = async (_id, user)=> {
    await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${_id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(user)
    });
    console.log(getUserById(_id));
    alert('User Saved');
    return await getUserById(_id)
};
export default updateUser;