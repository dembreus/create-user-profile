import React from 'react'
import {BrowserRouter,
        Route,
        Switch} from 'react-router-dom'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import UserProfile from './components/UserProfile'
import UserLogin from './components/UserLogin'
import ListOfUsers from "./components/ListOfUsers";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/all-users' component={ListOfUsers}/>
            <Route path='/create-user' component={CreateUser}/>
            <Route path='/user-profile' component={UserProfile}/>
            <Route path='/user-login' component={UserLogin}/>
        </Switch>
    </BrowserRouter>
)

