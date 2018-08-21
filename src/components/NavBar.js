import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <nav className='navbar navbar-default'>
                    <h1 className="navbar-head"><a className="nav-head" href="/">Home</a></h1>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-left">
                            <li><Link to="/">
                                <button className="btn btn-default btn-lg"><span className="glyphicon glyphicon-home"/> Home
                                </button>
                            </Link></li>
                            <li><Link to="/user-profile">
                                <button className="btn btn-default btn-lg"><span
                                    className="glyphicon glyphicon-user"/> View Profile
                                </button>
                            </Link></li>
                            <li><Link to="/user-login">
                                <button className="btn btn-default btn-lg"><span
                                    className="glyphicon glyphicon-briefcase"/> Log In
                                </button>
                            </Link></li>
                            <li><Link to="/create-user">
                                <button className="btn btn-default btn-lg"><span
                                    className="glyphicon glyphicon-earphone"/> Sign Up
                                </button>
                            </Link></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
};
