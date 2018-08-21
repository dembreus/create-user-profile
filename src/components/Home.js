import React,{Component, Fragment} from 'react'
import NavBar from './NavBar'

export default class Home extends Component{
    state = {

    };
    render(){
        return(
            <Fragment>
                <NavBar/>
                <h1>Welcome Home</h1>
            </Fragment>
        )
    }
}