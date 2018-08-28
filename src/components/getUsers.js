import React from 'react'

export const getUsers = async () => {
    const response = await fetch('https://create-user-backend-axmjvpznmy.now.sh/');
    return await response.json()
};
export default getUsers