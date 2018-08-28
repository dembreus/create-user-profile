import React, { Fragment} from 'react'
import {Link} from 'react-router-dom'
import './css/NavBar.css'
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import UserProfile from './components/UserProfile'
import UserLogin from './components/UserLogin'
import ListOfUsers from "./components/ListOfUsers";
import NavBar from './components/NavBar'

const child = ({match}) => {
    return (<div>
        <UserProfile match={match}/>
        {console.log("match", match)}
        {console.log("props",this.props)}
    </div>)
};
export default () => (
    <Router>
        <Fragment>
            <nav className='navbar navbar-dark bg-dark'>
                <h1 className="navbar-head"><a className="nav-head" href="/">Create User Profile</a></h1>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><Link to='/'><span className="glyphicon glyphicon-home"/> Home</Link></li>
                        <li><Link to='/all-users'><span className='glyphicon glyphicon-globe'/> All Users</Link></li>
                        <li><Link to='/user-profile'><span className="glyphicon glyphicon-user"/> View Profile</Link></li>
                        <li><Link to='/user-profile/:id'><span className="glyphicon glyphicon-user"/> View Profile ID</Link></li>
                        <li><Link to='/user-login'><span className="glyphicon glyphicon-log-in"/> Log In</Link></li>
                        <li role="separator" className="divider"></li>
                        <li><Link to='/create-user'><span className="glyphicon glyphicon-pencil"/> Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
            {console.log(this.props)}
            <Switch>

                <Route path='/' exact component={Home}/>
                <Route path='/all-users' component={ListOfUsers}/>
                <Route path='/create-user' component={CreateUser}/>
                <Route exact path='/user-profile' component={UserProfile}/>
                <Route path='/user-login' component={UserLogin}/>
                <Route path='/user-profile/:id' component={child}/>
            </Switch>
        </Fragment>

    </Router>
)

