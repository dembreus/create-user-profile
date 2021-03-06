import React, {Component, Fragment} from 'react'
import user from './user'
import getUsers from './getUsers'

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
        console.log(this.state.users);
        const users = this.state.users;
        return(
            <Fragment>
                <h1>All Users</h1>
                <h3>{users.map(profile => (
                    <button className="btn btn-light" onClick={() => window.location.replace(`/user-profile/${profile._id}`)}>
                        {user(profile)}
                    </button>
                ))}</h3>
            </Fragment>
        )
}
}