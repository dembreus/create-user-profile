import React, { Fragment } from "react";
import "./css/NavBar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import UserProfile from "./components/UserProfile";
import UserLogin from "./components/UserLogin";
import ListOfUsers from "./components/ListOfUsers";
import NavBar from "./components/NavBar";
import UpdateProfile from "./components/UpdateProfile";

const child = ({ match }) => {
  return (
    <div>
      <UserProfile match={match} />
    </div>
  );
};
const profileChild = ({ match }) => {
  return (
    <div>
      <UpdateProfile match={match} />
    </div>
  );
};
export default () => (
  <Router>
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all-users" component={ListOfUsers} />
        <Route path="/create-user" component={CreateUser} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route path="/user-login" component={UserLogin} />
        <Route path="/user-profile/:id" component={child} />
        <Route path="/update-profile/:id" component={profileChild} />
      </Switch>
    </Fragment>
  </Router>
);
