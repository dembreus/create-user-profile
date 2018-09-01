import React from 'react'

const getProfile = async id => {
    return await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${id}`, {mode: 'cors'})
        .then(response => response.json());
};
export default getProfile;