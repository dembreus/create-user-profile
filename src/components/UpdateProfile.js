import React, { Component, Fragment } from "react";
// import getProfile from './getProfile'
// import updateUser from './updateUser'
const getProfile = async id => {
  const resp = await fetch(
    `https://create-user-backend-axmjvpznmy.now.sh/${id}`,
    { mode: "cors" }
  );
  return await resp.json();
};
const updateUser = async (_id, profile) => {
  return await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${_id}`, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(profile)
  })
    .then(console.log("getProfile", getProfile(_id)))
    .then(alert("User Saved"))
    .then(getProfile(_id));
};
export default class UpdateProfile extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         profile: {}
  //     }
  // }
  state = {
    profile: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    }
  };

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const profile = await getProfile(id);
      this.setState({ profile });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const profile = { ...this.state.profile };
    profile[input.name] = input.value;
    this.setState({ profile });
  };

  render() {
    const { profile } = this.state;
    return (
      <Fragment>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const { profile } = this.state;
            const updated = await updateUser(profile._id, {
              firstName: profile.firstName,
              lastName: profile.lastName,
              email: profile.email,
              phoneNumber: profile.phoneNumber,
              password: profile.password,
              confirmPassword: profile.confirmPassword
            });
            this.setState({ profile: updated });
            console.log("onSubmit profile", updated);
            // window.location.replace(`/user-profile/${profile._id}`)
          }}
        >
          {console.log("current state", this.state)}
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="validationServer01"
                value={profile.firstName}
                placeholder="First name"
                onChange={this.handleChange}
                required
              />
              {/*<div className="valid-feedback">*/}
              {/*Looks good!*/}
              {/*</div>*/}
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input
                type="text"
                className="form-control "
                name="lastName"
                id="validationServer02"
                value={profile.lastName}
                placeholder="Last name"
                onChange={this.handleChange}
                required
              />
              {/*<div className="valid-feedback">*/}
              {/*Looks good!*/}
              {/*</div>*/}
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServerUsername">Email Address</label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control  rounded"
                  name="email"
                  id="validationServerEmail"
                  value={profile.email}
                  placeholder="example@example.com"
                  aria-describedby="inputGroupPrepend3"
                  onChange={this.handleChange}
                  required
                />
                {/*<div className="invalid-feedback">*/}
                {/*Please input a valid a Email.*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03">Phone Number</label>
              <input
                type="number"
                className="form-control "
                name="phoneNumber"
                id="validationServer03"
                value={profile.phoneNumber}
                placeholder="xxx-xxx-xxxx"
                onChange={this.handleChange}
                required
              />
              {/*<div className="invalid-feedback">*/}
              {/*Please provide a valid phone number.*/}
              {/*</div>*/}
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer04">Password</label>
              <input
                type="password"
                className="form-control "
                name="password"
                id="validationServer04"
                placeholder="New password"
                onChange={this.handleChange}
                required
              />
              {/*<div className="invalid-feedback">*/}
              {/*Password does not match.*/}
              {/*</div>*/}
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer05">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="firstName"
                id="validationServer05"
                placeholder="re-enter password"
                onChange={this.handleChange}
                required
              />
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
          <button type="submit" className="btn btn-success">
            <span className="glyphicon glyphicon-ok" /> Save
          </button>
        </form>
      </Fragment>
    );
  }
}
