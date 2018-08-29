import React from 'react'

const updateUser = async _id => {
    return await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${_id}`, {
        method: 'put'
    }).then(response => {
        response.json().then(json => {
            return json;
        })
    })
};
export default updateUser;