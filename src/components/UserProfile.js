import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";

export default class UserProfile extends Component {
    state = {

    };
    render(){
        return(
            <Fragment className='user-profile'>
                <NavBar/>
                <h1>User Profile</h1>
            </Fragment>
        )
    }
}