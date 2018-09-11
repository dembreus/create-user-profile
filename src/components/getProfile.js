import React from 'react'

const getProfile = async id => {
    const resp = await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${id}`, {mode: 'cors'})
    return await resp.json();
};
export default getProfile;