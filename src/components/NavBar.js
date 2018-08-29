import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <nav className='navbar navbar-dark bg-dark'>
                    <h1 className="navbar-head"><a className="nav-head" href="/">Create User Profile</a></h1>
                    <div className="dropdown">
                        <button className="btn btn-default navbar-toggle" type="button" id="dropdownMenu1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span className="glyphicon glyphicon-menu-hamburger "></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><Link to='/'><span className="glyphicon glyphicon-home"/> Home</Link></li>
                            <li><Link to='/all-users'><span className='glyphicon glyphicon-globe'/> All Users</Link></li>
                            {/*<li><Link to='/user-profile'><span className="glyphicon glyphicon-user"/> View Profile</Link></li>*/}
                            {/*<li><Link to='/user-login'><span className="glyphicon glyphicon-log-in"/> Log In</Link></li>*/}
                            <li role="separator" className="divider"></li>
                            <li><Link to='/create-user'><span className="glyphicon glyphicon-pencil"/> Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
};
