import React from 'react'

const getProfiles = async () => {
    const response = await fetch('https://create-user-backend-axmjvpznmy.now.sh/');
    return await response.json()
};
const getProfile = async id => {
    return await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${id}`, {})
        .then(response => response.json());
};
export default getProfiles;