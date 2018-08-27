import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";
import '../css/UserLogin.css'

export default class UserLogin extends Component {
    state = {
        email: '',
        password: '',
        wasRemembered: false,
        user: {}
    };

    render() {
        return (
            <Fragment className='user-login '>
                <NavBar/>
                <h1>User Login</h1>
                <div className="container">
                    <div className="card card-container">
                        {/*<img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" />*/}
                        <img id="profile-img" className="profile-img-card"
                             src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
                        <p id="profile-name" className="profile-name-card">{this.state.username}</p>
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"/>
                            <input type="email"
                                   id="inputEmail"
                                   className="form-control"
                                   placeholder="Email address"
                                   onChange={e => this.setState({email: e.target.value})}
                                   required autoFocus/>
                            <input type="password"
                                   id="inputPassword"
                                   className="form-control"
                                   placeholder="Password" required
                                   onChange={e => this.setState({password: e.target.value})}/>
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           value="remember-me"/> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                                <a href={`/${this.state.user._id}`}/>Sign in
                            </button>
                        </form>
                        <a href="#" className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}