import React, {Component, Fragment} from 'react'
import NavBar from "./NavBar";
import user from "./user";
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
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            profiles: []
        }
    }
    // state = {
    //     profile: {},
    //     profiles: [],
    //     _id: "xgG3c4AdYRJwvVFg"
    // };

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const profile = await getProfile(id);
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
                <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
                <h2>Email</h2>
                <h4>{profile.email}</h4>
                <h2>Phone Number</h2>
                <h4>{profile.phoneNumber}</h4>
                {/*<h3>Other Users</h3>*/}
                {/*<h4>{profiles.map(profile => (user(profile)))}</h4>*/}
                    <a href="/"><button className="btn btn-info">Update Profile</button></a>
                    <button className="btn btn-danger" onClick={() => deleteUser(profile._id)}>Delete Profile</button>

            </Fragment>
        )
    }
}