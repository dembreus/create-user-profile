import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <nav className='navbar navbar-dark bg-dark'>
                    <h1 className="navbar-head"><a className="nav-head" href="/">Home</a></h1>
                                        {/*<div className="navbar-header dropdown">*/}
                        {/*<button type="button"*/}
                                {/*className="navbar-toggle dropdown-toggle"*/}
                                {/*data-toggle="collapse"*/}
                                {/*data-target="#myNavbar"*/}
                                {/*toggle='dropdown'>*/}
                            {/*<span className='glyphicon glyphicon-menu-hamburger logo'/>*/}
                        {/*</button>*/}
                    {/*</div>*/}
                    {/*<div className="collapse navbar-collapse" id="myNavbar">*/}
                        {/*<ul className="nav navbar-nav navbar-left">*/}
                            {/*<li><Link to="/">*/}
                                {/*<button className="btn btn-default btn-lg">*/}
                                    {/*<span className="glyphicon glyphicon-home"/> Home*/}
                                {/*</button>*/}
                            {/*</Link></li>*/}
                            {/*<li><Link to="/user-profile">*/}
                                {/*<button className="btn btn-default btn-lg">*/}
                                    {/*<span className="glyphicon glyphicon-user"/> View Profile*/}
                                {/*</button>*/}
                            {/*</Link></li>*/}
                            {/*<li><Link to="/user-login">*/}
                                {/*<button className="btn btn-default btn-lg">*/}
                                    {/*<span className="glyphicon glyphicon-log-in"/> Log In*/}
                                {/*</button>*/}
                            {/*</Link></li>*/}
                            {/*<li><Link to="/create-user">*/}
                                {/*<button className="btn btn-default btn-success btn-lg">*/}
                                    {/*<span className="glyphicon glyphicon-arrow-up"/> Sign Up*/}
                                {/*</button>*/}
                            {/*</Link></li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="/"><span className="glyphicon glyphicon-home"/> Home</a></li>
                            <li><a href="/all-users"><span className='glyphicon glyphicon-globe'/> All Users</a></li>
                            <li><a href="/user-profile"><span className="glyphicon glyphicon-user"/> View Profile</a></li>
                            <li><a href="/user-login"><span className="glyphicon glyphicon-log-in"/> Log In</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="/create-user"><span className="glyphicon glyphicon-pencil"/> Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
};
