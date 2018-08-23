import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";
import '../css/UserLogin.css'

export default class UserLogin extends Component {
    state = {};

    render() {
        return (
            <Fragment className='user-login '>
                <NavBar/>
                <h1>User Login</h1>

            </Fragment>
        )
    }
}