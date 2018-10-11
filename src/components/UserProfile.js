import React, { Component, Fragment } from "react";
import deleteUser from "./deleteUser";
import getProfile from "./getProfile";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }
  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const profile = await getProfile(id);
      this.setState({ profile });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { profile } = this.state;
    // const users = this.state.users.filter(profile => profile._id !== this.state.profile._id);
    return (
      <Fragment className="user-profile">
        <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
        <h2>Email</h2>
        <h4>{profile.email}</h4>
        <h2>Phone Number</h2>
        <h4>{profile.phoneNumber}</h4>
        {/*<h3>Other Users</h3>*/}
        {/*<h4>{users.map(profile => (user(profile)))}</h4>*/}
        <button
          className="btn btn-info"
          onClick={() =>
            window.location.replace(`/update-profile/${profile._id}`)
          }
        >
          Update Profile
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            deleteUser(profile._id).then(() =>
              window.location.replace("/all-users")
            )
          }
        >
          Delete Profile
        </button>
      </Fragment>
    );
  }
}
