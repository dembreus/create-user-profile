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
const getProfile = async id =>

    await fetch(`http://localhost:4000/D1DsZCGYFW76LlGI`, {})
        .then(response => response.json());


export default class UserProfile extends Component {
    state = {
        profile: {},
        profiles:[]
    };
    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const profile = await getProfile(id);
            this.setState({ profile });
            const profiles = await getProfiles();
            this.setState({profiles})
        } catch(err) {
            console.log(err)
        }
    }
    render(){
        const profile = this.state.profile;
        const profiles = this.state.profiles.filter(profile => profile._id !== this.state.profile._id);
        return(
            <Fragment className='user-profile'>
                <NavBar/>
                <h1>User Profile</h1>
                <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
                <h3>Other Users</h3>
                <h4>{`${profiles.map(profile => (` ${profile.firstName} ${profile.lastName}`))}`}</h4>
            </Fragment>
        )
    }
}