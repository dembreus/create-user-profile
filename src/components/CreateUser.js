import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";

export default class CreateUser extends Component {
    state = {

    };
    render(){
        return(
            <Fragment className='create-user'>
                <NavBar/>
                <h1>Create User</h1>
            </Fragment>
        )
    }
}