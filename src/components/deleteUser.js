import React, {Component} from 'react'

const deleteUser = async _id => {
    return await fetch(`https://zeit.co/dembreus/create-user-backend/xffkuskspk/${_id}`, {
        method: 'delete'
    }).then(response => {
        response.json().then(json => {
            return json;
        })
    });
};
export default deleteUser;