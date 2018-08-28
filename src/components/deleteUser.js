import React, {Component} from 'react'

const deleteUser = async _id => {
    return await fetch(`http://localhost:4000/${_id}`, {
        method: 'delete'
    }).then(response => {
        response.json().then(json => {
            return json;
        })
    });
};
export default deleteUser;