import React, {Component, Fragment} from 'react'
import '../css/CreateUser.css'

export default class CreateUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: 0,
        email: '',
        password: '',
        comfirmPassword: '',
        hasAgreed: false,
        termsAndConditions: 'By marking the checkbox, you agree that you are awesome and that you have no intent ' +
            'to market or sell any of this information on this website.'
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = JSON.stringify({...this.state});
        await fetch('https://create-user-backend-axmjvpznmy.now.sh/', {
            method: 'post',
            body: data,
            headers: {
                "content-Type": "application/json"
            }
        })
            .then(() => window.location.replace('/all-users'))
};
    render() {
        return (
            <Fragment className='create-user'>
                <h1>Create User</h1>
                <form onSubmit={this.handleSubmit}>
                    {        console.log(this.state)
                    }
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input type="text"
                                   className="form-control"
                                   id="validationServer01"
                                   placeholder="First name"
                                   onChange={e => this.setState({firstName: e.target.value})}
                                   required/>
                            {/*<div className="valid-feedback">*/}
                                {/*Looks good!*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer02">Last name</label>
                            <input type="text"
                                   className="form-control "
                                   id="validationServer02"
                                   placeholder="Last name"
                                   onChange={e => this.setState({lastName: e.target.value})}
                                   required/>
                            {/*<div className="valid-feedback">*/}
                                {/*Looks good!*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServerUsername">Email Address</label>
                            <div className="input-group">
                                <input type="email"
                                       className="form-control  rounded"
                                       id="validationServerEmail"
                                       placeholder="example@example.com"
                                       aria-describedby="inputGroupPrepend3"
                                       onChange={event => this.setState({email: event.target.value})}
                                       required/>
                                {/*<div className="invalid-feedback">*/}
                                    {/*Please input a valid a Email.*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationServer03">Phone Number</label>
                            <input type="number"
                                   className="form-control "
                                   id="validationServer03"
                                   placeholder="xxx-xxx-xxxx"
                                   onChange={event => this.setState({phoneNumber: event.target.value})}
                                   required/>
                            {/*<div className="invalid-feedback">*/}
                                {/*Please provide a valid phone number.*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer04">Password</label>
                            <input type="password"
                                   className="form-control "
                                   id="validationServer04"
                                   placeholder="Password"
                                   onChange={event => this.setState({password: event.target.value})}
                                   required/>
                            {/*<div className="invalid-feedback">*/}
                                {/*Password does not match.*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer05">Confirm Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="validationServer05"
                                   placeholder="re-enter password"
                                   onChange={event => this.setState({confirmPassword: event.target.value})}
                                   required/>
                            {/*<div className="invalid-feedback">*/}
                                {/*Password does not match.*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="invalidCheck3"
                                   // onClick={event => this.setState({hasAgreed: !event.target.value})}
                                   required/>
                            <label className="form-check-label" htmlFor="invalidCheck3">
                                <a onClick={() => alert(this.state.termsAndConditions)}>Agree to terms and conditions</a>
                            </label>
                            {/*<div className="invalid-feedback">*/}
                                {/*You must agree before submitting.*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit form</button>
                </form>
            </Fragment>
        )
    }
}