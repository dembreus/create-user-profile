import React, {Component, Fragment} from 'react'
import user from './user'

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
                <h1>All Users</h1>
                <h3>{users.map(profile => (user(profile)))}</h3>
            </Fragment>
        )
}
}