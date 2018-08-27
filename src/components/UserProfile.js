import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";
// const getProfiles = async id => {
//     fetch(`http://localhost:4000/${id}`, {})
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(JSON.stringify(myJson));
//     });
// };

export const getProfiles = async () => {
    const response = await fetch('http://localhost:4000');
    return await response.json()
};
const getProfile = async id => {
    return await fetch(`http://localhost:4000/${id}`, {})
        .then(response => response.json());
};
const deleteUser = async _id => {
    return await fetch(`http://localhost:4000/${_id}`, {
        method: 'delete'
    }).then(response => {
        response.json().then(json => {
            return json;
        })
    });
};

export default class UserProfile extends Component {
    state = {
        profile: {},
        profiles: [],
        _id: "D1DsZCGYFW76LlGI"
    };

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const profile = await getProfile(this.state._id);
            this.setState({profile});
            const profiles = await getProfiles();
            this.setState({profiles})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const profile = this.state.profile;
        const profiles = this.state.profiles.filter(profile => profile._id !== this.state.profile._id);
        return (
            <Fragment className='user-profile'>
                <NavBar/>
                <h1>User Profile</h1>
                <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
                <h3>Other Users</h3>
                <h4>{`${profiles.map(profile => (` ${profile.firstName} ${profile.lastName}`))}`}</h4>
                <button className="btn btn-danger" onClick={deleteUser(this.state._id)}>Delete Profile</button>
            </Fragment>
        )
    }
}