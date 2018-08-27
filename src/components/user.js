import React, {Fragment} from 'react'
const user = user => {
        return(
            <Fragment className="user">
                <h1>{user.firstName} {user.lastName}</h1>
                <p>{user.email}</p>
            </Fragment>
        )
};
export default user;