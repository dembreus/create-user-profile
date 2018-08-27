import React, {Component, Fragment} from 'react'
import user from './user'
import NavBar from './NavBar'

export const getUsers = async () => {
    const response = await fetch('http://localhost:4000');
    return await response.json()
};

export default class ListOfUsers extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        try {
            // const id = this.props.match.params.id;
            const users = await getUsers();
            this.setState({users})
        } catch (err) {
            console.log(err)
        }
    }

    render(){

        const users = this.state.users;
        return(
            <Fragment>
                <NavBar/>
                <h1>All Users</h1>
                <h3>{users.map(profile => (
                    <button className="btn btn-light" onClick={() => window.location.replace(`/user-profile/${this.props.match.params.id}`)}>
                        {user(profile)}
                    </button>
                ))}</h3>
            </Fragment>
        )
}
}