import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";
import '../css/CreateUser.css'

export default class CreateUser extends Component {
    state = {
        firstName: '',
        lastName: ''
    };


    render() {
        return (
            <Fragment className='create-user'>
                <NavBar/>
                <h1>Create User</h1>
                
                {/*<form className='login-form col-sm-4  centered'>*/}
                    {/*<ul>*/}
                        {/*<input type="text"*/}
                               {/*id="first-name"*/}
                               {/*name="first-name"*/}
                               {/*className="u-full-width"*/}
                               {/*required maxLength="72"*/}
                               {/*placeholder="First Name"/>/!*First Name*!/*/}
                        {/*<input type="text"*/}
                               {/*id="last-name"*/}
                               {/*name="last-name"*/}
                               {/*className="u-full-width"*/}
                               {/*required maxLength="72"*/}
                               {/*placeholder="Last Name"/>/!*Last Name*!/*/}
                        {/*<input type="text"*/}
                               {/*id="email-sign-up"*/}
                               {/*name="email-sign-up"*/}
                               {/*className="u-full-width"*/}
                               {/*required maxLength="128"*/}
                               {/*placeholder="Email Address"/>/!*Email*!/*/}
                        {/*/!*<div>*!/*/}
                        {/*/!*<input type="number"*!/*/}
                        {/*/!*id="phone-number"*!/*/}
                        {/*/!*name="phone-number"*!/*/}
                        {/*/!*required minLength="9"*!/*/}
                        {/*/!*maxLength="15"*!/*/}
                        {/*/!*className="u-full-width"*!/*/}
                        {/*/!*placeholder="xxx-xxx-xxxx"/>/!*Phone Number*!/*!/*/}
                        {/*/!*</div>*!/*/}

                        {/*/!*<div>*!/*/}
                        {/*/!*<input type="date"*!/*/}
                        {/*/!*id="date-of-birth"*!/*/}
                        {/*/!*name="date-of-birth"*!/*/}
                        {/*/!*className="u-full-width"*!/*/}
                        {/*/!*required minLength="6"*!/*/}
                        {/*/!*maxLength="10"*!/*/}
                        {/*/!*placeholder="mm-dd-yyyy"/>/!*Date of Birth*!/*!/*/}
                        {/*/!*</div>*!/*/}
                    {/*</ul>*/}
                {/*</form>*/}
                <form>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input type="text"
                                   className="form-control is-valid"
                                   id="validationServer01"
                                   placeholder="First name"
                                   required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer02">Last name</label>
                            <input type="text"
                                   className="form-control is-valid"
                                   id="validationServer02"
                                   placeholder="Last name"
                                   required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServerUsername">Email Address</label>
                            <div className="input-group">
                                <input type="email"
                                       className="form-control
                                       is-invalid"
                                       id="validationServerEmail"
                                       placeholder="example@example.com"
                                       aria-describedby="inputGroupPrepend3"
                                       required/>
                                <div className="invalid-feedback">
                                    Please input a valid a Email.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationServer03">Phone Number</label>
                            <input type="number"
                                   className="form-control is-invalid"
                                   id="validationServer03"
                                   placeholder="xxx-xxx-xxxx"
                                   required/>
                            <div className="invalid-feedback">
                                Please provide a valid phone number.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer04">Password</label>
                            <input type="password"
                                   className="form-control is-invalid"
                                   id="validationServer04"
                                   placeholder="Password"
                                   required/>
                            <div className="invalid-feedback">
                                Password does not match.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer05">Confirm Password</label>
                            <input type="password"
                                   className="form-control is-invalid"
                                   id="validationServer05"
                                   placeholder="re-enter password"
                                   required/>
                            <div className="invalid-feedback">
                                Password does not match.
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input is-invalid"
                                   type="checkbox"
                                   value=""
                                   id="invalidCheck3"
                                   required/>
                                <label className="form-check-label" htmlFor="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
            </Fragment>
    )
    }
    }