import React, {Component, Fragment} from 'react'
import getProfile from './getProfile'
import updateUser from './updateUser'
import getUserById from './updateUser'

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }
    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const profile = await getProfile(id);
            this.setState({profile});
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        const profile = this.state;
        return (
            <Fragment className='user-profile'>
                <form onSubmit={ async e => {
                    e.preventDefault()
                    const {profile} = this.state;
                    const updated = await updateUser(profile._id,
                        {firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        phoneNumber: profile.phoneNumber,
                        password: profile.password,
                        confirmPassword: profile.confirmPassword})
                    this.setState({profile: updated})
                }}>
                    {        console.log(this.state)
                    }
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input type="text"
                                   className="form-control"
                                   id="validationServer01"
                                   value={profile.firstName}
                                   placeholder="First name"
                                   onChange={e => this.setState({ ...this.state.profile, firstName: e.target.value})}
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
                                   value={profile.lastName}
                                   placeholder="Last name"
                                   onChange={e => this.setState({...this.state.profile, lastName: e.target.value})}
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
                                       value={profile.email}
                                       placeholder="example@example.com"
                                       aria-describedby="inputGroupPrepend3"
                                       onChange={event => this.setState({...this.state.profile, email: event.target.value})}
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
                                   value={profile.phoneNumber}
                                   placeholder="xxx-xxx-xxxx"
                                   onChange={event => this.setState({...this.state.profile, phoneNumber: event.target.value})}
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
                                   value={''}
                                   placeholder="Password"
                                   onChange={event => this.setState({...this.state.profile, password: event.target.value})}
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
                                   onChange={event => this.setState({...this.state.profile, confirmPassword: event.target.value})}
                                   required/>
                            {/*<div className="invalid-feedback">*/}
                            {/*Password does not match.*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/*<div className="form-group">*/}
                        {/*<div className="form-check">*/}
                            {/*<input className="form-check-input"*/}
                                   {/*type="checkbox"*/}
                                   {/*id="invalidCheck3"*/}
                                {/*// onClick={event => this.setState({hasAgreed: !event.target.value})}*/}
                                   {/*required/>*/}
                            {/*<label className="form-check-label" htmlFor="invalidCheck3">*/}
                                {/*<a onClick={() => alert(this.state.termsAndConditions)}>Agree to terms and conditions</a>*/}
                            {/*</label>*/}
                            {/*/!*<div className="invalid-feedback">*!/*/}
                            {/*/!*You must agree before submitting.*!/*/}
                            {/*/!*</div>*!/*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <button type="submit"
                            className="btn btn-success"
                            onClick={() => window.location.replace(`/user-profile/${profile._id}`)}>
                        <span className="glyphicon glyphicon-ok"/> Save</button>
                </form>
            </Fragment>
        )
    }
}